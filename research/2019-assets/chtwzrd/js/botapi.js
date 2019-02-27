// Data structure to follow for a working chat wizard
var chtwzrdData = {
	header: {
		formType: "dynamic | static",
		defaultDestination: "xyz.html",
		sendWizard: "Value of the button at the end of the conversation in the chat",
		sendForm: "Search",
		titleWizard: "Title of the chat, showing in the chat window banner, as well as in the notification popup",
		titleForm: "Help us help you",
		startText: "Greeting message from the chat",
		endText: "Thank you. I have built a page with results you may find resourceful.",
		introTextWizard: "A second greeting message from the bot before the questions, in order to provide extra information or instructions",
		introTextForm: "Last goodbye from the bot after all of the questions have been answered",
		first: "q1 -> question ID"
	}, 
	questions: {
		q1: 
		{
			queryName: "GET Parameter name for the question",
			labelForm: "Question shown in the basic form",
			labelWizard: "Question shown in the chat",
			input: "radio",
			choices: [
				{ 
					content: "String",
					queryParam: "GET Parameter value for the current Parameter name",
					next: "q2 -> next question ID"
				},
				//... Other choices
			]
		}, 
		//... Other questions
	}
};