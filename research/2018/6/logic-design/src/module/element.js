/**
 * Element Library
 */
define( function() {
	"use strict"

	function parse( attr ) {
		let parts = attr.split( "@" ),
			action = { command: parts.pop() };

		if ( parts.length > 0 ) {
			action.selector = parts.pop();
		}

		if ( parts.length > 0 ) {
			action.options = JSON.parse( parts.pop() );
		}

		return action;
    }


    return {
        parse: parse
    }
} );
