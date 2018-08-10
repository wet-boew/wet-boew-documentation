/**
 * Count class - Listenes to timer and counts up or down
 * @author Liam Lowndes
 * @version 1.0
 */

define( [ "module/core/object", "module/element" ], function( ObjectUtil , ElementUtil) {
	
	function handle( $elm, selector, options ) {
		
		//Listens for increment/decrement from timer and increases/decreases the $elm's inner child by 1
		
		ElementUtil.addListener( $elm, "increment decrement",function( event ){
			
			if ((event.type === "decrement") && ($elm.childNodes[1].getAttribute("data-wb5-count-value") > 0)) {
			
				$elm.childNodes[1].setAttribute("data-wb5-count-value", Number($elm.childNodes[1].getAttribute("data-wb5-count-value")) - 1);
				
				
			} else if (event.type === "increment") {
			
				$elm.childNodes[1].setAttribute("data-wb5-count-value", Number($elm.childNodes[1].getAttribute("data-wb5-count-value")) + 1);
			}
		});
	}
	
	return {
		handle: handle
	};
});




























/*

-------------------------------------------------------------------
XWXWXWXWXWXWXWXW                                   WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX                 A                 XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW                AWA                WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX           AA  AWXWA  AA           XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW            VWXWXWXWXWV            WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX        AA   VWXWXWXWV   AA        XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW    LLXWXWXA  VWXWXWV  ASWXWXWV    WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX     XWXWXWXWXWXWXWXWXWXWXWXWX     XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW   AXWXWXWXWXWXWXWXWXWXWXWXWXWXA   WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX      VXWXWXWXWXWXWXWXWXWXWXV      XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW         ZZWXWXWXWXWXWXWXV         WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX           XWXWXWXWXWXWX           XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW         AXWXWXWXWXWXWXWXA         WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX                 I                 XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW                 I                 WXWXWXWXWXWXWXWX
WXWXWXWXWXWXWXWX                 I                 XWXWXWXWXWXWXWXW
XWXWXWXWXWXWXWXW                                   WXWXWXWXWXWXWXWX
-------------------------------------------------------------------

*/