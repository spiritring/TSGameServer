"use strict";

var log = require('./log');

module.exports = {
    // tcp listening port
    tcpPort: 8153,
    // udp listening port
    udpPort: 8154,
    // websocket listening port
    wsPort: 8155,
    // max size of message frame, in chars(not bytes)
    maxFrameSize: 10000,
    // log level
    logLevel: log.LEVEL.ALL,
    // colored output
    coloredOutput: true
};