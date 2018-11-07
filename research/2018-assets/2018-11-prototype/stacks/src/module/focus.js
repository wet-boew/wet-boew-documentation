/**
* focus.js - tracks focus and removes classes on blur
* @returns {void}
*/
define( [ "module/element", "module/aria" ], function( ElementUtil, AriaUtil ) {

	/**
	* the main function body
	* @public
	* @param {DOMElement} elm - element which listens for and handles events
	* @param {String} selector - query string for target elements (defaults to elm if empty)
	* @param {Object} options - configuration for the module
	* @returns void
	*/
	function handle( elm, selector, options ) {

		let properties = Object.assign({ classes: "active" }, options ),
		children = ElementUtil.nodes( elm, selector );

		var focusWithin = false;

		let submenus = elm.querySelectorAll( "[aria-haspopup]:not([aria-expanded])" );
		for (let node of submenus ) {
			AriaUtil.add( node, "expanded", false );
		}

		ElementUtil.addListener( elm, "focusin", function( event ){
			focusWithin = true;
		})

		ElementUtil.addListener( elm, "focusout", function( event ){
			focusWithin = false;
			timer = setTimeout( function() {
				if ( !focusWithin ) {
					for ( let child of children ) {
						ElementUtil.removeClass( child, properties.classes );
						if ( child.matches( "[aria-expanded~=true]" ) ) {
							AriaUtil.add( child, "expanded", "false" );
						}
					}
				}
			},1 ); 
		})	};

		return {
			handle: handle
		};
	} );