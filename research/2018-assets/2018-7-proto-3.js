( function( $, window, document, wb ) {
"use strict";

// The filter plugin is initialized on each target. So the "Result Filter" working space are defined by default.

// Let find their controler's

var currentFilterList = [];

var store = {};

var defaultStore = {
		filters: {},
		filterGroup: [],
		applied: {
			filters: [],
			filterGroup: []
		}
	};

window.mystore = store;

// Sort the controller
// * -> Controller that change a state in the store (like the checkbox)
// * -> Controller that initiate the change (like the button)
// A controller can be in both category

// Initialize the result set, for binding


// The optimal way to set the plugin it is on the container itself, it will be less performant if the plugin are set on the controller directly.

var componentName = "wb-contentfilter",
	selector = "." + componentName,
	controlerName = componentName + "-ctrl",
	selectorCtrl = "." + controlerName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	defaults = { },
	i18n, i18nText,

	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm,
			settings;

		if ( elm ) {
			$elm = $( elm );

			settings = $.extend( true, {}, defaults, window[ componentName ], wb.getData( $elm, componentName ) );
			$elm.data( settings );

			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					filter_label: i18n( "fltr-lbl" ),
					fltr_info: i18n( "fltr-info" )
				};
			}

			Modernizr.addTest( "stringnormalize", "normalize" in String );
			Modernizr.load( {
				test: Modernizr.stringnormalize,
				nope: [
					"site!deps/unorm" + wb.getMode() + ".js"
				]
			} );

			if ( !elm.id ) {
				elm.id = wb.getId();
			}

			// Find the controlers
			var controlers = $.find("[aria-controls=" + elm.id + "], [data-wb5-link=" + elm.id + "]");

			if ( controlers.length === 0 ) {
				console.warn( "Need to add a default controller");
			}

			// Add a class for event hook.
			$( controlers ).addClass( controlerName );

			// Debug: Log all the controler
			console.log( controlers );

			// Create the store working space for this instance
			store[ elm.id ] = $.extend( true, {}, defaultStore );


			// TODO: Restore a saved state

			wb.ready( $elm, componentName );
		}
	};


$document.on( "click", "input:checkbox.ctrlFilter" + "" + "", function( event )  {

	var elm = event.currentTarget,
		filterTag = elm.value;


	// Is this filter are in "on" or "off" state?
	// If in "on" state
	// 		-> Normal: It will show the section
	//		-> Not: It will hide the section
	// If in "off" state
	//		-> Normal: It will hide the section
	//		-> Not: It will show the section
	//
	// If in Exclusive "on" state
	//		-> Normal: Will hide all the sibling and show only itseft
	//		-> Not: Will show all the sibling but not itseft
	// If in Exclusive "off" state
	//		-> Normal: Will show all the sibling and show itseft
	//		-> Not: Will show all the sibling and show itseft

	var state = !!elm.checked;

/*
	$( ".wb-fltr-out" ).removeClass( "wb-fltr-out" );
	$( ".wb-fltr-exclusive" ).removeClass( "wb-fltr-exclusive" );
	$( ".wb-fltr-in" ).removeClass( "wb-fltr-in" );
*/

	var currentFilter = {};
	// Retreive current filter and only apply new filter

	// Get potential related elements
	var relatedPotential = document.querySelectorAll( "[data-wb5-tags*=" + filterTag + "]" );
	var related = [],
		relatedExclusive = [],
		relatedNot = [],
		relatedExlcusiveNot = [],
		relatedExclusiveRem = [];

	// Filter down the ones that match
	for( var i = 0; i < relatedPotential.length; i++ ) {
		var currentElm = relatedPotential[ i ];

		var dtTags = currentElm.dataset.wb5Tags,
			tagList = dtTags.split( " " );

		for( var j = 0; j < tagList.length; j++ ) {

			var tag = tagList[ j ],
				lastIndex = tag.lastIndexOf( filterTag );

			if ( lastIndex === -1 ) {
				continue;
			}

			// Validate the type of filter
			if ( filterTag === tag ) {

				// Related, regular filtering
				if ( state ) {
					related.push( currentElm );
				} else {
					relatedNot.push( currentElm );
				}
				break;
			} else if ( "*" + filterTag === tag ) {

				// Exclusive tag
				if ( state ) {
					relatedExclusive.push( currentElm );
				} else {
					relatedExclusiveRem.push( currentElm );
				}
				break;
			} else if ( "!" + filterTag === tag ) {

				// Not tag
				if ( state ) {
					relatedNot.push( currentElm );
				} else {
					related.push( currentElm );
				}
				break;
			}/*

			Wil produce the same effect as the regular tagging.

			 else if ( "!*" + filterTag === tag ) {

				// Exclusive not tag
				if ( state ) {
					relatedExlcusiveNot.push( currentElm );
				} else {
					relatedExclusiveRem.push( currentElm );
				}
				break;
			}*/
		}
	}

	// Order of applying filter
	//
	// 1. Apply Exclusive filter
	// 2. Apply Exclusive Not filter
	// 3. Apply filter
	// 4. Apply Not filter

	// For exclusive, Add a tag to the element, then add a CSS to the parent which will hide all the children except the one that match the subCSS class.

	// Add exclusive filter
	for( var i = 0; i < relatedExclusive.length; i ++ ) {
		var currentElm = relatedExclusive[ i ];

		// Hide each sibling that is not scoped in the related Exclusive
		$( currentElm ).addClass( "wb-fltr-in" );

		// Add the group CSS class
		currentElm.parentNode.classList.add( "wb-fltr-exclusive" );
	}

	// Remove Exclusive filter
	for( var i = 0; i < relatedExclusiveRem.length; i ++ ) {
		var currentElm = relatedExclusiveRem[ i ];

		// Remove it visible protected state
		$( currentElm ).removeClass( "wb-fltr-in" );

		// Remove the parent CSS selector only if this was the last children
		if( !currentElm.parentNode.getElementsByClassName( "wb-fltr-in" ).length ) {
			$( currentElm.parentNode ).removeClass( "wb-fltr-exclusive" );
		}
	}

	console.log( state );
	console.log( relatedNot );
	console.log( related );

	// Filter out
	$( relatedNot ).addClass( "wb-fltr-out2" );

	// Filter in
	$( related ).removeClass( "wb-fltr-out2" );

	// Toggle the filter on those items
	//$( related ).toggleClass( "hide" );


	//console.log( $( "[data-wb5-tags*=" + elm.value + "]" ) )
	//console.log(  )

} );

