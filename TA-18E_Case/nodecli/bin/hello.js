#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');
const yargs = require('yargs');

/*
const arguments = yargs
                  .usage("Usage: -n <name>")
                  .option("n", {
                       alias: 'name',
                        describe: 'Your name',
                        type: 'string',
                        demandOption: true
                    }).argv;

if (!arguments.name) arguments.name = "Anoymous";
*/

let greeting = chalk.blue.bold(`HEllooOOO ${arguments.name} I've been expecting you..`);
let options = {
    padding: 2,
    margin: 1,
    backgroundColor: "#22422A",
    borderColor: "#ABBAB2"

}
let msgBox = boxen(greeting, options);

console.log(greeting);
console.log(msgBox);