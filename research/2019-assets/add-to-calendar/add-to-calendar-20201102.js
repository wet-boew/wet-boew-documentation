/**
 * @title WET-BOEW Add to calendar
 * @overview Create an add to calendar button for an event
 * @license wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * @author @ricokola
 */
( function( $, wb ) {
"use strict";

/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
var componentName = "wb-addcal",
	selector = ".provisional." + componentName,
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
			
			wb.ready( $( elm ), componentName );
			
			var properties = elm.querySelectorAll( "[property]" ),
				dtStamp = document.querySelectorAll( "time[property]" ),
				test2 = window.location,
				uid = window.location.href.replace(/\.|-|\/|:/g, ""),
				i,
				i_len,
				eventData = {},
				place, // false
				prop_cache,
				prop_val_cache,
				googleLink = "https://www.google.com/calendar/render?action=TEMPLATE",
				icsLink = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//WET-BOEW//Add to Calendar v4.0//\nBEGIN:VEVENT",
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
			
			i_len = dtStamp.length;
			for(i=0; i < i_len; i++){
				dtStamp = dtStamp[i];
				switch( dtStamp.getAttribute("property") ){
					case "dateModified":
					dtStamp = dtStamp.innerText.replace(/-/g, "") + "T000000";
					uid += "-" + dtStamp;
					icsLink += "\nDTSTAMP:" + dtStamp;
					break;
				}
			}
			
			i_len = properties.length;
			for ( i=0; i < i_len; i++ ) {
				prop_cache = properties[ i ];
				switch ( prop_cache.getAttribute( "property" ) ) {
					case "location":
						googleLink += "&location=";
						icsLink += "\nLOCATION:";
						place = true;
						break;
					case "name":
						if ( $( prop_cache ).parentsUntil( ( ".wb-addcal" ), "[typeof=Place]" ).length ) {
							prop_val_cache = prop_cache.innerText;
							googleLink += prop_val_cache;
							icsLink += prop_val_cache;
						} else {
							prop_val_cache = prop_cache.innerText;
							googleLink += "&text=" + prop_val_cache;
							icsLink += "\nSUMMARY:" + prop_val_cache;
						}
						break;
					case "description":
						prop_val_cache = prop_cache.innerText;
						googleLink += "&details=" + prop_val_cache;
						icsLink += "\nDESCRIPTION:" + prop_val_cache.replace( /(\r\n|\n|\r)/gm, " " );
						break;
					case "startDate":
						prop_val_cache = prop_cache.getAttribute( "content" ).replace(/(-|:)/g, "");
						googleLink += "&dates=" + prop_val_cache;
						icsLink += "\nUID:" + uid + "-" + prop_val_cache + "\nDTSTART:" + prop_val_cache;
						break;
					case "endDate":
						prop_val_cache = prop_cache.getAttribute( "content" );
						googleLink += "/" + prop_val_cache.replace(/(-|:)/g, "");
						icsLink += "\nDTEND:" + prop_val_cache.replace(/(-|:)/g, "");
						break;
					case "streetAddress":
						prop_val_cache = prop_cache.innerText;
						googleLink += " " + prop_val_cache;
						icsLink += " " + prop_val_cache;
						break;
					case "addressLocality":
						prop_val_cache = prop_cache.innerText;
						googleLink += " " + prop_val_cache;
						icsLink += " " + prop_val_cache;
						break;
					case "addressRegion":
						prop_val_cache = prop_cache.innerText;
						googleLink += " " + prop_val_cache;
						icsLink += " " + prop_val_cache;
						break;
					case "postalCode":
						prop_val_cache = prop_cache.innerText;
						googleLink += " " + prop_val_cache;
						icsLink += " " + prop_val_cache;
						break;
				}
			}
			
			if ( !place ) {
				place = elm.querySelector( "." + componentName + "-location" ).innerText;
				googleLink += "&location=" + place;
				icsLink += "\nLOCATION:" + place;
			}
			
			alert(test2);
			
			googleLink = encodeURI(googleLink);
			icsLink = icsLink + "\nEND:VEVENT\nEND:VCALENDAR";

			//Create add details summary to the wb-addcal event and initiate the unordered list
			$elm.append("<details class='max-content " + componentName + "-buttons'><summary>" + i18nDict.addto + " " + i18nDict.calendar +  "</summary><ul class='list-unstyled mrgn-bttm-0 mrgn-tp-sm'><li><a class='btn btn-link btn-lg mrgn-top-lg' href='" + googleLink + "'><span class='fab fa-google mrgn-rght-md'></span>Google<span class='sr-only'>" + i18nDict.calendar +"</span></a></li><li><button class='btn btn-link btn-lg' data-" + componentName + "-ics='" + icsLink + "'><span class='fa fa-calendar mrgn-rght-md'></span>" + i18nDict.ical + "<span class='sr-only'>Calendar</span></button></li>");
				
			//Set click action on Apple and Other button links
			var linkItem = elm.querySelectorAll( "." + componentName + "-buttons button" );
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