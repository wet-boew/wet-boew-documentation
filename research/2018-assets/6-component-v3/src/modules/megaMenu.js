//Flickr Function
define( function() {
	
    function execute( selector, options ) {
		
		function drop (curAction, onOff) {
	
			var menuitems = document.querySelectorAll('#wb-sm > div > div > ul > li > a')
			
			for (var i = 0; i < menuitems.length; i++) {
				
				menuitems[i].addEventListener(curAction,
					
				function(event) {
					
					if (onOff == 'on') {
						
						event.target.parentNode.querySelector('ul').classList.add("open");
						
					};
						
					if (onOff == 'off') {
						
						event.target.parentNode.querySelector('ul').classList.remove("open");
						
					
					};
				});
			};
		};


		drop("mouseenter", "on");
		drop("mouseleave", "off");
		
		
			}

    return {
        handle: execute
    };
} );