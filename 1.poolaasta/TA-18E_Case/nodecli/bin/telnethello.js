#!/usr/bin/env node

//USE 2 CMD TERMINALS "telnet localhost 8888"
//MAKE SURE telnet FEATURE IS TUNRED ON (WINDOWS FEATURES)

let net = require("net");

/*
let server = net.createServer(function(socket){
    socket.write("TelNet server says hello!");
}).listen(8888);
*/

let sockets = []

function recieveData(data){
    for (let i = 0; i < sockets.length; i++) {
        sockets[i].write(data);
    }
}

function onConnect(socket){
    sockets.push(socket);
    socket.write("Hello from telnet server!");
    socket.on("data", function(data) {
        recieveData(data);
    });
}

let server = net.createServer(onConnect).listen(8888);