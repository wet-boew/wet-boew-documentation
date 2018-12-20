/**
* Keys gear - Interprets keypress events as Set Navigation events
* @returns {void}
*/
define( [ "module/element", "module/aria", "module/size" ], function( ElementUtil, AriaUtil, SizeUtil ) {
	
	/**
	* keycode - determines what action to take when a key is pressed
	* @private
	* @param {object} event - the event that contains information about the key
	* @param {string} orientation - whether the menu is horizontal or vertical (navigated with left/right or up/down)
	* @returns name of action to take or false if invalid key
	* @type string / bool
	*/
	function keycode( event, orientation ) {
		
		let code = event.charCode || event.keyCode;
		/*if ( code == 13 ) {
			return 'enter';
		}*/
		if ( code == 27 ) {
			return 'navEventExitMenu';
		}
		if ( orientation == "horizontal" ) {
			if ( code == 39 ) { //right arrow
				return 'navEventIncrement';
			}
			if ( code == 37 ) { //left arrow
				return 'navEventDecrement';
			}
			if ( code == 40 ) { //down arrow
				return 'navEventEnterMenu';
			}
			if ( code == 38 ) { //up arrow
				return 'navEventExitMenu';
			}
		}
		else if ( orientation == "vertical"){
			if ( code == 40 ) { //down arrow
				return 'navEventIncrement';
			}
			if ( code == 38 ) { //up arrow
				return 'navEventDecrement';
			}
			if ( code == 39 ) { //right arrow
				return 'navEventEnterMenu';
			}
			if ( code == 37 ) { //left arrow
				return 'navEventExitMenu';
			}
		}
		else if ( orientation == "grid"){
			if ( code == 40 ) { //down arrow
				return 'navEventIncrementRow';
			}
			if ( code == 38 ) { //up arrow
				return 'navEventDecrementRow';
			}
			if ( code == 39 ) { //right arrow
				return 'navEventIncrement';
			}
			if ( code == 37 ) { //left arrow
				return 'navEventDecrement';
			}
			if ( code == 13){
				return "navEventEnterMenu"
			}
		}
		
		return false;
	};
	
	/**
	* the main function body
	* @public
	* @param {DOMElement} $elm the element for which the data-wb5 attribute is located
	* @param {String} selector the CSS3 query string to which target the children or not
	* @param {Object} options - for the element/node
	* @returns void
	*/
	function handle( $elm, selector, options ) {
		
		let properties = Object.assign({ orientation: "horizontal", size: ">0" }, options ),
		children = ElementUtil.nodes( $elm, selector );
		//Add event listeners
		listen( $elm, children, properties );
	};
	
	
	return {
		handle: handle
	};
} );