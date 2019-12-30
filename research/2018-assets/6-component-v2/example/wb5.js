/**
 * Wet  Next
 */

(function( dom , win ){

	var myLocalVariable = {
		
		timer: {}
	}

		var Inventory = {
			timer : function( node, selectors, options ) { 
				node.innerHTML = node.innerHTML + " ( OK TIMER )"; 
				
				myLocalVariable.timer = setInterval();
			},
			liam : 	function() {
				node.querySelector( selec
			}
		}
	
		var wb5 = dom.querySelectorAll('[data-wb5]');

		for (var i = wb5.length - 1; i >= 0; i--) {
			var elm = wb5[i],
				params = elm.getAttribute('data-wb5').split('@');

		// params => [ "timer", "selectors", "options" ]
		
		// var shiftedValue = params.shift();
		
		// shiftedValue => "timer"
		// params => [ "selectors", "options" ]
				
			Inventory[ params.shift() ]( elm, params );
		}

})( document, window)