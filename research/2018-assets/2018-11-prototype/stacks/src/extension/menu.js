/**
* menu engine - Prototype engine for the GCweb menu
* @returns {void}
*/
define( [  ], function(  ) {
	
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
        submenus = menu.querySelectorAll("[data-wb5-ext-menu=submenu]");
        
        attach(main, "focus", "button",{"classes":"wb5-opened"})
        attach(main, "hover",'button',{"size":">2"})
        
        attach(button, "toggle",'',{"classname":"wb5-opened", "eventname":"keydown", "aria": "expanded"})
        attach(button, "toggle",'',{"classname":"wb5-opened", "eventname":"click", "aria": "expanded","size":">3"})
        attach(button, "broadcast","#gc-mnu",{"eventname":"navEventSelect", "listener":"togglein"})
        
        attach(menu, "set","#gc-mnu > li > a",{"orientation":"vertical", "size":">2"})
        attach(menu, "set","#gc-mnu > li > a",{"orientation":"vertical", "size":"<3","toggleAriaOnSelect":"false"})

        
        for ( let item of menuItems){
            attach(item, "hover","[data-wb5-ext-menu=menuItemAnchor]",{"size":">2"})
            attach(item, "toggle","[data-wb5-ext-menu=menuItemAnchor]",{"classname":"wb5-opened", "eventname":"keydown click", "aria": "expanded","size":">3"})
        }
        
        for ( let submenu of submenus){
            attach(submenu, "set","li > a:not([aria-haspopup]",{"classes":"wb5-selected", "orientation":"vertical", "toggleAriaOnSelect": "false","size":">2"})
            attach(submenu, "set","[data-wb5-ext-menu=submenu] > li > a",{"classes":"wb5-selected", "orientation":"vertical", "toggleAriaOnSelect": "false","size":"<3"})
            attach(submenu.querySelector("ul"), "set","li > a",{"classes":"wb5-selected", "orientation":"vertical", "toggleAriaOnSelect": "false","size":"<3"})

        }
        
    };
    //Attaches a gear to an el
    //TODO: Move attach to core and improve it
    function attach ( elm, gear, selector, options){
        let currValue = elm.getAttribute("data-wb5");
        if (currValue){
            elm.setAttribute("data-wb5",currValue+" "+gear)
            
        }
        else{
            elm.setAttribute("data-wb5",gear)
        }
        
        if (selector)elm.setAttribute("data-wb5-"+gear+"-selector",selector);
        
        if (options) elm.setAttribute("data-wb5-"+gear+"-options",JSON.stringify(options));
        
        if (!elm.className.includes("wb5-inited")){
            elm.className += " wb5-inited"
            elm.className = elm.className.trim()
        }
        require( [ "module/" + gear ], function( worker ) {
            worker.handle( elm, selector, options );
        } );
        
    }
    
	return {
		handle: handle
	};
} );