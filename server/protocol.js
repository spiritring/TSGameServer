"use strict";

function messageFrame(content, match) {
    return JSON.stringify({
        type: 'message',
        match: match,
        content: content
    });
}

function errorFrame(content) {
    return JSON.stringify({
        type: 'error',
        content: content
    });
}

function publishFrame(content, destination) {
    return JSON.stringify({
        type: 'publish',
        destination: destination,
        content: content
    });
}

function subscribeFrame(destination) {
    return JSON.stringify({
        type: 'subscribe',
        destination: destination
    });
}

function unsubscribeFrame(destination) {
    return JSON.stringify({
        type: 'unsubscribe',
        destination: destination
    });
}

module.exports = {
    messageFrame: messageFrame,
    errorFrame: errorFrame,
    publishFrame: publishFrame,
    subscribeFrame: subscribeFrame,
    unsubscribeFrame: unsubscribeFrame
};