const Alexa = require('ask-sdk-core');

exports.ImageListDemoHandler = {
	canHandle(handlerInput) {
		const request = handlerInput.requestEnvelope.request;
		if (request.type === 'Alexa.Presentation.APL.UserEvent') {
			console.log(request);
			return ((request.source.type === 'TouchWrapper')
			&& (request.source.handler === 'Press')
			&& (request.arguments[0] === 1));
		}
		return false;
	},
	handle(handlerInput) {
        let responseBuilder = handlerInput.responseBuilder;
        // Check for APL support on the user's device
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            const aplDemoImageList = require('APL/demo_list_image.json');
            // Code to send APL directives can go here
            responseBuilder.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'APL_IMAGE_LIST_DEMO',
            document: aplDemoImageList,
            datasources: {}
            })
            .speak("This is a Menu Demo using Alexa Image List.");
        }
        else {
            responseBuilder.speak("This device does not support APL");
        }
		return responseBuilder.getResponse();
	},
};
