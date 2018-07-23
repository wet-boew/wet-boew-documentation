/**
 * timer.js - a timer module that will create a repetative timer on an element
 * @returns {void}
 */
define( [ "module/core/object", "module/element" , "module/core/debug"], function( ObjectUtil , ElementUtil , DebugUtil) {

    function find( $children, classname )
    {
        for (let idx = $children.length - 1; idx >= 0; idx--) {

			if ( ElementUtil.hasClass( $children[idx], classname) )
			{
				return idx
			}
        }
		return -1;
    }

	function reveal( $children, classname, index )
	{
        for (let idx = $children.length - 1; idx >= 0; idx--) {

			if ( idx == index )
			{

				ElementUtil.addClass( $children[idx], classname );
				continue;
			}

			ElementUtil.removeClass( $children[idx], classname );
        }
	}

	function handle( $elm, selector, options ) {

        let properties = ObjectUtil.extend( {}, { eventname: "increment", classname: "active" }, options ),
            children = ElementUtil.nodes( $elm, selector );

        ElementUtil.addListener( $elm, "increment decrement",function( event ){

			let advance = ( event.type === "increment") ? 1 : -1,
			    current = find( children, properties.classname ),
                total = children.length - 1;

            if ( ( (current + advance) > total ) || ( ( current + advance ) < 0 ) )
            {
                return reveal( children, properties.classname, 0 );
            }

            return reveal( children, properties.classname, current + advance );

        });

	}

	return {
		handle: handle
	};
} );
