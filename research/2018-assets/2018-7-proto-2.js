/*
 * Research 2018-7 - Prototype 2
 *
 */

( function( $, window, wb ) {
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

} )( jQuery, window, wb );