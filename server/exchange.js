"use strict";

var uuid = require('node-uuid');
var log = require('./log');

var receivers = {};

// push a message with destination and call matched receivers
function push(jobj) {
    for (var key in receivers) {
        var receiver = receivers[key];
        var destinationRegex = receiver['destination'];
        var callback = receiver['callback'];
        callback(jobj);
    }
}

// add a message receiver with specify destination regular expression
// destRegex must be a valid regular expression
// due to the RegExp.match() rule, destRegex should start with '^' and end with '$' in most cases
// callback is a function which must meet 'callback(message, matchResult)' format
// the 'matchResult' is the return value of RegExp.match(), without 'g' option
// return a unique identifier as key
function add(destinationRegex, callback) {
    try {
        var receiver = {};
        // may throw 'Invalid regular expression' exception
        // for example, '[' is not a valid regular expression
        receiver['destination'] = new RegExp(destinationRegex);
        if (!(callback instanceof Function)) {
            throw new Error('Callback is not a function');
        }
        receiver['callback'] = callback;
        var key = uuid();
        receivers[key] = receiver;
        return key
    } catch (e) {
        log.warn(e);
        throw e;
    }
}

// remove a message receiver by it's key
function remove(key) {
    delete receivers[key];
}

module.exports = {
    push: push,
    add: add,
    remove: remove
};

