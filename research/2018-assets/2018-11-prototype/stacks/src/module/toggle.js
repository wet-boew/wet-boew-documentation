/**
* Toggle gear - a module for adding/removing classes
* @returns {void}
*/
define( [ "module/element", "module/event" ], function( ElementUtil, EventUtil ) {
	"use strict";

	/**
	* the main function body
	* @public
	* @param {DOMElement} elm - element which listens for and handles events
	* @param {String} selector - query string for target elements (defaults to elm if empty)
	* @param {Object} options - configuration for the module
	* @returns void
	*/

	function handle( elm, selector, options ) {

		let properties =  Object.assign({ eventname: "click keydown", classname : "toggle" }, options),
		nodes = ElementUtil.nodes( elm, selector );

		ElementUtil.addListener( elm, properties.eventname, function( event ){
			// 'enter' and 'space' are both valid key presses
			if ( event.type == "keydown" ){
				let code = event.charCode || event.keyCode;
				if ( ( code !== 32 ) && ( code !== 13 ) ) {
					return false;
				}
			}
			for ( let node of nodes ) {
				let evt;
				if ( ElementUtil.hasClass( node, properties.classname ) ) {
					ElementUtil.removeClass( node, properties.classname );
					if (properties.aria){
						node.setAttribute( "aria-"+properties.aria, "false");
					}
					evt = EventUtil.create( "toggleout" );
				}
				else{
					ElementUtil.addClass(node, properties.classname);
					if (properties.aria){
						node.setAttribute( "aria-"+properties.aria, "true");
					}
					evt = EventUtil.create( "togglein" );
				}
				node.dispatchEvent( evt );
			}
		} );	
	}

	return {
		handle: handle
	};
} );
