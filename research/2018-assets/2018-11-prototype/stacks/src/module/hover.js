/**
* Hover gear - Adds and removes classes on hover/focus
* @author Government of Canada
* @version 1.0
*/

define( [ "module/element", "module/aria"], function( ElementUtil, AriaUtil ) {
	"use strict";

	/**
	* the main function body
	* @public
	* @param {DOMElement} $elm the element for which the data-wb5 attribute is located
	* @param {String} selector the CSS3 query string to which target the children or not
	* @param {Object} options - for the element/node
	* @returns void
	*/
	function handle( elm, selector, options ) {       

		let properties = Object.assign({ classname: "open" }, options ),
		children = ElementUtil.nodes( elm, selector );

		var focusWithin = false;

		let submenus = elm.querySelectorAll( "[aria-haspopup]:not([aria-expanded])" );
		for ( let node of submenus ) {
			AriaUtil.add( node, "expanded", false );
		}

		ElementUtil.addListener( elm, "mouseover", function( event ){
			focusWithin = true;
			setTimeout( function() {
				if ( focusWithin ) {
					for ( let child of children ) {
						ElementUtil.addClass( child, properties.classname );
						if ( child.matches( "[aria-expanded~=false]" ) ) {
							AriaUtil.add( child, "expanded", "true" );
						}
					}
				}
			},350 );
			
		})

		ElementUtil.addListener( elm, "mouseleave", function(event){
			focusWithin = false;
			setTimeout( function() {
				if ( !focusWithin ) {
					for ( let child of children ) {
						ElementUtil.removeClass( child, properties.classname );
						if ( child.matches("[aria-expanded~=true]") ) {
							AriaUtil.add( child, "expanded", "false" );
						}
					}					
				}
			},350 ); 
		}  )  
	}

	return {
		handle: handle
	};
} );
