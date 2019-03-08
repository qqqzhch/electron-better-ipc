'use strict';
var sum=require('hash-sum')
module.exports.getResponseChannels = (channel,data) => ({
	sendChannel: `%better-ipc-send-channel-${channel}-${sum(data)}`,
	dataChannel: `%better-ipc-response-data-channel-${channel}-${sum(data)}`,
	errorChannel: `%better-ipc-response-error-channel-${channel}-${sum(data)}`
});

module.exports.getRendererResponseChannels = (windowId, channel,data) => ({
	sendChannel: `%better-ipc-send-channel-${windowId}-${channel}-${sum(data)}`,
	dataChannel: `%better-ipc-response-data-channel-${windowId}-${channel}-${sum(data)}`,
	errorChannel: `%better-ipc-response-error-channel-${windowId}-${channel}-${sum(data)}`
});
