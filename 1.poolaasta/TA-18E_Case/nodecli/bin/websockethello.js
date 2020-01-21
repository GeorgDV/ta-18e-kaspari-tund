#!/usr/bin/env node
const WebSocket = require("ws");

const wss = new WebSocket.Server({port: 3333});
let conns = [];
let i = 0;

wss.on("connection", ws => {
    ws.id = i++;
    conns.push(ws);
    ws.on("message", message => {
        conns.forEach((client) => {
            if (client.id != ws.id) {
                client.send(message);
            }
        });
    });
    ws.send("welcome to ws server");
});

//IN BROWSE TERMINAL "let ws = new WebSocket("ws://localhost:3333");"
//ws.send("anything");