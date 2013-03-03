"use strict";

var log = require('./log');
var config = require('./config');
var tcp = require('./tcp');
var ws = require('./ws');

log.setLevel(config.logLevel);
log.setColoredOutput(config.coloredOutput);

console.info();
console.info('    TimeShiftGameServer!');
console.info('    Leader: Enel-Pu');
console.info('    Version 1.0');
console.info();

tcp.createServer(config.tcpPort, config.maxFrameSize);
ws.createServer(config.wsPort, config.maxFrameSize);
