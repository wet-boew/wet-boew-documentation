/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-addcal",
	selector = "." + componentName,
	initEvent = "wb-init." + componentName,
	$document = wb.doc,

	/**
	 * @method init
	 * @param {jQuery Event} event Event that triggered the function call
	 */
	init = function( event ) {

		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector ),
			$elm = $( elm );

		if ( elm ) {
			
			var properties = elm.querySelectorAll( "[property]" ),
				i,
				i_len = properties.length,
				eventData = {},
				place = false,
				googleLink = "",
				icsLink = "",
				i18nDict = {
					en: {
						"addcal-addto": "Add to",
						"addcal-calendar": "calendar",
						"addcal-ical": "iCal format (iPhone, Outlook...)"
					},
					fr: {
						"addcal-addto": "Ajouter au",
						"addcal-calendar": "calendrier",
						"addcal-ical":"Format iCal (iPhone, Outlook....)"
					}
				};
			
			// Initiate dictionary
			i18nDict = i18nDict[ $( "html" ).attr( "lang" ) || "en" ];
			i18nDict = {
				addto: i18nDict[ "addcal-addto" ],
				calendar: i18nDict[ "addcal-calendar" ],
				ical: i18nDict[ "addcal-ical" ]
			};
		
			for ( i=0; i < i_len; i++ ) {
				switch ( properties[ i ].getAttribute( "property" ) ) {
					case "location":
						googleLink += "&location=";
						icsLink += "\nLOCATION:";
						place = true;
						break;
					case "name":
						if ( $( properties[ i ] ).parentsUntil( ( ".wb-addcal" ), "[typeof=Place]" ).length ) {
							eventData.place = properties[ i ].innerText;
							googleLink += eventData.place;
							icsLink += eventData.place;
						} else {
							eventData.title = properties[ i ].innerText;
							googleLink += "&text=" + eventData.title;
							icsLink += "\nSUMMARY:" + eventData.title;
						}
						break;
					case "description":
						eventData.description = properties[ i ].innerText;
						googleLink += "&details=" + eventData.description;
						icsLink += "\nDESCRIPTION:" + eventData.description.replace( /(\r\n|\n|\r)/gm, " " );
						break;
					case "startDate":
						eventData.startDate = properties[ i ].getAttribute( "content" );
						googleLink += "&dates=" + eventData.startDate;
						icsLink += "\nDTSTART:" + eventData.startDate;
						break;
					case "endDate":
						eventData.endDate = properties[ i ].getAttribute( "content" );
						googleLink += "/" + eventData.endDate;
						icsLink += "\nDTEND:" + eventData.endDate;
						break;
					case "streetAddress":
						eventData.streetAddress = properties[ i ].innerText;
						googleLink += " " + eventData.streetAddress;
						icsLink += " " + eventData.streetAddress;
						break;
					case "addressLocality":
						eventData.addressLocality = properties[ i ].innerText;
						googleLink += " " + eventData.addressLocality;
						icsLink += " " + eventData.addressLocality;
						break;
					case "addressRegion":
						eventData.addressRegion = properties[ i ].innerText;
						googleLink += " " + eventData.addressRegion;
						icsLink += " " + eventData.addressRegion;
						break;
					case "postalCode":
						eventData.postalCode = properties[ i ].innerText;
						googleLink += " " + eventData.postalCode;
						icsLink += " " + eventData.postalCode;
						break;
				}
			}
			
			if ( !place ) {
				place = elm.querySelector( selector + "-location" ).innerText;
				googleLink += "&location=" + place;
				icsLink += "\nLOCATION:" + place;
			}
			
			googleLink = encodeURI("https://www.google.com/calendar/render?action=TEMPLATE" + googleLink);
			icsLink = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT" + icsLink + "\nEND:VEVENT\nEND:VCALENDAR";

			//Create add details summary to the wb-addcal event and initiate the unordered list
			$elm.append("<details class='max-content " + componentName + "-buttons'><summary>" + i18nDict.addto + " " + i18nDict.calendar +  "</summary><ul class='list-unstyled mrgn-bttm-0 mrgn-tp-sm'><li><a class='btn btn-link btn-lg mrgn-top-lg' href='" + googleLink + "'><span class='fab fa-google mrgn-rght-md'></span>Google<span class='sr-only'>" + i18nDict.calendar +"</span></a></li><li><button class='btn btn-link btn-lg' data-" + componentName + "-ics='" + icsLink + "'><span class='fa fa-calendar mrgn-rght-md'></span>" + i18nDict.ical + "<span class='sr-only'>Calendar</span></button></li>");
				
			//Set click action on Apple and Other button links
			var linkItem = elm.querySelectorAll( selector + "-buttons button" );
			i_len = linkItem.length;
			
			for ( i=0; i < i_len; i++ ) {
				linkItem[ i ].onclick = function() {
					wb.download( new Blob( [ this.getAttribute( "data-" + componentName +"-ics" ) ] , { type: "text/calendar;charset=utf-8" } ), "evenement-gc-event.ics" );
				}
			}
		}
		
	};
	
// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );

// Add the timer poke to initialize the plugin
wb.add( selector );

} )( jQuery, wb );