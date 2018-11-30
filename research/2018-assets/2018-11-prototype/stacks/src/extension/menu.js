/**
* menu engine - Prototype engine for the GCweb menu
* @returns {void}
*/
define( [ "module/toggle", "module/broadcast",  "module/focus", "module/hover", "module/nav" ], function( ToggleGear, BroadcastGear, FocusGear, HoverGear, NavGear ) {
	
	/**
	* the main function body
	* @public
	* @param {DOMElement} $elm - the parent element for the menu
	* @returns void
	*/
	function handle( $elm ) {
        
        let main = $elm,
            button = $elm.querySelector("[data-wb5-ext-menu=button]"),
            menu = $elm.querySelector("[data-wb5-ext-menu=menu]"),
            menuItems = menu.querySelectorAll("[data-wb5-ext-menu=menuItem]"),
            seperators = $elm.querySelectorAll("[role=seperator][aria-orientation=vertical]");

            FocusGear.handle( main, "[data-wb5-ext-menu=button]", {"classes": "open" } );
            HoverGear.handle( main, "[data-wb5-ext-menu=button]", {"size": ">2"});

            ToggleGear.handle( button, "", {"classname":"open", "eventname":"click keydown", "aria": "expanded"});

            BroadcastGear.handle( button, "#gc-mnu", {"eventname":"select", "listener":"keydown"});

            NavGear.handle(menu, "[data-wb5-ext-menu=menuItemAnchor]", {"classes":"open", "orientation":"vertical", "size":">2"});
            NavGear.handle(menu, "[data-wb5-ext-menu=menuItemAnchor]", {"classes":"open", "orientation":"vertical", "useAria":"false", "size":"<3"});

            for ( let item of menuItems){
                HoverGear.handle( item, "[data-wb5-ext-menu=menuItemAnchor]", {"size":">2"});
                ToggleGear.handle( item, "[data-wb5-ext-menu=menuItemAnchor]", {"classname":"test", "eventname":"keydown", "aria": "expanded", "size":"<3"});

            }

	};


	return {
		handle: handle
	};
} );