// Add or Remove filter when the checkbox is selected
$document.on( "click", "input:checkbox" + selectorCtrl + ", input:radio" + selectorCtrl, function( event )  {

	var elm = event.currentTarget;

	if ( !elm.id ) {
		elm.id = wb.getId();
	}

	var defaultFilter = {
			type: "css",
			filter: "." + elm.id,
			addClass: "hidden"
			// remClass: "" CSS class to be removed when applying this filter
		},
		name = elm.name || elm.id;

	// Get the store
	var s = store[ elm.getAttribute( "aria-controls" ) || elm.getAttribute( "data-wb5-link" ) ];

	if ( elm.checked ) {
		// Get the filter object or Initialize a new Filter Object
		var filter = s.filters[ name ] || {};

		filter = $.extend( true, {}, defaultFilter, wb.getData( $( elm ), componentName ) );

		// Save the filter
		s.filters[ name ] = filter;
	} else {

		// Remove the filter
		delete s.filters[ name ];
	}


	// DEBUG: Display the filters
	var $ul = $( "#currentFilterList" );
	$ul.empty();
	$.each( s.filters, function() {
		$ul.append( "<li>" + this.type + " " + this.filter + "</li>" );
	});

});

// Apply the filter
$document.on( "click", "button" + selectorCtrl + ", input:button" + selectorCtrl, function( event )  {


	var elm = event.currentTarget,
		controlId = elm.getAttribute( "aria-controls" );

	// Get the store
	var s = store[ controlId ];
	

	// Build the list of filters
	var filters = [];

	// Get a list of filter to apply and a list of filter already applied
	var filtersToApply = [];
	for( var k in s.filters ) {
		if ( s.filters.hasOwnProperty( k ) ) {
			var filter = s.filters[ k ];

			// Is that filer was already applied? Yes go to the next one
			if ( s.applied.filters[ k ] ) {
				filters[ k ] = filter;
			} else {
				filtersToApply[ k ] = filter;
			}
		}
	}

	// Remove applied filter that is not needed anymore (We are putting back the page in his initial state)
	for( var k in s.applied.filters ) {
		if ( !filters[ k ] ) {

			var filter = s.applied.filters[ k ];

			switch( filter.type ) {

			case "css":

				var elements = window.document.querySelectorAll( filter.filter );

				for ( var i = 0; i < elements.length; i = i + 1 ) {
					elements[ i ].classList.remove( filter.addClass );
					if ( filter.remClass ) {
						elements[ i ].classList.add( filter.remClass );
					}
				}
				break;

			case "search":
				break;
			case "jquery":
				break;
			}
		}
	}

	// Apply the new added filters
	for( var k in filtersToApply ) {

		var filter = filtersToApply[ k ];

		switch( filter.type ) {

		case "css":

			var elements = window.document.querySelectorAll( filter.filter );

			for ( var i = 0; i < elements.length; i = i + 1 ) {
				elements[ i ].classList.add( filter.addClass );
				if ( filter.remClass ) {
					elements[ i ].classList.remove( filter.remClass );
				}
			}

			filters[ k ] = filter;
			break;
		case "search":
			break;
		case "jquery":
			break;
		}

	}

	// Save the list of applied filter
	s.applied.filters = filters;

});


$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );

} )( jQuery, window, document, wb );