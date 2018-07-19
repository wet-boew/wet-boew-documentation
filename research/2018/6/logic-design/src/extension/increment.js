/**
 * timer.js - a timer module that will create a repetative timer on an element
 * @returns {void}
 */
define( [ "module/toggle" ], function( toggle ) {



	function handle( selector, options ) {

		let eventname = ( options && options.eventname ) ?  options.eventname : "click keypress";
		let classname = ( options && options.toggleclass ) ?  options.toggleclass : "toggle";
		let listener = ( eventname !== "click keypress" )
			? function( event ) { event.target.classList.toggle( classname ); }
			: function( event ) { if ( a11yClick( event ) ) { event.target.classList.toggle( classname );} };

		for ( let node of element.nodes( this, selector ) ) {
				addListenerMulti( node, eventname, listener );
		}

	}

	return {
		handle: handle
	};
} );
