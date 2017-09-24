const text = process.argv[2];

if (text) {
	const result = `I received the text: ${text}`;

	process.send({
		"result": result
	});
}