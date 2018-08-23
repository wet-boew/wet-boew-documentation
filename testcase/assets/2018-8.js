function loadCSS(filename){

  var file = document.createElement("link");
  file.setAttribute("rel", "stylesheet");
  file.setAttribute("type", "text/css");
  file.setAttribute("href", filename);
  document.head.appendChild(file);

}

loadCSS("assets/2018-8.css");

// Convert native detail/summary to accessible cross-browser syntax

function convertDetailSummary() {

	var nextId = 0;

	var detailsElements = document.querySelectorAll( "details" );

	// Reverse order so that nested details are converted first
	detailsElements = Array.prototype.slice.call(detailsElements).reverse();
	detailsElements.forEach( convertToButton );

	function convertToButton( detailsElement ) {

		var open = detailsElement.hasAttribute( "open" );

		// Create unique ID
		var id = nextId++;

		// Create new wrapper <div> to replace <details>
		var wrapperDiv = document.createElement( "div" );
		wrapperDiv.classList.add( "__detailSummary" );
		wrapperDiv.setAttribute( "id", "__detailSummary" + id );

		// Create new <div> to wrap expanding details
		var expanding = document.createElement( "div" );
		expanding.classList.add( "__details" );
		expanding.setAttribute( "id", "__detail" + id );
		expanding.setAttribute( "aria-labelledby", "__summary" + id );
		expanding.setAttribute( "role", "region" );
		if ( !open ) {
			expanding.setAttribute( "hidden", "" );
		}

		// Create new <button> to replace <summary>
		var button = document.createElement( "button" );
		button.setAttribute( "id", "__summary" + id );
		button.setAttribute( "aria-expanded", open ? "true" : "false" );
		button.setAttribute( "aria-controls", "__detail" + id );
		button.classList.add( "__summary" );

		// Separate <summary> from other content
		var details = detailsElement.cloneNode( true );
		var summary = details.querySelector( "summary" );
    details.removeChild( summary );

		// Check for a header within the summary
		var heading = summary.querySelector( "h1, h2, h3, h4, h5, h6" );
		if ( heading === null ) {
			var summaryText = summary.innerHTML;
		} else {
			var headingText = heading.innerHTML;
		}

		// Wrap summary in a div for styling
		summary = document.createElement("div");
		summary.classList.add( "__summary" );

		if ( heading !== null ) {
			// Replace summary with <heading><button>...</button></heading>
			button.innerHTML = headingText;
			heading.innerHTML = "";
			heading.appendChild( button );
			summary.appendChild(heading);
		} else {
			// Replace summary with <button>...</button>
			button.innerHTML = summaryText;
			summary.appendChild(button);
		}

		// Since we cannot use :before on the button, add a span for expand/collapse icon
		var expandIcon = document.createElement("span");
		expandIcon.classList.add("__expandIcon");
		button.appendChild(expandIcon);

		expanding.innerHTML = details.innerHTML;
		wrapperDiv.appendChild( summary );
		wrapperDiv.appendChild( expanding );

		// Replace <details> with new element
		detailsElement.parentNode.replaceChild( wrapperDiv, detailsElement );

	}

	function toggleExpanded( button ) {
		var open = button.getAttribute( "aria-expanded" ) === "true";
		var id = button.getAttribute( "id" ).split( "__summary" )[1];
		var expanding = document.getElementById( "__detail" + id );
		if ( open ) {
			button.setAttribute( "aria-expanded", "false" );
			expanding.setAttribute( "hidden", "" );
		} else {
			button.setAttribute( "aria-expanded", "true" );
			expanding.removeAttribute( "hidden" );
		}
	}

	// Add event listeners to all the buttons
	// Note: this must be done after all replacements have occured
	// or else we lose the event handlers on nested elements
	var buttons = document.querySelectorAll( "button.__summary" );
	[].forEach.call( buttons, function(button) {
		// Listen for enter, spacebar, and click
		button.addEventListener( "keydown", function( event ) {
			if ( event.which === 1 || event.which === 13 || event.which === 32 ) {
				event.preventDefault();
				toggleExpanded( event.target );
			}
			return true;
		} );
		button.addEventListener( "click", function( event ) {
			if ( event.which === 1 ) {
				event.preventDefault();
				toggleExpanded( event.target );
			}
			return true;
		} );
		button.addEventListener( "keyup", function( event ) {
			if ( event.which === 32 ) {
				event.preventDefault();
				return false;
			}
			return true;
		} );
	});

};

convertDetailSummary();
