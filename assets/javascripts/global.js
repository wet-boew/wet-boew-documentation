/*global jQuery: false*/
(function () {
	"use strict";
	// Test that browser supports CORS (uses test from prose/boot.js). Intended to reroute to fallback when Prose won't work. 
	if (!('withCredentials' in new XMLHttpRequest())) {
		var edit_link = document.getElementById('edit-page');
		if (edit_link !== null) {
			edit_link.href = edit_link.href.replace(/^http:\/\/prose\.io\/#/, 'https://github.com/').replace(/\/edit\//, '/blob/');
		}
	}
}(jQuery));
