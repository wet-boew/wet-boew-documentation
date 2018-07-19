/**
 * Element Library
 */
define( function() {
	"use strict"

	function parse( attr ) {
		let parts = attr.split( "@" ),
			action = { command: parts[0] };

		if ( parts.length > 1 ) {
			action.selector = parts[1];
		}

		if ( parts.length > 2) {
			action.options = JSON.parse( parts[2] );
		}

		return action;
    }

	function nodes( node, selector )
	{
		if ( selector == null )
		{
			return [];
		}

		let context = ( selector && selector.startsWith("#") ) ? document : node;

		return context.querySelectorAll( selector );

	}

	/* Add one or more listeners to an element
	** @param {DOMElement} element - DOM element to add listeners to
	** @param {string} eventNames - space separated list of event names, e.g. 'click change'
	** @param {Function} listener - function to attach for each event as a listener
	*/
	function addListenerMulti( element, eventNames, listener ) {
	  var events = eventNames.split( " " );
	  for ( var i = 0, iLen = events.length; i < iLen; i++ ) {
	    element.addEventListener( events[ i ], listener, false );
	  }
	}


    return {
        parse: parse,
		nodes: nodes,
		addListenerMulti: addListenerMulti
    }
} );
