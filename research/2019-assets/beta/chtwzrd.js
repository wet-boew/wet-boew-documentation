/**
 * @title WET-BOEW Chat Wizard plugin container
 * @overview Plugin used to translate a form into a conversational form, hence a Chat Wizard
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @gormfrank
 */
( function( $, window, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-chtwzrd",
	selector = "." + componentName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	datainput = {},
	input = "JSON",
	hasAnswered = true, 
	redirurl = "", 
	first = "", 
	intro = "", 
	redirurlCopy = redirurl,
	firstCopy = first,
	introCopy = intro,
	formType = "dynamic",
	current = "",
	botTime = "", 
	inputsTime = "", 
	replyTime = "",
	sendButton = "",
	i18nDict = {
		en: {
			"chtwzrd-send": "Send<span class='wb-inv'> reply and continue</span>",
			"chtwzrd-switch": "Switch to wizard",
			"chtwzrd-notification": "Close chat notification",
			"chtwzrd-open": "Open chat wizard",
			"chtwzrd-minimize": "Minimize chat wizard",
			"chtwzrd-history": "Conversation history",
			"chtwzrd-reply": "Reply",
			"chtwzrd-controls": "Controls",
			"chtwzrd-switch-basic": "Switch to basic form",
			"chtwzrd-waiting": "Waiting for message",
			"chtwzrd-answer": "You have answered:"
		},
		fr: {
			"chtwzrd-send": "Envoyer<span class='wb-inv'> la réponse et continuer</span>",
			"chtwzrd-switch": "Basculer vers l&apos;assistant",
			"chtwzrd-notification": "Fermer la notification de discussion",
			"chtwzrd-open": "Ouvrir l&apos;assistant de discussion",
			"chtwzrd-minimize": "Réduire l&apos;assistant de discussion",
			"chtwzrd-history": "Historique de discussion",
			"chtwzrd-reply": "Répondre",
			"chtwzrd-controls": "Contrôles",
			"chtwzrd-switch-basic": "Basculer vers le formulaire",
			"chtwzrd-waiting": "En attente d&apos;un message",
			"chtwzrd-answer": "Vous avez répondu&nbsp;:"
		}
	},

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {
		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm;
		if ( elm ) {
			$elm = $( elm );
			
			initiatechtwzrd($elm, 'form');
			
			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	};

	// If chat wizard initiator is found, then initiate
	// input possibilities are: JSON and Form
	var initiatechtwzrd = function($selector, input) {		
		// initiate depending on the input type
		if(input == 'form') {
			datainput = translateToObject($selector);
			$selector.addClass("chtwzrd-basic");
		} else {
			// Stringify the JavaScipt Object Array
			datainput = botapi();
			var datajson = JSON.stringify(datainput);
			datainput = JSON.parse(datajson);
			$selector = $("main");
		}

		// Initiate default values
		firstCopy = first = datainput.header.first;
		introCopy = intro = (datainput.header.introTextWizard ? datainput.header.introTextWizard : "");
		redirurlCopy = redirurl = datainput.header.defaultDestination;
		current = datainput.questions[first];
		if(datainput.header.formType) {
			formType = datainput.header.formType;
		}
		i18nDict = i18nDict[ $("html").attr("lang") || "en" ];	// Setting up language
		sendButton = '<button class="btn btn-primary btn-block chtwzrd-send" type="button">' + i18nDict["chtwzrd-send"] + '</button>';
		
		// Build chat wizard
		buildchtwzrd($selector, datainput.header.titleWizard);

		// All the commonly used elements
		var $basic = $(".chtwzrd-basic"), 
			$bubble = $(".chtwzrd-bubble-wrap"), 
			$container = $(".chtwzrd-container"), 
			$form = $(".chtwzrd-body"),
			$conversation = $(".chtwzrd-history"),
			$minimize = $(".chtwzrd-min"),
			$basiclink = $(".chtwzrd-basic-link"),
			$focusedBeforechtwzrd = "",
			$firstTabStop = $minimize,
			$lastTabStop = $basiclink;

		// Initiate basic form
		initiateBasicForm($basic);
		// Restart fresh on reload
		$("input", $basic).prop("checked", false);
		// Hide basic form on load, show chat bubble instead
		$basic.hide();
		$bubble.fadeIn('slow');

		// Add link to chat from the basic form and add some white space over the footer for the bubble to sit
		if(input != "JSON") {
			$("input[type=submit], button[type=submit]", $basic).addClass("mrgn-bttm-sm").before('<button class="btn btn-sm btn-default chtwzrd-link mrgn-bttm-sm mrgn-rght-sm">' + i18nDict["chtwzrd-switch"] + '</button>');
		}
		$("footer#wb-info").addClass("chtwzrd-mrgn");

		// Ensure that the bubble does not go passed the footer
		if($('footer#wb-info').length) {
			// Correct bubble positionning on load, on resize an on Y scroll if necessary
			$(window).on("load resize scroll", function(e) {
				stickyUntilFooter($bubble);
			});

			// Keep the bubble sticky while scrolling Y until user reaches the footer
			var stickyUntilFooter = function($element) {
				// Equals to bubble default bottom value in CSS
				var bottomY = 30;

				if ($(window).scrollTop() >= $(document).outerHeight() - $(window).outerHeight() - $('footer#wb-info').outerHeight()) {
					$element.css({	
						bottom: ($('footer#wb-info').outerHeight() - ($(document).outerHeight() - $(window).outerHeight() - $(window).scrollTop()) + bottomY)
					});
				} else {
					$element.css({	
						bottom: bottomY
					});
				}
			}
		}

		// Open Chat from the notification message
		$(".chtwzrd-notif", $bubble).on("click", function(event) {
			$(".chtwzrd-link", $bubble).click();
		});

		// Close notification aside bubble
		$(".chtwzrd-notif-close").on("click", function (event) {
			event.preventDefault();
			$(this).parent().hide();
			$bubble.focus();
		});

		// Show basic form and hide chat wizard
		$basiclink.on("click", function(event) {
			event.preventDefault();

			var $legendFocus = $("legend:first", $basic);
			$legendFocus.attr("id", "chtwzrd-1-basic");
			$legendFocus.attr("tabindex", "0");

			$conversation.attr("aria-live", "");
			resumeOnSwitch($basic, "form");

			$container.stop().hide();
			$basic.stop().show(function(){
				$legendFocus.focus();
				$legendFocus.attr("tabindex", "-1");
			});

			$("body").removeClass("chtwzrd-noscroll");
		});

		// Show chat wizard and hide basic form
		$(".chtwzrd-link").on("click", function(event) {
			event.preventDefault();
			
			$basic.stop().hide();
			$focusedBeforechtwzrd = $(':focus');
			
			if(!$(this).hasClass("chtwzrd-bubble")) {
				resumeOnSwitch($container, "chat");
			}
			$(".chtwzrd-bubble", $bubble).removeClass("chtwzrd-trans-pulse");
			$("p", $bubble).hide().removeClass("chtwzrd-trans-left");

			$container.stop().show();
			$bubble.stop().hide();
			$("body").addClass("chtwzrd-noscroll");
			if($conversation.length){
				$(".chtwzrd-conversation").scrollTop($conversation[0].scrollHeight);
			}
			if(hasAnswered) {
				appendInteraction($form);
			}
		});

		// Listen for and trap the keyboard
		$container.on('keydown', function(event) {
			// Check for TAB key press, cycle through
			if(event.keyCode === 9) {
				if(event.shiftKey) {
					if($firstTabStop.is(':focus')) {
						event.preventDefault();
						$lastTabStop.focus();
					}
				} else {
					if($lastTabStop.is(':focus')) {
						event.preventDefault();
						$firstTabStop.focus();
					}
				}
			}
			// ESCAPE, close
			if (event.keyCode === 27) {
				$(".chtwzrd-min").click();
			}
		});

		// On chat button pressed: append answer, and on submit: redirect
		$(document).on("click", ".chtwzrd-send", function(event) {
			if($(this).attr('type') != "submit") {
				event.preventDefault();
				var $choiceselected = $("input:checked", $form);
				if(!$choiceselected.length) {
					$choiceselected = $('input:first', $form);
					$choiceselected.attr('checked', true);
				}
				appendReply($form, buildAnswerObj($choiceselected), false);
			}
		});

		// Minimize chat wizard
		$minimize.on("click", function(event) {
			event.preventDefault();
			$container.stop().hide();
			$bubble.stop().show();
			$("body").removeClass("chtwzrd-noscroll");

			// Set focus back to element that had it before the modal was opened
			$focusedBeforechtwzrd.focus();
		});
	}

	// Iniate basic form
	var initiateBasicForm = function($selector) {
		var $basicForm = $("form", $selector),
			$allQuestions = $("fieldset", $selector),
			$firstQuestion = $allQuestions.first();

		if(formType == "dynamic") {
			$firstQuestion.addClass("chtwzrd-first-q");
			$allQuestions.not(".chtwzrd-first-q").hide();
		}
		$allQuestions.each(function(){
			var qParams = $(this).find("legend").data("chtwzrd-q");
			$(this).attr("id", "chtwzrd-q-" + qParams.qId);
		});

		// On input change in the basic form
		$("input", $basicForm).on("change", function(event) {
			var answerData = buildAnswerObj($(this)),
				$qNext = $("#chtwzrd-q-" + answerData.qNext);

			if(formType == "dynamic") {
				var $fieldset = $(this).closest("fieldset");
				if($qNext.is(":hidden") || $fieldset.next().attr("id") != $qNext.attr("id") || answerData.qNext == "none") {
					$fieldset.nextAll("fieldset").hide().find("input").prop("checked", false);
				}
				if(answerData.qNext != "none") {
					$("#chtwzrd-q-" + answerData.qNext).show();
				}
				if(answerData.url != "") {
					$basicForm.attr("action", answerData.url);
				}
			}
		});
	}

	// Builds the chat wizard skeleton
	var buildchtwzrd = function($selector, title) {
		$selector.after('<div class="chtwzrd-bubble-wrap"><p class="chtwzrd-trans-left"><span class="chtwzrd-notif">' + title + '</span> <a href="#" class="chtwzrd-notif-close" title="' + i18nDict["chtwzrd-notification"] + '" aria-label="' + i18nDict["chtwzrd-notification"] + '" role="button">×</a></p><a href="#chtwzrd-container" aria-controls="chtwzrd-container" class="chtwzrd-link chtwzrd-bubble chtwzrd-trans-pulse" role="button">' + i18nDict["chtwzrd-open"] + '</a></div>');
		$selector.next('.chtwzrd-bubble-wrap').after('<aside class="modal-content overlay-def chtwzrd-container"></aside>');

		var $container = $(".chtwzrd-container");
		$container.append('<header class="modal-header chtwzrd-header"><h2 class="modal-title chtwzrd-title">' + title + '</h2><button type="button" class="chtwzrd-min" title="' + i18nDict["chtwzrd-minimize"] + '"><span class="glyphicon glyphicon-chevron-down"></span></button></header>');
		$container.append('<form class="modal-body chtwzrd-body" method="GET"></form>');

		var $form = $(".chtwzrd-body");
		$form.append('<div class="chtwzrd-conversation"><section class="chtwzrd-history" aria-live="assertive"><h3 class="wb-inv">' + i18nDict["chtwzrd-history"] + '</h3></section><section class="chtwzrd-reply"><h3 class="wb-inv">' + i18nDict["chtwzrd-reply"] + '</h3><div class="chtwzrd-inputs"></div></section><div class="chtwzrd-form-params"></div></div>');
		$form.append('<section class="chtwzrd-controls"><h3 class="wb-inv">' + i18nDict["chtwzrd-controls"] + '</h3><div class="row"><div class="col-xs-12">' + sendButton + '</div></div><div class="row"><div class="col-xs-12 text-center mrgn-tp-sm"><a href="#chtwzrd-basic" class="btn btn-sm btn-link chtwzrd-basic-link" role="button">' + i18nDict["chtwzrd-switch-basic"] + '</a></div></div></section>');

		$(".chtwzrd-conversation").scrollTop($('.chtwzrd-history')[0].scrollHeight);
	}

	// Translate Data attributes from the form and returns a Javascript Object
	var translateToObject = function($selector) {
		var $form = $("form", $selector),
			$intro = $("p", $form).first();
		var datacook = {};

		datacook.header = $form.data('chtwzrd');
		datacook.header.defaultDestination = $form.attr("action");
		datacook.header.titleForm = $form.prev("h2");
		datacook.header.sendForm = ($("input[type=submit]", $form).length ? $("input[type=submit]", $form).val() : $("button[type=submit]", $form).html());

		if($intro.length) {
			datacook.header.introTextForm = $intro.html();
			datacook.header.introTextWizard = (typeof $intro.data('chtwzrd-intro') === "undefined" ? datacook.header.introTextForm : $intro.data('chtwzrd-intro'));
		}
		datacook.questions = {};

		$("fieldset", $selector).each(function() {
			var $question = $(this).find("legend"),
				$choices = $(this).find("label"),
				choices = [],
				qdata = $question.data('chtwzrd-q'),
				qName = "",
				questionID = qdata.qId;

			$choices.each(function(index) {
				var $choice = $(this).find("input"),
					name = $choice.attr("name"),
					textval = $choice.siblings("span:not(.no-chtwzrd)").html();

				if(!index) {
					qName = name;
				}
				var choice = $choice.data('chtwzrd-a');
				choice.content = textval;
				choice.queryParam = $choice.val();
				choices.push(choice);
			});
			datacook.questions[questionID] = qdata;
			datacook.questions[questionID].queryName = qName;
			datacook.questions[questionID].labelForm = $question.html();
			datacook.questions[questionID].choices = choices;
		});
		return datacook;
	}

	// Resume to question X, by switching between the form and the chat wizard
	var resumeOnSwitch = function($selector, toggle) {
		// Redraw Chat and start over
		if(toggle == "chat") {
			var $conversation = $(".chtwzrd-conversation", $selector);

			window.clearTimeout(botTime);
			window.clearTimeout(inputsTime);
			window.clearTimeout(replyTime);
			redirurl = redirurlCopy;
			first = firstCopy;
			intro = introCopy;
			hasAnswered = true;
			current = datainput.questions[first];
			$(".chtwzrd-history, .chtwzrd-form-params", $conversation).html("");
			$(".chtwzrd-send", $selector).replaceWith(sendButton);
			$(".chtwzrd-history", $conversation).attr("aria-live", "assertive");
			if(hasAnswered) {
				appendInteraction($(".chtwzrd-body"));
			}
		} 
		else {
			var $allQuestions = $("fieldset", $selector);
			if(formType == "dynamic") {
				$allQuestions.not(":first").hide();
				$("input", $allQuestions).prop("checked", false);
			}
			//$("input", $allQuestions).prop("checked", false);
		}
	}

	// Adds new question from bot and add inputs accordingly
	var appendInteraction = function($selector) {
		var $dropSpot = $(".chtwzrd-history", $selector),
			$inputsSpot = $(".chtwzrd-inputs", $selector),
			$chtwzrdConvo = $(".chtwzrd-conversation"),
			questionnaire = datainput.header,
			$btnnext = $(".chtwzrd-send", $selector),
			markup = (first != "" || intro != "" ? "p" : "h4");

		hasAnswered = false;
		$btnnext.prop('disabled', true);
		$inputsSpot.html('');
		$dropSpot.append('<div class="row mrgn-bttm-sm"><div class="col-xs-9"><' + markup + ' class="mrgn-tp-0 mrgn-bttm-sm"><span class="chtwzrd-avatar"></span><span class="chtwzrd-question"></span></' + markup + '></div></div>');

		var $lastQuestion = $(".chtwzrd-question:last", $dropSpot);

		// Faking delay and type time
		waitingBot($lastQuestion);

		botTime = setTimeout(function () {
			// Show greetings on first occurence
			if(first != "") {
				$lastQuestion.html(questionnaire.startText);
				first = "";
				appendInteraction($selector);
			} 
			// If intro is provided, show it before the first question
			else if(intro != "") { 
				$lastQuestion.html(intro);
				intro = "";
				appendInteraction($selector);
			}
			// If it is the last question, then change the button to submit the form
			else if(current == "last") {
				$lastQuestion.html(questionnaire.endText);
				$btnnext.attr("type", "submit").prop('disabled', false).html(questionnaire.sendWizard + '&nbsp;<span class="glyphicon glyphicon-chevron-right small"></span>');
				$selector.attr('action', redirurl);
			} 
			// On every other occurences, append the question and its possible answers
			else {
				$lastQuestion.html(current.labelWizard);
				current.input = "radio";
				inputsTime = setTimeout(function () {
					$inputsSpot.append('<fieldset><legend class="wb-inv">' + current.labelWizard + '</legend><div class="row"><div class="col-xs-12"><ul class="list-inline mrgn-tp-sm chtwzrd-choices"></ul></div></div></fieldset>');
					for(var i=0; i<current.choices.length; i++) {
						var iQuestion = current.choices[i];	
						$(".chtwzrd-choices", $inputsSpot).append('<li><label><input type="' + current.input + '" value="' + iQuestion.queryParam + '" name="' + current.queryName + '" data-chtwzrd-a=\'{"next":"' + iQuestion.next + '"' + (typeof iQuestion.url === "undefined" ? '' : ', "url":"' + iQuestion.url + '"') + '}\' /> <span>' + iQuestion.content + '</span></label></li>');
					}
					var tresholdHeight = $chtwzrdConvo[0].scrollHeight;
					if($(".chtwzrd-reply").length && ($(".chtwzrd-reply").outerHeight() + $lastQuestion.outerHeight() > $chtwzrdConvo.innerHeight())) {
						tresholdHeight = $lastQuestion[0].scrollHeight + $chtwzrdConvo.innerHeight();
					}
					$chtwzrdConvo.scrollTop(tresholdHeight);
					$btnnext.prop('disabled', false);
				}, 750);
			}
			$chtwzrdConvo.scrollTop($chtwzrdConvo[0].scrollHeight);
		}, 1500);
	}

	// Waiting for the bot to type animation
	var waitingBot = function($selector) {
		$selector.html('<span class="chtwzrd-loader" aria-label="' + i18nDict["chtwzrd-waiting"] + '"><span class="chtwzrd-loader-dot dot1"></span><span class="chtwzrd-loader-dot dot2"></span><span class="chtwzrd-loader-dot dot3"></span></span>');
	}

	// Add reply from human and calls next question
	var appendReply = function($selector, answerObj) {
		var randID = wb.getId(),
			$dropSpot = $(".chtwzrd-history", $selector);
		$dropSpot.append('<div class="row mrgn-bttm-md"><div class="col-xs-9 col-xs-offset-3"><div class="chtwzrd-message text-right pull-right" id="' + randID + '"><p class="mrgn-bttm-0"><span class="wb-inv">' + i18nDict["chtwzrd-answer"] + ' </span>' + answerObj.value + '</p></div></div></div>');
		$(".chtwzrd-form-params", $selector).append('<input type="hidden" name="' + answerObj.queryName + '" value="' + answerObj.queryParam + '" />');
		hasAnswered = true;
		if(answerObj.url != "") {
			redirurl = answerObj.url; 
		}

		var next = answerObj.qNext,
			$reply = $("#" + randID, $dropSpot);

		$reply.attr("tabindex", "0");
		if(next == "none") {
			current = "last";
		} else {
			current = datainput.questions[next];
		}
		$(".chtwzrd-send", $selector).prop('disabled', true);
		replyTime = setTimeout(function () {
			$(".chtwzrd-inputs", $selector).remove("fieldset");
			$reply.focus();
			$reply.attr("tabindex", "-1");
			appendInteraction($selector);
		}, 500);
	}

	// Builds an object that is suitable for answer, and returns it
	var buildAnswerObj = function($selector) {
		// The way of taking text value for input is weak at this moment, needs improvement
		var answerData = $selector.data("chtwzrd-a");
		return {
			qNext: answerData.next, 
			queryName: $selector.attr("name"), 
			queryParam: $selector.val(), 
			url: (answerData.url ? answerData.url : ""), 
			value: $selector.next().html()
		};
	}

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );