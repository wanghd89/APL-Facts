exports.TextListDemoHandler = {
	canHandle(handlerInput) {
		const request = handlerInput.requestEnvelope.request;
		if (request.type === 'Alexa.Presentation.APL.UserEvent') {
			console.log(request);
			return ((request.source.type === 'TouchWrapper')
			&& (request.source.handler === 'Press')
			&& (request.arguments[0] === 2));
		}
		return false;
	},
	handle(handlerInput) {
		let responseBuilder = handlerInput.responseBuilder;
		responseBuilder.speak("This is a text list demo already. During development, you can also use speakList command to read individual list element.");
		return responseBuilder.getResponse();
	},
};
