const Alexa = require('ask-sdk-core');

exports.AVGDemoHandler = {
	canHandle(handlerInput) {
		const request = handlerInput.requestEnvelope.request;
		if (request.type === 'Alexa.Presentation.APL.UserEvent') {
			return ((request.source.type === 'TouchWrapper')
			&& (request.source.handler === 'Press')
			&& (request.arguments[0] === 3)); //AVG ranked #3 in list
		}
		return false;
	},
	handle(handlerInput) {
        let responseBuilder = handlerInput.responseBuilder;
        // Check for APL support on the user's device
        if (Alexa.getSupportedInterfaces(handlerInput.requestEnvelope)['Alexa.Presentation.APL']){
            const currentDemoDoc = require('APL/demo_avg.json');
            // Code to send APL directives can go here
            responseBuilder.addDirective({
            type: 'Alexa.Presentation.APL.RenderDocument',
            token: 'APL_AVG_DEMO',
            document: currentDemoDoc,
            datasources: {}
            })
            .speak("This is a Demo using AVG.");
        }
        else {
            responseBuilder.speak("This device does not support APL");
        }
		return responseBuilder.getResponse();
	},
};
