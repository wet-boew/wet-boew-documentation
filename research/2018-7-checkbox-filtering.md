---
published: true
layout: default-theme-wet-boew-en
title: 2018-7 - Checkbox filtering
description: Developper notes on adding a checkbox filtering capability in WET
modified: 2018-08-09
---

Developper notes on adding a checkbox filtering capability in WET


## Requirement

Leverage CSS classes and checkboxes to apply content filtering. A feature like the filter plugin but without keyword filtering through a text field.

* Show and hide block of content to the user by using checkboxes.
* Integrate the plugin in WET and make it available on Canada.ca

Progressive goal: Support the feature provided by the prototype 1 and ensure the plugin is not directly tie or bind to the business content of the page.

## Relevant reference

Working example: 
* [Filter WET](http://wet-boew.github.io/wet-boew/demos/filter/filter-en.html)
* [6. Use open standards and solutions (draft)](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/standards-normes/en/6-use-open-standards-solutions.html)
* [WCAG 2.1 Quick reference](https://www.w3.org/WAI/WCAG21/quickref/)

Standards:
* [WAI-ARIA ```aria-controls``` property](https://www.w3.org/TR/wai-aria-1.1/#aria-controls)

Source code:
* [WET filter](https://github.com/wet-boew/wet-boew/tree/master/src/plugins/filter)
* [Digital playbook filter plugin](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/assets-atouts/js/filter-interface-filtre.js) (as July 7 - commit de90406)

## Prototype

* [Conceptual prototype - high/medium fidelity](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/standards-normes/en/6-use-open-standards-solutions.html)

## Experimentation

### Conceptual prototype - high/medium fidelity

A initial WET plugin was prototyped for the Digital Playbook on Canada.ca on May 2018.

Example: 
* [6. Use open standards and solutions (draft)](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/standards-normes/en/6-use-open-standards-solutions.html)
* [Same, but replicated locally](2018-7-prototype-1.html)

Functionality overview:
* The filter can be displayed when the user click on the "Show filters" button
* An right overlay appear with a structured content on how filter can be applied
* There is an option to apply persistant filter
* Filter can be grouped, a parent would apply some of all sub-filter term.

### Behaviour

* The filter interface are available through an overlay
* The content on the page is marked with section/div that use a convention for naming the CSS class name. 
* The filter UI have 5 section
* Filter are applied only when the user hit the button "Apply filters"
* Multiple filter can be set at once.
* Checkboxes are not checked by default but the initialized content is displayed the same as if all checkboxes was check

Naming convention
* Allow interoperability between the checked item and show/hide a section. 
* Theire is an direct association between the id of the checkbox and the CSS class name. 
* The id of the checkbox would be use as a class name to find each section where to apply the filtering.
* The naming convention contain dashed to include "grouping" identifier. 
* The first part is a product identifier without meaning in this context
* The second parts is the group name
* The rest represent the local/unique name
* The last part are use to control "acestor" and "descendent" filtering with exclusive filter. 

Filter overlay UI
* There is 5 visual section
* Everything is unchecked by default
* The first section is to show/hide all details/summary on the page. It use the toggle plugin.
* The second section is to show/hide content regarding to the developement stage. Filtering from this section are not impact in the sample page.
* The third section represent the hierachical section in this page.
* The third section contains a groupping (parent/children) checkbox. 
* The forth section contains a exclusive filter, that mean only content that are tagged with that filter is displayed, anything else are hidden.
* The fifth section contains a checkbox to remember what the user has chosen and a button to apply the filter.

Toggle to show Content details
* The toogle plugin is use to show multiple expand/collapse in the page that provide more details to each checklist items in the page.
* It toggle the css class "hide"

Parent/Children checkbox
* Checking the parent would check all the children
* Checking a children would check the parent but not the sibling
* Unchecking all the children, uncheck the parent
* Unchecking the parent, will uncheck all the children

Exclusive filtering
* Will only show content that explicitly have been marked with the exclusive filter.
* [Assumption] Imbrication of exclusive filter may cause inconsistant behaviours
* [Assumption] Multiple exclusive filter might conflict.

Remembering filter
* The user can choose to remember his selected filter
* The filter is saved in the browser local storage
* The remember filter are applied on the plugin initialization

### Code review

* This plugin use the right structure for WET4 plugin
* Contains context-specific code like ```dpgn-exclusive-filter```
* There is 3 main events
	* Plugin initialisatin
	* When a checkbox is check or uncheck
	* When to apply the filter
* There is an implicit grouping based on how ```fieldset``` are used, the default group is the form.
* There is context specific selector in the middle of the plugin code, such as ```[class*='dpgn-section']```
* Special consideration are needed for Exclusive filter, like adding ```ancestor``` and ```descendent``` class on element to better toggle what is displayed or not.
* It support filtering by using the query string, like "?contentfilter=dpgn-abc-123,dpgn-def-456"
* If there is some filter, the button to apply the filtering is called
* The plugin is initialized on the form, the controller and not on the content.
* Only allow filtering for ```input[type=checkbox]```
* The id of the checkbox is use to do the class filtering.

### Functionality

* Apply a CSS class to hide content, like ```hide```, based on checked option.
* Checking parent/children checkboxes (this could be a candidade for another plugin)
* Exclusive filtering
* Remember the filter states
* [from the code] Apply filter through a URI query (This could be changed to use the URL mapping instead)

### Questions that need investigation

* As all the content is visible, should all the checkboxes be checked by default
* Cleary define how the "exclusive" filter work. Is it show the current item with all his children, display only his ancesor until we reach the "main" element, and hide all immediate slibling.
* Put "parent/children" auto check in a idependant plugin?
* Port the filtering through the url into the URL mapping which are more secure as a value of a parameter need to be validated against a regular expression.
* Extend the ```checkbox``` filtering to other input such ```select```; ```input[type=radio]```; ....
* Should we handle a value set to the ```value``` attribute in the input. Like let the value be the filter class name instead of using the "id" of the checkbox.

## Design challenges

* Integrate with the filter plugin.
* Make the filter UI independant from the Filtering service. Like using the same logic in the user interface to filter content in the page or to filter content in a data table.
* Remove any context specific logic.
* Describe and validate scenario for an accessibilty and UX perspective.
* Standardize the user experience by taking in consideration future development.
* Provide a stable functional prototype which can be use on production.

### The filtering UI

Try to abstract the filtering UI in order to be re-usable by the mandate tracker, the filtering with drop down in the data table working example, when field flow apply filtering. Or any other filtering.

## WCAG Quick Reference filtering

Working example: [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&versions=2.0&levels=aa%2Caaa#top) [as published on July 19, 2018 - Version 3.0.0]

* The filter is in a left sidebar in a second tag, the first tab fo the sidebar is the Table of content.
* There is three different type of filter
* By default, all checkbox is checked because the associated content is visible by default.
* Beside each check box, there is a button called "only" which exclusively select that item for the group.
* Disabled/deactivated button are strike out
* Filter is apply are the same time as the states of form field are changed.
* The is a top overlay on the content.
	* Show the current filter in a phrasing context. It adapt when the filter change
	* Contain a button to clear all the filter
	* Contain a button to Expand or Collapse all section. The text label is fully updated depending of his state.
	* Contain a share button which contain an URL that could re-apply the exact same filter.
	* Contain a link to a section showing what content the filter has removed
* At the bottom of the page, there is a section listing what the filter has removed
	* That list is dynically updated
	* It list the heading of the section that was hidden
	* It include "hidden" header from a filter made globally. Like the header relatively to each Success Criteria
	* It don't include the header associated to sub-section, like if the "Sufficient Techniques" is filtered out, that wont be included in that list. But removing a filter regarding the Level of conformity will add items to that list.
	* That section contain a button to clear all filter.

Type of filter
* Global scope of the page (Dropdown to show content that apply for specific version)
	* Similar to the section filtering, but it fully hide/show section that are not pertinant. Heading of hidden section are not displayed.
* Tagging (Checkboxes for main tags, button for all the tags)
	* When selected, it only show the information that correspond to that filter.
	* Multiple tags act like an "OR" operator
	* Heading of hidden section are displayed but styled differently. 
		* font-color has changed for a light gray (like CSS class: text-muted)
		* font-size has been reduced to the same as text (like the same size as a paragraph)
* Section and Sub-section (Checkboxes)
	* Show/hide block of content.
	* When section are going to be hidden, the heading of the hidden section are gray out but they are still displayed.
		* The heading that are displayed, is the first heading identified by that section. 
		* The padding of that section are modified
			* Increased when available
			* Reduced when unavailable
	* Filter for technique fully hide the heading, it act like the glocal scope of the page filter.
* In content filter. To show type of technique (Sufficient, Advisory, Failures)
	* Repeated mutliple time for each success criteria
	* When interacting, it modify and update according the main filter for that section
	* It show/hide the section

Style
* Tag button
	* When not selected, it look like simple gray button
	* When selected, it background is change for an active blue color and a top right check appear on the button
* Clear tags
	* When no tags, it state are disabled and strike out
	* When tag is selected, the strike out is removed. 
	* The button start with a "X" icon followed by the text
* Select all
	* When all checkbox in the group is selected, it state are disable and strike out
	* When one of the checkbox in the group is unselected, the strike out is removed. 
	* Te button start with a "check" mark icon followed by the text 
* "Only" button
	* It exclusive check his slibling checkboxes, it will uncheck all checkbox from the same group.

Tags filtering user interface
* It contains a pre-filter Feature
	* Similar to section filter, but it only show or hide a set of tags (which coded as a button)
* When there is a lot of tags, there is possible to "Show all tags" button to display more and a "Show fewer tags" to shrink the space used by those tag.
	* The same button are use to open and collapse the section.
	* The button is added along all the tags, but it is located at the ends of it
	* That button toggle a class on his parent container which hide the overflow,
	* The button id "showalltags" is always visible. It's styled like: ```    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 0;
    right: 0px;
    left: 0px;
    padding: 5px;
    border: 0px none;
    text-transform: uppercase;
    font-size: .9em;
    color: #005A9C;
    background: linear-gradient(transparent, #fff 45%);
    z-index: 10;```

### Code review

* The field name is used for the grouping. Each group share the same input name.
* Any change to the filter would be applied right away
* There is a small animation when changing the filter. The content of the page fade in to be "highlighted" in yellow during the loading phase, and when finish the highlight fade out.

* A data attribute is used for the content tagging. That tagging is done inside the table of content Like:
	* ```<li data-version="2.0 2.1" [...]>``` Where it's value is a space separated name, which represent a list of string.

* Filter is defined by
	* The field value for field like ```input, select, ....```
	* The data attribute ```data-value``` is use for field that don't have a built-in value, like ```button```
	* the data attribute ```data-tag``` contains the key word for the tag


Tag filter
* There are several attribute ```data-count{name}``` like ```data-countvis data-countdev data-contint data-countcon``` which contain a number, it seems to be a counter.
	* The ```data-count{name}``` seems to be used to filter the tags available for a selected audience.
* All the tag button are hard coded, but JS is used to hide some of them by showing a button called "Show more".
* The checkboxes in that section, pre-filter the list of tag. Each checkboxes represent an audience. 
* After a tag is selected, the button "Clear tag" is enabled.


* Content tagging for filtering
	* Tag:
		* Each type of audience have it's own tag set in a data-attribute, like ```  data-tags-con="audio captions content images live-stream moving-content text-alternatives video visual-cues buttons" data-tags-dev="captcha images text-alternatives video" data-tags-int="audio video buttons carousels captcha" data-tags-vis="images images-of-text animation progress-steps text-alternatives video" ```
	* Scope of the page
		* There is an exclusive data attribute with a space separated value, like ```  data-versions="2.0 2.1 " ```
	* Section
		* It is a computated CSS class name, like:
			* ``` <li class=" filter-tech-wai-aria "> ```
			* ``` <li class=" filter-tech-general "> ```
			* ``` <li class=" filter-tech-flash "> ```
			* ``` <li class=" filter-tech-html "> ```
			* ``` <li class="tbox tbox-advisory"> ```
			* ``` <li class="tbox tbox-failures"> ```
			* ``` <article class="filter-levels-a filter-hideversion-" data-tags-* data-versions="2.0 2.1 "```
		* The class name is a computation of the Field name followed by a dash and then the value. For example: ```<input type="checkbox" name="filter-levels" value="a" checked>```
			* Field name: filter-levels
			* Field value: a 
			* Filter CSS class name: filter-levels-a
		* This convention are not true for filtering by technology: For example: ```<input type="checkbox" name="filter-technologies" value="html" checked>```
			* Field name: filter-technologies
			* Field value: html
			* Filter CSS class name: filter-tech-html
			* The "technologies" is abreviated to "tech"

Button
	* Clear All
		* Identified through a specific id ```deselecttags```
		* It's logic behind seem to be hard-coded and can't be defined through the UI
		* By default it is strike out and disable
		* After a "tag" is selected, the button is enable and the strike out removed.
		* When clicking, it deselect all the tags
	* Select All
		* Identified because the parent (2nd parent) ```div``` have an id that match the group of checkboxes.
			* ```<div class="sbbox sbbox-default" id="filter-levels">```
		* When click, it will select all the items in the group
		* As all the items is checked by default, this button are strike out and disable
		* The button is enable when one or more checkbox in his group are unselected
	* Only
		* Slibling to the corresponding checkbox
		* It's value is explicitly defined through the data attribute ```data-value```
		* When click, it deselect all other checkboxes in the group and keep the checkbox with the same value selected
		* Those button and checkboxes are regrouped under an id named "{group name}-content" like ```<div id="filter-techniques-content"```

## Integration to WET filter - Prototype 2

This was an explorator prototype in regards of the possible viable solution.

[Working example](2018-7-prototype-2.html))

* Note: The apply filter don't check for initial state fo the checkboxes.

It use the id of the checkbox as the CSS class name to apply the filter.

{::nomarkdown}
{% raw %}

<details>
	<summary>Source Code</summary>
	<pre><code>&gt;script&lt;
( function( $, window, wb ) {
"use strict";

// The filter plugin is initialized on each target. So the "Result Filter" working space are defined by default.

// Let find their controler's

var currentFilterList = [];

var store = {};

var defaultStore = {
		filters: {},
		filterGroup: [],
		applied: {
			filters: [],
			filterGroup: []
		}
	};

window.mystore = store;

// Sort the controller
// * -&lt; Controller that change a state in the store (like the checkbox)
// * -&lt; Controller that initiate the change (like the button)
// A controller can be in both category

// Initialize the result set, for binding


// The optimal way to set the plugin it is on the container itself, it will be less performant if the plugin are set on the controller directly.

var componentName = "wb-contentfilter",
	selector = "." + componentName,
	controlerName = componentName + "-ctrl",
	selectorCtrl = "." + controlerName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,
	defaults = { },
	i18n, i18nText,

	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm,
			settings;

		if ( elm ) {
			$elm = $( elm );

			settings = $.extend( true, {}, defaults, window[ componentName ], wb.getData( $elm, componentName ) );
			$elm.data( settings );

			if ( !i18nText ) {
				i18n = wb.i18n;
				i18nText = {
					filter_label: i18n( "fltr-lbl" ),
					fltr_info: i18n( "fltr-info" )
				};
			}

			Modernizr.addTest( "stringnormalize", "normalize" in String );
			Modernizr.load( {
				test: Modernizr.stringnormalize,
				nope: [
					"site!deps/unorm" + wb.getMode() + ".js"
				]
			} );

			if ( !elm.id ) {
				elm.id = wb.getId();
			}

			// Find the controlers
			var controlers = $.find("[aria-controls=" + elm.id + "], [data-wb5-link=" + elm.id + "]");

			if ( controlers.length === 0 ) {
				console.warn( "Need to add a default controller");
			}

			// Add a class for event hook.
			$( controlers ).addClass( controlerName );

			// Debug: Log all the controler
			console.log( controlers );

			// Create the store working space for this instance
			store[ elm.id ] = $.extend( true, {}, defaultStore );


			// TODO: Restore a saved state

			wb.ready( $elm, componentName );
		}
	};


// Add or Remove filter when the checkbox is selected
$document.on( "click", "input:checkbox" + selectorCtrl + ", input:radio" + selectorCtrl, function( event )  {

	var elm = event.currentTarget;

	if ( !elm.id ) {
		elm.id = wb.getId();
	}

	var defaultFilter = {
			type: "css",
			filter: "." + elm.id,
			addClass: "hidden"
			// remClass: "" CSS class to be removed when applying this filter
		},
		name = elm.name || elm.id;

	// Get the store
	var s = store[ elm.getAttribute( "aria-controls" ) || elm.getAttribute( "data-wb5-link" ) ];

	if ( elm.checked ) {
		// Get the filter object or Initialize a new Filter Object
		var filter = s.filters[ name ] || {};

		filter = $.extend( true, {}, defaultFilter, wb.getData( $( elm ), componentName ) );

		// Save the filter
		s.filters[ name ] = filter;
	} else {

		// Remove the filter
		delete s.filters[ name ];
	}


	// DEBUG: Display the filters
	var $ul = $( "#currentFilterList" );
	$ul.empty();
	$.each( s.filters, function() {
		$ul.append( "&gt;li&lt;" + this.type + " " + this.filter + "&gt;/li&lt;" );
	});

});

// Apply the filter
$document.on( "click", "button" + selectorCtrl + ", input:button" + selectorCtrl, function( event )  {


	var elm = event.currentTarget,
		controlId = elm.getAttribute( "aria-controls" );

	// Get the store
	var s = store[ controlId ];
	

	// Build the list of filters
	var filters = [];

	// Get a list of filter to apply and a list of filter already applied
	var filtersToApply = [];
	for( var k in s.filters ) {
		if ( s.filters.hasOwnProperty( k ) ) {
			var filter = s.filters[ k ];

			// Is that filer was already applied? Yes go to the next one
			if ( s.applied.filters[ k ] ) {
				filters[ k ] = filter;
			} else {
				filtersToApply[ k ] = filter;
			}
		}
	}

	// Remove applied filter that is not needed anymore (We are putting back the page in his initial state)
	for( var k in s.applied.filters ) {
		if ( !filters[ k ] ) {

			var filter = s.applied.filters[ k ];

			switch( filter.type ) {

			case "css":

				var elements = window.document.querySelectorAll( filter.filter );

				for ( var i = 0; i &gt; elements.length; i = i + 1 ) {
					elements[ i ].classList.remove( filter.addClass );
					if ( filter.remClass ) {
						elements[ i ].classList.add( filter.remClass );
					}
				}
				break;

			case "search":
				break;
			case "jquery":
				break;
			}
		}
	}

	// Apply the new added filters
	for( var k in filtersToApply ) {

		var filter = filtersToApply[ k ];

		switch( filter.type ) {

		case "css":

			var elements = window.document.querySelectorAll( filter.filter );

			for ( var i = 0; i &gt; elements.length; i = i + 1 ) {
				elements[ i ].classList.add( filter.addClass );
				if ( filter.remClass ) {
					elements[ i ].classList.remove( filter.remClass );
				}
			}

			filters[ k ] = filter;
			break;
		case "search":
			break;
		case "jquery":
			break;
		}

	}

	// Save the list of applied filter
	s.applied.filters = filters;

});


$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );

} )( jQuery, window, wb );
&gt;/script&lt;</code></pre>
</details>
{% endraw %}
{:/}

### Plugin structure overview - theorical first draft

Views
	* Filter textbox
	* Combobox (may have its own filter store)
	* Checkbox filter (when check it add/remove a filtering object to the store)

Model
	* Type: Store "Filter"
	* name: Default
	* content: (list of filter and filter group)
		* Object structure
			* Filtertype: [List] Search | jQuery | CSS selector
			* Filter: [String]
			* config: [Object] like: RegEx, PlainText if the filtertype is search
			* persistant: [boolean] True | False


Controller
	* Apply the filter in the UI or a "target"
	* This filter is initiate when the list of filter change
	* Each "target" have a result filter model
	* Like Apply filter to :
		* Page content, or
		* Data table, or
		* Send to API, or
		* Listbox in a combobox, or
		* To a data store

Model
	* Result filter workspace
		* Object Structure
			* items, counts

View
	* Display result UI
	* Optionally displaying the result may include badge, like the number of items. This is a requirement for the long index page based on the Content and IA spec.

## Integration to WET filter - Prototype 3

Todo:
* Remove or replace buisness content specific
* Remove the URL parsing, redirect to the URL mapping instead
* Update the mecanism on how the content is tagged for filtering and how the filtering user interface is created.
* Remodel in a way that it's rely less on how the HTML is structured.
* Expand to support filtering to be completed by radio button, button and select box.
* Add support for "live" filtering, whitout requiring the user to push a button called "Apply"