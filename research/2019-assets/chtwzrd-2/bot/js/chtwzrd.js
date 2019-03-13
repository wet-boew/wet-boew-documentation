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
	$sendBtn,
	datainput = {},
	timeValues = {},
	waitingForAnswer, 
	formType,
	redirurl, 
	first, 
	intro, 
	current,
	waitTimeout, 
	inputsTimeout, 
	redirurlCopy,
	firstCopy,
	introCopy,
	i18nDict = {
		en: {
			"chtwzrd-send": "Send<span class='wb-inv'> reply and continue</span>",
			"chtwzrd-toggle": "Switch to wizard",
			"chtwzrd-notification": "Close chat notification",
			"chtwzrd-open": "Open chat wizard",
			"chtwzrd-minimize": "Minimize chat wizard",
			"chtwzrd-history": "Conversation history",
			"chtwzrd-reply": "Reply",
			"chtwzrd-controls": "Controls",
			"chtwzrd-toggle-basic": "Switch to basic form",
			"chtwzrd-waiting": "Waiting for message",
			"chtwzrd-answer": "You have answered:"
		},
		fr: {
			"chtwzrd-send": "Envoyer<span class='wb-inv'> la réponse et continuer</span>",
			"chtwzrd-toggle": "Basculer vers l&apos;assistant",
			"chtwzrd-notification": "Fermer la notification de discussion",
			"chtwzrd-open": "Ouvrir l&apos;assistant de discussion",
			"chtwzrd-minimize": "Réduire l&apos;assistant de discussion",
			"chtwzrd-history": "Historique de discussion",
			"chtwzrd-reply": "Répondre",
			"chtwzrd-controls": "Contrôles",
			"chtwzrd-toggle-basic": "Basculer vers le formulaire",
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

			fireChtwzrd( $elm );

			// Identify that initialization has completed
			wb.ready( $elm, componentName );
		}
	},

	/**
	 * Prepare initiation depending on the input type, wether it's JSON or a form
	 * @method fireChtwzrd
	 * @param {jQuery DOM element} $selector Element to which the wizard will be appended
	 */
	fireChtwzrd = function( $selector ) {
		// Grab JSON File, parse and create
		if(typeof $selector.data( componentName + "-src" ) !== undefined && $selector.data( componentName + '-src' )) {
			var data = $selector.data( componentName + "-src" );
			$.getJSON( data, function( json ) {
				datainput = json;
				buildBasicForm( $selector, datainput );
				initiateChtwzrd( $selector );
			} );
		// Start from a form on the page
		} else {
			datainput = translateToObject( $selector );
			initiateChtwzrd( $selector );
		}
	},

	/**
	 * Initiate chat wizard experience
	 * @method initiateChtwzrd
	 * @param {jQuery DOM element} $selector Element to which the wizard will be appended
	 */
	initiateChtwzrd = function( $selector ) {
		// Prevent on load flick and identify basic form
		$selector.removeClass( "hidden wb-inv" ).addClass( componentName + "-basic" );

		// Initiate default values
		timeValues = {
			shortDelay: 500,
			mediumDelay: 750, 
			longDelay: 1500
		};
		waitingForAnswer = false;
		firstCopy = first = datainput.header.first;
		introCopy = intro = ( datainput.header.introTextWizard ? datainput.header.introTextWizard : "" );
		redirurlCopy = redirurl = datainput.header.defaultDestination;
		current = datainput.questions[ first ];
		formType = datainput.header.formType ? datainput.header.formType : "dynamic";

		// Initiate dictionary
		i18nDict = i18nDict[ $( "html" ).attr( "lang" ) || "en" ];
		i18nDict = {
			send: i18nDict[ "chtwzrd-send" ],
			toggle: i18nDict[ "chtwzrd-toggle" ],
			notification: i18nDict[ "chtwzrd-notification" ],
			trigger: i18nDict[ "chtwzrd-open" ],
			minimize: i18nDict[ "chtwzrd-minimize" ],
			conversation: i18nDict[ "chtwzrd-history" ],
			reply: i18nDict[ "chtwzrd-reply" ],
			controls: i18nDict[ "chtwzrd-controls" ],
			toggleBasic: i18nDict[ "chtwzrd-toggle-basic" ],
			waiting: i18nDict[ "chtwzrd-waiting" ],
			answer: i18nDict[ "chtwzrd-answer" ]
		};

		// Build chat wizard
		buildChtwzrd( $selector, datainput.header.titleWizard );

		// All the commonly used elements
		var $basic = $( selector + "-basic" ), 
			$bubble = $( selector + "-bubble-wrap" ), 
			$container = $( selector + "-container" ), 
			$form = $( ".body", $container ),
			$conversation = $( ".history", $container ),
			$minimize = $( ".minimize", $container ),
			$basiclink = $( ".basic-link", $container ),
			$focusedBeforechtwzrd,
			$firstTabStop = $minimize,
			$lastTabStop = $basiclink;

		// Initiate basic form
		initiateBasicForm( $basic );

		// Initiate chat wizard bubble
		initiateBubble( $bubble );

		// Show basic form and hide chat wizard
		$basiclink.on( "click", function( event ) {
			event.preventDefault();

			var $legendFocus = $( "legend:first", $basic );
			$legendFocus.attr( "tabindex", "0" );

			$conversation.attr( "aria-live", "" );
			toggleExperience( $basic, "form" );

			$container.stop().hide();
			$basic.stop().show(function(){
				$legendFocus.focus();
				$legendFocus.attr( "tabindex", "-1" );
			});

			$( "body" ).removeClass( componentName + "-noscroll" );
		} );

		// Show chat wizard and hide basic form
		$( selector + "-link" ).on( "click", function( event ) {
			event.preventDefault();

			$basic.stop().hide();
			$focusedBeforechtwzrd = $( ":focus" );

			if( !$( this ).hasClass( componentName + "-bubble" ) ) {
				toggleExperience( $container, "wizard" );
			}
			$( ".bubble", $bubble ).removeClass( "trans-pulse" );
			$( "p", $bubble ).hide().removeClass( "trans-left" );

			$container.stop().show();
			$bubble.stop().hide();
			$( "body" ).addClass( componentName + "-noscroll" );
			if( $conversation.length ) {
				$( ".conversation", $container ).scrollTop( $conversation[ 0 ].scrollHeight );
			}
			if( !waitingForAnswer ) {
				appendInteraction( $form );
			}
		});

		// Listen for and trap the keyboard
		$container.on( 'keydown', function( event ) {
			// Check for TAB key press, cycle through
			if( event.keyCode === 9 ) {
				if( event.shiftKey ) {
					if( $firstTabStop.is( ':focus' ) ) {
						event.preventDefault();
						$lastTabStop.focus();
					}
				} else {
					if( $lastTabStop.is( ':focus' ) ) {
						event.preventDefault();
						$firstTabStop.focus();
					}
				}
			}
			// ESCAPE, close
			if ( event.keyCode === 27 ) {
				$minimize.click();
			}
		} );

		// On chat button pressed: append answer, and on submit: redirect
		$document.on( "click", selector + "-container .btn-send", function( event ) {
			if( $( this ).attr( "type" ) != "submit" ) {
				event.preventDefault();
				var $choiceselected = $( "input:checked", $form );
				if( !$choiceselected.length ) {
					$choiceselected = $( "input:first", $form );
					$choiceselected.attr( "checked", true );
				}
				appendReply( $form, cookAnswerObj( $choiceselected ), false );
			}
		} );

		// Minimize chat wizard
		$minimize.on( "click", function( event ) {
			event.preventDefault();
			$container.stop().hide();
			$bubble.stop().show();
			$( "body" ).removeClass( componentName + "-noscroll" );

			// Set focus back to element that had it before the modal was opened
			$focusedBeforechtwzrd.focus();
		} );
	},

	// Iniate basic form
	/**
	 * Initiate basic form
	 * @method initiateBasicForm
	 * @param {jQuery DOM element} $selector Element to which the basic form will be appended
	 */
	initiateBasicForm = function( $selector ) {
		var $basicForm = $( "form", $selector ),
			$allQuestions = $( "fieldset", $selector ),
			$firstQuestion = $allQuestions.first();

		if( formType == "dynamic" ) {
			$firstQuestion.addClass( componentName + "-first-q" );
			$allQuestions.not( selector + "-first-q" ).hide();
		}
		$allQuestions.each( function(){
			var qParams = $( this ).find( "legend" ).data( componentName + "-q" );
			$( this ).attr( "id", componentName + "-q-" + qParams.qId );
		});
		// Hide and restart fresh on reload
		$selector.hide();
		$( "input", $basicForm ).prop( "checked", false );

		// Add link to chat from the basic form
		$( "input[type=submit], button[type=submit]", $basicForm ).addClass( "mrgn-bttm-sm" ).before( '<button class="btn btn-sm btn-default ' + componentName + '-link mrgn-bttm-sm mrgn-rght-sm">' + i18nDict.toggle + '</button>' );

		// On input change in the basic form
		$( "input", $basicForm ).on( "change", function() {
			var answerData = cookAnswerObj( $( this ) ),
				$qNext = $( "#" + componentName + "-q-" + answerData.qNext );

			// Dynamically append next question on checked
			if( formType == "dynamic" ) {
				var $fieldset = $( this ).closest( "fieldset" );
				if( $qNext.is( ":hidden" ) || $fieldset.next().attr( "id" ) != $qNext.attr( "id" ) || answerData.qNext == "none" ) {
					$fieldset.nextAll( "fieldset" ).hide().find( "input" ).prop( "checked", false );
				}
				if( answerData.qNext != "none" ) {
					$( "#" + componentName + "-q-" + answerData.qNext ).show();
				}
				if( answerData.url != "" ) {
					$basicForm.attr( "action", answerData.url );
				}
			}
		} );
	},

	/**
	 * Initiate chat wizard bubble
	 * @method initiateBubble
	 * @param {jQuery DOM element} $selector Element which is the actual bubble
	 */
	initiateBubble = function( $selector ) {
		// Hide basic form on load, show chat bubble instead
		$selector.fadeIn( "slow" );

		// Add some white space over the footer for the bubble to sit
		$( "footer#wb-info" ).addClass( componentName + "-mrgn" );

		// Ensure that the bubble does not go passed the footer
		if( $( 'footer#wb-info' ).length ) {

			// Correct bubble positionning on load, on resize an on Y scroll if necessary
			$( window ).on( "load resize scroll", function() {
				stickyUntilFooter( $selector );
			} );

			// Keep the bubble sticky while scrolling Y until user reaches the footer
			var stickyUntilFooter = function( $element ) {

				// Equals to bubble default bottom value in CSS
				var bottomY = 30;

				if ( $( window ).scrollTop() >= $( document ).outerHeight() - $( window ).outerHeight() - $( "footer#wb-info" ).outerHeight() ) {
					$element.css( {	
						bottom: ( $( "footer#wb-info" ).outerHeight() - ( $( document ).outerHeight() - $( window ).outerHeight() - $( window ).scrollTop() ) + bottomY )
					} );
				} else {
					$element.css( {	
						bottom: bottomY
					} );
				}
			}
		}

		// Open Chat from the notification message
		$( ".notif", $selector ).on( "click", function() {
			$( selector + "-link", $selector ).click();
		} );

		// Close notification aside bubble
		$( ".notif-close", $selector ).on( "click", function (event) {
			event.preventDefault();
			$( this ).parent().hide();
			$selector.focus();
		} );
	},

	/**
	 * Translate Data attributes from the form and returns a Javascript Object
	 * @method translateToObject
	 * @param {jQuery DOM element} $selector Basic from which the wizard will be created
	 * @returns {Object} Data used by the wizard for the experience
	 */
	translateToObject = function( $selector ) {
		var $form = $( "form", $selector ),
			$intro = $( "p", $form ).first();
		var datacook = {};

		datacook.header = $form.data( componentName );
		datacook.header.defaultDestination = $form.attr( "action" );
		datacook.header.titleForm = $form.prev( "h2" );
		datacook.header.sendForm = ( $( "input[type=submit]", $form ).length ? $( "input[type=submit]", $form ).val() : $( "button[type=submit]", $form ).html() );

		if( $intro.length ) {
			datacook.header.introTextForm = $intro.html();
			datacook.header.introTextWizard = ( typeof $intro.data( componentName + '-intro' ) === "undefined" ?datacook.header.introTextForm : $intro.data( componentName + '-intro' ) );
		}
		datacook.questions = {};

		$( "fieldset", $selector ).each( function() {
			var $question = $( this ).find( "legend" ),
				$choices = $( this ).find( "label" ),
				choices = [],
				qdata = $question.data( componentName + "-q" ),
				qName = "",
				questionID = qdata.qId;

			$choices.each( function( index ) {
				var $choice = $( this ).find( "input" ),
					name = $choice.attr( "name" ),
					textval = $choice.siblings( "span:not(.no-wb-chtwzrd)" ).html();

				if( !index ) {
					qName = name;
				}
				var choice = $choice.data( componentName + "-a" );
				choice.content = textval;
				choice.queryParam = $choice.val();
				choices.push( choice );
			} );
			datacook.questions[ questionID ] = qdata;
			datacook.questions[ questionID ].queryName = qName;
			datacook.questions[ questionID ].labelForm = $question.html();
			datacook.questions[ questionID ].choices = choices;
		} );
		return datacook;
	},

	/**
	 * Build the chat wizard skeleton
	 * @method buildChtwzrd
	 * @param {jQuery DOM element} $selector Element to which the wizard will be appended
	 * @param {String} title The title of the wizard window, as well as the notification
	 */
	buildChtwzrd = function( $selector, title ) {
		$selector.after( '<div class="' + componentName + '-bubble-wrap"><p class="trans-left"><span class="notif">' + title + '</span> <a href="#" class="notif-close" title="' + i18nDict.notification + '" aria-label="' + i18nDict.notification + '" role="button">×</a></p><a href="#' + componentName + '-container" aria-controls="' + componentName + '-container" class="' + componentName + '-link bubble trans-pulse" role="button">' + i18nDict.trigger + '</a></div>' );
		$selector.next( selector + '-bubble-wrap' ).after( '<aside id="' + componentName + '-container" class="modal-content overlay-def ' + componentName + '-container"></aside>' );

		var $container = $( selector + "-container" );
		$container.append( '<header class="modal-header header"><h2 class="modal-title title">' + title + '</h2><button type="button" class="minimize" title="' + i18nDict.minimize + '"><span class="glyphicon glyphicon-chevron-down"></span></button></header>' );
		$container.append( '<form class="modal-body body" method="GET"></form>' );

		var $form = $( ".body", $container );
		$form.append( '<div class="conversation"><section class="history" aria-live="assertive"><h3 class="wb-inv">' + i18nDict.conversation + '</h3></section><section class="reply"><h3 class="wb-inv">' + i18nDict.reply + '</h3><div class="inputs-zone"></div></section><div class="form-params"></div></div>' );
		$form.append( '<section class="controls"><h3 class="wb-inv">' + i18nDict.controls + '</h3><div class="row"><div class="col-xs-12"><button class="btn btn-primary btn-block btn-send" type="button">' + i18nDict.send + '</button></div></div><div class="row"><div class="col-xs-12 text-center mrgn-tp-sm"><a href="#' + componentName + '-basic" class="btn btn-sm btn-link basic-link" role="button">' + i18nDict.toggleBasic + '</a></div></div></section>' );
		$sendBtn = $( ".btn-send ", $form ).clone();
	},

	/**
	 * Build Basic Form from JSON
	 * @method buildBasicForm
	 * @param {jQuery DOM element} $selector Element to which the form will be appended
	 * @param {Object} data Data used by the form to build itself
	 */
	buildBasicForm = function( $selector, data ) {
		$selector.html( "" );
		$selector.append( '<h2>' + data.header.titleForm + '</h2><form class="mrgn-bttm-xl" action="' + data.header.defaultDestination + '"></form>' );
		var $basicForm = $( "form", $selector );

		$basicForm.attr( "data-" + componentName, '{"sendWizard":"' + data.header.sendWizard + '", "first":"' + data.header.first + '", "titleWizard":"' + data.header.titleWizard + '", "startText":"' + data.header.startText + '", "endText":"' + data.header.endText + '"}' );

		if( typeof data.header.introTextForm !== undefined ) {
			$basicForm.append( '<p>' + data.header.introTextForm + '</p>' );
			if( typeof data.header.introTextForm !== undefined ) {
				$( "p", $basicForm ).attr( "data-" + componentName + "-intro", data.header.introTextWizard );
			}
		}
		$.each( data.questions, function( key, value ) {
			var randID = wb.getId();
			$basicForm.append( '<fieldset class="' + randID + '"><legend>' + value.labelForm + '</legend><ul class="list-unstyled mrgn-tp-md"></ul></fieldset>' );
			var $thisQ = $( "." + randID, $basicForm );
			$( "legend", $thisQ ).attr( "data-" + componentName + "-q", '{"labelWizard":"' + value.labelWizard + '", "qId":"' + key + '"}' );

			$.each( value.choices, function( index, ivalue ) {
				randID = wb.getId();
				$( "ul", $thisQ ).append( '<li><label><input type="' + value.input + '" value="' + ivalue.queryParam + '" id ="' + randID + '" name="' + value.queryName + '" /> <span>' + ivalue.content + '</span>' );
				$( "#" + randID, $thisQ ).attr( "data-" + componentName + "-a", '{"next":"' + ivalue.next + '"' + ( typeof ivalue.url !== undefined && ivalue.url ? ', "url":"' + ivalue.url + '"' : '' ) + '}' );
			} );
		} );
		$basicForm.append( '<br/><button type="submit" class="btn btn-sm btn-primary">' + data.header.sendForm + '</button>' );
	},

	/**
	 * Toggle between form and wizard
	 * @method toggleExperience
	 * @param {jQuery DOM element} $selector Element to which the experience will be active
	 * @param {String} toggle Give context to the toggle, wether it is form or wizard
	 */
	toggleExperience = function( $selector, toggle ) {
		// Redraw chat wizard and start over
		if( toggle == "wizard" ) {
			var $conversation = $( ".conversation", $selector );

			// Clear time outs in case they're still active
			window.clearTimeout( waitTimeout );
			window.clearTimeout( inputsTimeout );

			// Reset to default values
			waitingForAnswer = false;
			redirurl = redirurlCopy;
			first = firstCopy;
			intro = introCopy;
			current = datainput.questions[ first ];

			$( ".history, .form-params", $conversation ).html( "" );
			$( ".btn-send", $selector ).replaceWith( $sendBtn );
			$( ".history", $conversation ).attr( "aria-live", "assertive" );

			appendInteraction( $( ".body", $selector ) );
		} 
		// Redraw form if it's set to dynamic
		else {
			var $allQuestions = $( "fieldset", $selector );
			if( formType == "dynamic" ) {
				$allQuestions.not( ":first" ).hide();
				$( "input", $allQuestions ).prop( "checked", false );
			}
		}
	},

	/**
	 * Add new question from bot and add inputs accordingly
	 * @method appendInteraction
	 * @param {jQuery DOM element} $selector Element to which the question and choices will be appended
	 */
	appendInteraction = function( $selector ) {
		var $dropSpot = $( ".history", $selector ),
			$inputsSpot = $( ".inputs-zone", $selector ),
			$chtwzrdConvo = $( ".conversation", $selector ),
			questionnaire = datainput.header,
			$btnnext = $( ".btn-send", $selector ),
			markup = ( first != "" || intro != "" ? "p" : "h4" );

		waitingForAnswer = true;
		$btnnext.prop( "disabled", true );
		$inputsSpot.html( "" );
		$dropSpot.append( '<div class="row mrgn-bttm-sm"><div class="col-xs-9"><' + markup + ' class="mrgn-tp-0 mrgn-bttm-sm"><span class="avatar"></span><span class="question"></span></' + markup + '></div></div>' );

		var $lastQuestion = $( ".question:last", $dropSpot );

		// Faking delay and type time
		waitingBot( $lastQuestion );

		waitTimeout = setTimeout( function () {
			// Show greetings on first occurence
			if( first != "" ) {
				$lastQuestion.html( questionnaire.startText );
				first = "";
				appendInteraction( $selector );
			} 
			// If intro is provided, show it before the first question
			else if( intro != "" ) { 
				$lastQuestion.html( intro );
				intro = "";
				appendInteraction( $selector );
			}
			// If it is the last question, then change the button to submit the form
			else if( current == "last" ) {
				$lastQuestion.html( questionnaire.endText );
				$btnnext.attr( "type", "submit" ).prop( "disabled", false ).html( questionnaire.sendWizard + '&nbsp;<span class="glyphicon glyphicon-chevron-right small"></span>' );
				$selector.attr( "action", redirurl );
			} 
			// On every other occurences, append the question and its possible answers
			else {
				$lastQuestion.html( current.labelWizard );
				current.input = "radio";
				inputsTimeout = setTimeout( function () {
					$inputsSpot.append( '<fieldset><legend class="wb-inv">' + current.labelWizard + '</legend><div class="row"><div class="col-xs-12"><ul class="list-inline mrgn-tp-sm choices"></ul></div></div></fieldset>' );
					for( var i = 0; i < current.choices.length; i++ ) {
						var iQuestion = current.choices[ i ];	
						$( ".choices", $inputsSpot ).append( '<li><label><input type="' + current.input + '" value="' + iQuestion.queryParam + '" name="' + current.queryName + '" data-' + componentName + '-a=\'{"next":"' + iQuestion.next + '"' + ( typeof iQuestion.url === "undefined" ? '' : ', "url":"' + iQuestion.url + '"' ) + '}\' ' + ( !i ? 'checked ' : '' ) + '/> <span>' + iQuestion.content + '</span></label></li>' );
					}
					$btnnext.prop( "disabled", false );

					// Reposition viewport to where the action is
					var tresholdHeight = $chtwzrdConvo[ 0 ].scrollHeight,
						$reply = $( ".reply", $selector );
					
					if( $reply.length && ( $reply.outerHeight() + $lastQuestion.outerHeight() > $chtwzrdConvo.innerHeight() ) ) {
						tresholdHeight = $dropSpot[ 0 ].scrollHeight - $lastQuestion.outerHeight() - 42;	// Minus "answer to life" for safety
					}
					$chtwzrdConvo.scrollTop( tresholdHeight );
				}, timeValues.mediumDelay );
			}
			$chtwzrdConvo.scrollTop( $chtwzrdConvo[ 0 ].scrollHeight );
		}, timeValues.longDelay );
	},

	/**
	 * Add reply from human and calls next question
	 * @method appendReply
	 * @param {jQuery DOM element} $selector Element to which the answer will be appended
	 * @param {Object} answerObj The answer selected and cooked
	 */
	appendReply = function( $selector, answerObj ) {
		var randID = wb.getId(),
			$dropSpot = $( ".history", $selector );
		$dropSpot.append( '<div class="row mrgn-bttm-md"><div class="col-xs-9 col-xs-offset-3"><div class="message text-right pull-right" id="' + randID + '"><p class="mrgn-bttm-0"><span class="wb-inv">' + i18nDict.answer + ' </span>' + answerObj.value + '</p></div></div></div>' );
		$( ".form-params", $selector ).append( '<input type="hidden" name="' + answerObj.queryName + '" value="' + answerObj.queryParam + '" />' );
		waitingForAnswer = false;
		if( answerObj.url != "" ) {
			redirurl = answerObj.url; 
		}
		// Find next question
		var next = answerObj.qNext,
			$reply = $( "#" + randID, $dropSpot );

		if( next == "none" ) {
			current = "last";
		} else {
			current = datainput.questions[ next ];
		}
		$( ".btn-send", $selector ).prop( "disabled", true );
		$reply.attr( "tabindex", "0" );

		// Clear the inputs zone after an intuitive delay
		waitTimeout = setTimeout( function () {
			$( ".inputs-zone", $selector ).remove( "fieldset" );
			$reply.focus();
			$reply.attr( "tabindex", "-1" );
			appendInteraction( $selector );
		}, timeValues.shortDelay );
	},

	/**
	 * Waiting for the bot to type animation
	 * @method waitingBot
	 * @param {jQuery DOM element} $selector Element to which the typing loader will be appended
	 */
	waitingBot = function( $selector ) {
		$selector.html( '<span class="loader-typing" aria-label="' + i18nDict.waiting + '"><span class="loader-dot dot1"></span><span class="loader-dot dot2"></span><span class="loader-dot dot3"></span></span>' );
	},
	
	/**
	 * Cooks an answer object that is suitable for all parties
	 * @method cookAnswerObj
	 * @param {jQuery DOM element} $selector Element to which the typing loader will be appended
	 * @returns {Object} A cooked answer
	 */
	cookAnswerObj = function( $selector ) {
		var answerData = $selector.data( componentName + "-a" );
		return {
			qNext: answerData.next, 
			queryName: $selector.attr( "name" ), 
			queryParam: $selector.val(), 
			url: ( answerData.url ? answerData.url : "" ), 
			value: $selector.next().html()
		};
	};

// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, window, wb );