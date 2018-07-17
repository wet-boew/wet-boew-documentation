/**
 * Event library
 */
define( function() {
	"use strict"
	function create( event, params ) {
		params = params || { bubbles: false, cancelable: false, detail: undefined };
		var evt = document.createEvent( "CustomEvent" );
		evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
		return evt;
	}

	return {
		create: create
	}
} );
