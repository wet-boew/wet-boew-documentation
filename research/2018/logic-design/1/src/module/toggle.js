/**
 * timer.js - a timer module that will create a repetative timer on an element
 * @returns {void}
 */
define( [ "module/element", "module/core/object" ], function( ElementUtil, ObjectUtil ) {
    "use strict";

	/**
	 * a11yClick - traps various event types to ensure that a "click" can be done with a mouse and a keyboard
	 * @private
	 * @param {Object} event the event object to which the user "clicked" the element
	 * @returns whether it is a "click" or not
	 * @type Boolean
	 */

    function a11yClick( event ) {

		if ( event.type === "click" ) {
	        return true;
        }

        if ( event.type === "keypress" ) {

	        let code = event.charCode || event.keyCode;

			if ( ( code === 32 ) || ( code === 13 ) ) {
	            return true;
	        }
	    }

        return false;
	}

    /**
     * the main function body
     * @public
     * @param {DOMElement} $elm the element for which the data-wb5 attribute is located
     * @param {String} selector the CSS3 query string to which target the children or not
     * @param {Object} options for the element/node
     * @returns void
     */

	function handle( $elm, selector, options ) {

		let properties =  Object.assign({ eventname: "click keypress", toggleclass : "toggle" }, options),
		    listener = ( properties.eventname !== "click keypress" )
                ? function( event ) { ElementUtil.toggle( classname ) }
                : function( event ) { if ( a11yClick( event ) ) { ElementUtil.toggle( classname ) } };

		for ( let node of element.nodes( $elm, selector ) ) {
				element.addListenerMulti( node, eventname, listener );
		}

	}

	return {
		handle: handle
	};
} );
