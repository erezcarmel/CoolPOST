'use strict';

const childProcess = require('child_process');

exports.handler = (event, context, callback) => {
	const body = JSON.parse(event.body);
	const forked = childProcess.fork(__dirname + '/script.js', [body.text]);

	forked.on('message', msg => {
		callback(null, {
			"statusCode": 200,
			"body": JSON.stringify(msg)
		});
	});
};

