/**
* Nav gear - allow navigation through lists with the keyboard
* @returns {void}
*/
define( [ "module/element", "module/aria", "module/size", "module/event" ], function( ElementUtil, AriaUtil, SizeUtil, EventUtil ) {
	
	/**
	* keycode - determines what action to take when a key is pressed
	* @private
	* @param {object} event - the event that contains information about the key
	* @param {string} orientation - whether the menu is horizontal or vertical (navigated with left/right or up/down)
	* @returns name of action to take or false if invalid key
	* @type string / bool
	*/
	//TODO: Improve horizontal menu functionality
	function keycode( event, elm, currentElm, properties ) {
		
		let code = event.charCode || event.keyCode,
		submenu =  currentElm.querySelector( "[data-wb5~=set]" ) || currentElm.parentElement.querySelector( "[data-wb5~=set]" ),
		supermenu =  elm.parentElement.closest("[data-wb5~=set]"),
		command = "default",
		bubble = false;

		if (submenu){
			if ( !submenu.parentElement == currentElm && !submenu.parentElement == currentElm.parentElement ) {
				submenu = false;
			}
		}

		if ( code == 13 ) {
			if(submenu){
				command = 'navEventEnterMenu';
			}
		}

		else if ( code == 27 ) {
			command = 'navEventExitMenu';
		}

		else if ( properties.orientation == "horizontal" ) {
			if ( code == 39 ) { //right arrow
				command = 'navEventIncrement';
			}
			else if ( code == 37 ) { //left arrow
				command = 'navEventDecrement';
			}
			else if ( code == 40 ) { //down arrow
				if (submenu){
					command = 'navEventEnterMenu';
				}
				else{
					bubble = true
				}
			}
			if ( code == 38 ) { //up arrow
				if (supermenu){
					return 'navEventExitMenu';
				}
			}
		}
		else if ( properties.orientation == "vertical"){
			if ( code == 40 ) { //down arrow
				command = 'navEventIncrement';
			}
			if ( code == 38 ) { //up arrow
				command = 'navEventDecrement';
			}
			if ( code == 39 ) { //right arrow
				if (submenu) {
					command = 'navEventEnterMenu';
				}
				else{
					let superMenuBar =  elm.parentElement.closest("[data-wb5~=set]:not([data-wb5-nav-options~=vertical])");
					if( superMenuBar ){
						command = "navEventExitMenu"
						evt = EventUtil.create( "navEventIncrement" );
						superMenuBar.dispatchEvent( evt );
					}
				}
			}
			if ( code == 37 ) { //left arrow
				command = 'navEventExitMenu';
				if (supermenu){
					if (!supermenu.dataset.wb5SetOptions.includes("vertical")){
						bubble = true;
					}
				}
			}
		}
		else if ( properties.orientation == "grid" ) {
			if ( code == 40 ) { //down arrow
				command = 'navEventIncrementRow';
			}
			if ( code == 38 ) { //up arrow
				command = 'navEventDecrementRow';
			}
			if ( code == 39 ) { //right arrow
				command = 'navEventIncrement';
			}
			if ( code == 37 ) { //left arrow
				command = 'navEventDecrement';
			}
		}

		return [command, bubble];
	};
	
	/**
	* find - determines which item from a set has a certain class
	* @private
	* @param {NodeList} $children - the set of items from which to check
	* @param {string} classname - the class to look for
	* @returns the index of the element if found, -1 if not
	* @type int
	*/	
	function find( $children, classname ) {
		
		for (let idx = $children.length - 1; idx >= 0; idx--) {
			if ( ElementUtil.hasClass( $children[idx], classname) )
			{
				return idx;
			}
		}
		return -1;
	};
	
	function focusable( elm ){
		return elm.matches( 'button, [href], input, select, textarea, [tabindex]' );
	}
	
	/**
	* the main function body
	* @public
	* @param {DOMElement} $elm the element for which the data-wb5 attribute is located
	* @param {String} selector the CSS3 query string to which target the children or not
	* @param {Object} options - for the element/node
	* @returns void
	*/
	function handle( $elm, selector, options ) {
		
		let properties = Object.assign({ classes: "wb5-selected", toggleAriaOnSelect: "true", size:">0" }, options ),
		children = ElementUtil.nodes( $elm, selector );
		//Add event listeners
		listen( $elm, children, properties );
	};
	
	/**
	* listen - attaches listener to handle key presses
	* @private
	* @param {DOMElement} $elm - the element that captured the event
	* @param {nodeList} children - subelements to cycle through
	* @param {Object} properties - contains module configuration data
	* @returns void
	*/
	function listen($elm, children, properties){
		
		
		var focusWithin = false;
		
		let submenus = $elm.querySelectorAll( "[aria-haspopup]:not([aria-expanded])" );
		for ( let node of submenus ) {
			AriaUtil.add( node, "expanded", false );
		}
		
		ElementUtil.addListener( $elm, "focusin", function( event ){
			if (!SizeUtil.check(properties.size) ){
				return;
			}
			
			focusWithin = true;
		})
		
		//Remove classes on unfocus, unless otherwise specified
		ElementUtil.addListener( $elm, "focusout", function( event ){
			if (!SizeUtil.check(properties.size) ){
				return;
			}
			
			
			focusWithin = false;
			timer = setTimeout( function() {
				if( !focusWithin ) {
					if ( !properties.KeepClassOnBlur ) {
						ElementUtil.removeClass( $elm, properties.classes );
						if( $elm.matches( "[aria-expanded~=true]" ) ) {
							AriaUtil.add( $elm, "expanded", "false" );
						}
						for (var child of children){
							ElementUtil.removeClass( child, properties.classes )
							if( child.matches("[aria-expanded~=true]" ) ) {
								AriaUtil.add( child, "expanded", "false" );
							}
						}
					}
				}
			},1); 
		})
		
		//handle navigation events
		//find the next element and move the class from the current element to the next element
		ElementUtil.addListener( $elm, "keydown navEventSelect navEventExitMenu navEventEnterMenu navEventIncrement navEventDecrement navEventIncrementRow navEventDecrementRow" , function( event ){
			if (!SizeUtil.check(properties.size) ){
				return;
			}
			let advance,
			current = find( children, properties.classes ),
			total = children.length,
			next = 0,
			currentElm = (current == -1) ? $elm : children[ current ],
			nextElm = currentElm,
			removeOnMove = true,
			nextElmWithin = true,
			navEventType=event.type;
			
			//interpret keypress events
			if (event.type == "keydown"){
				let navEvent = keycode( event, $elm, currentElm, properties);
				if (!navEvent[1]){
					event.stopPropagation();
				}
				if (navEvent[0]=="default"){
					return;
				}
				else{
					event.preventDefault();
					navEventType = navEvent[0];
				}
				console.log("Keypress event detected:",navEventType)

			}
			else{
				console.log("NavEvent event detected:",navEventType)
				event.stopPropagation();
			}

			//Navigation event: Select
			//Set next element to target of the Select event
			if ( navEventType == 'navEventSelect' ) {
				
				let target = event.target == $elm ? children[ 0 ] : event.target;
				console.log("Selecting target:",target)
				for ( let idx = children.length - 1 ; idx >= 0 ; idx-- ) {				
					if ( target == children[ idx ] || children[ idx ].contains( target ) )
					{
						nextElm = children[ idx ];
						continue;
					}
				}
			}
			
			//Navigation event: Enter
			//Next element is the first element of the submenu
			//TODO: Better submenu detection
			else if ( navEventType == 'navEventEnterMenu' ) {
				let submenu = currentElm.querySelector( "[data-wb5~=set]" ) || currentElm.parentElement.querySelector( "[data-wb5~=set]" );
				if ( submenu ) {
					if ( submenu.parentElement == currentElm || submenu.parentElement == currentElm.parentElement ) {
						if ( currentElm.matches( "[aria-expanded~=false]" ) ) {
							AriaUtil.add( currentElm, "expanded", "true" );
							ElementUtil.addClass( currentElm, "wb5-opened" );
						}
						let subMenuItem = submenu.querySelector( submenu.dataset.wb5SetSelector ),
						evt = EventUtil.create( "navEventSelect" );
						//console.log("Submenu found at",submenu)
						//console.log("Selecting submenu item",subMenuItem)
						subMenuItem.dispatchEvent( evt );
						removeOnMove = false;
					}
				}
			}
			//Navigation event: Exit
			//Close the current menu and return focus to the parent element.
			else if( navEventType == 'navEventExitMenu') {
				let supermenu = $elm.parentElement.closest("[data-wb5~=set]");
				if ( supermenu ) {
					nextElmWithin = false;
					let superMenuItem = $elm.closest( supermenu.dataset.wb5SetSelector ) || $elm.parentElement.querySelector( supermenu.dataset.wb5SetSelector );
					if (superMenuItem){
						if ( superMenuItem.matches( "[aria-expanded~=true]" ) ) {
							AriaUtil.add( superMenuItem, "expanded", "false" );
							ElementUtil.removeClass( superMenuItem, "wb5-opened" );
						}
						let evt = EventUtil.create( "navEventSelect" );
						superMenuItem.dispatchEvent( evt );
					}
				}
				//Menu Button
				else if ( $elm.parentElement.querySelector( "button" ) ) {
					nextElmWithin = false;
					let menuButton = $elm.parentElement.querySelector( "button" );
					if ( menuButton.matches( "[aria-expanded~=true]" ) ) {
						AriaUtil.add( menuButton, "expanded", "false" );
						ElementUtil.removeClass( menuButton, "wb5-opened" );
					}
					menuButton.focus();
				}
			}
			//Navigation event: Increment/Decrement
			//Next element is the element before or after the current one OR the element one row up or down.
			//TODO: Improve grid support by allowing elements to be designated as rows. Inc/dec would select the nth element in the prev/next row, where n is the position of the current element in the current row.
			else {
				advance = ( navEventType.includes("Increment") ) ? 1 : -1;
				if ( navEventType.includes("Row") ) {
					advance *= parseInt(properties.width);
				}
				if ( current + advance < total ) {
					next = current + advance;
					next = ( next < 0 ) ? total + next : next;
				}
				
				if ( current + advance > total ) {
					next = current + advance;
					next = ( next > total ) ? next - total : next;
				}
				nextElm = children[next];
			}
			
			//Remove the class from the current element, unless otherwise specified
			if ( removeOnMove) {
				ElementUtil.removeClass( currentElm, properties.classes );
				if (properties.toggleAriaOnSelect == "true"){
					if ( currentElm.matches( "[aria-expanded~=true]" ) ) {
						console.log("Removing Aria from", currentElm)
						AriaUtil.add( currentElm, "expanded", "false" );
					}
				}
			
			
			//Determine where to move focus
			//If the next element has a child anchor element, focus on it
			//If not, focus on the element itself
			if( nextElmWithin ){
				let menuItemAnchor = nextElm.querySelector( "[href],[tabindex]" );
				if ( menuItemAnchor ) {
					if ( menuItemAnchor.parentElement == nextElm ) {
						menuItemAnchor.focus();
					}
				}
				else if ( focusable(nextElm) ) {
					nextElm.focus();
				}
				ElementUtil.addClass( nextElm, properties.classes );
				if (properties.toggleAriaOnSelect == "true"){
					if ( nextElm.matches( "[aria-expanded~=false]" ) ) {
						AriaUtil.add( nextElm, "expanded", "true" );
					}
				}
			}
		}
			
			
		});
	};
	
	return {
		handle: handle
	};
} );