---
published: true
layout: default-theme-wet-boew-en
title: 2018-7 - Checkbox filtering
description: Developper notes on adding a checkbox filtering capability in WET
modified: 2018-08-10
---

Developper notes on adding a checkbox filtering capability in WET


## Prototype

* Prototype 1 - [Conceptual prototype - high/medium fidelity](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/standards-normes/en/6-use-open-standards-solutions.html)
* Prototype 2 - [Solution exploratory prototype - low fidelity](2018-7-prototype-2.html)
* Prototype 3 - [Initial work of integrating with WET4 - medium fidelity](2018-7-prototype-3.html)
	* Meet only the basic and minimal user requirement
	* Designed to be extendable to support the other user requirement
	* For future interoperability, the plugin work by focusing on how the content is designed/created and not on how the filter UI is designed. It's all about how the content is tagged and how the content is styled/organized. It assumed the default state of the filter UI represent the default state of the content.
	* See all the notes in section bellow
* Prototype 4 - Cleaner version of prototype 3 ready for WET4 plugin - high fidelity (see the source code in section bellow)
* Edge prototype - Extension of prototype 3 to support tag grouping filter and asynchrome filtering. (see the source code in section bellow)

## Requirement

Leverage CSS classes and checkboxes to apply content filtering. A feature like the filter plugin but without keyword filtering through a text field.

* Show and hide block of content to the user by using checkboxes.
* Integrate the plugin in WET and make it available on Canada.ca

Progressive goal: Support the feature provided by the prototype 1 and ensure the plugin is not directly tie or bind to the business content of the page.


### User requirement

* Apply boolean content filter from a UI
* Apply content filter by using URL query parameter
* Remind the last filter state, if confirmed by the user
* Support exclusive filter, which fully change the page structure
* Checkbox that trigger the state on/off of inner checkboxes


### Behaviour recommendation (as 2018-08-13)

This following statements is to define the interaction pattern for the checkbox filtering. Those statements are defined by the analysis bellow and as per other factor such as best practice, standards, usability, accessibility principle.

Checkbox state
* a "check" checkbox should show content, if uncheck the associated should be hidden.

User interface
* Filter interface should be located prior the main content impacted by the filtering. A the minimal a link should be provided before.
* Exclusive filter appear before filtering multiple sub-section.
* Table of content, if present, reflect the page structure as displayed.
* If the filtering interface are inside a popup, such a dialog, then when opening it should show the current state of the filtering to avoid confusion with the user. Especially when time has lapsed between closing and re-opening the popup.

Applying filter
* **Immediatly when the checkbox is check:** The checkbox should contains a reference to the a container where the filter is applied. Like by using ```aria-controls``` attributes. That attribute allow AT to navigate directly to the controlled elements.
* **Trigger by an Apply button click:** Apply the filter set by the filtering controler. This button must contains an attribute ```aria-controls``` to create a link to the main content that has been filtered.

Filter controler
* It should'n be limited to checkbox
* Should be extendable to filter by:
	* using a dropdown ```<select>```
	* using radio ```<input type="radio">```
	* using a toggle button ```<button>``` or ```<input type="button">```
* The attribute "value" define the filter CSS class name key

Grouping filter controler
* It's defined by the name attribute.
* Controls that share the same name attribute are know to be in the same group.
* Multiple filter in the same group are applied like an "And" operator
* Filter applied between group are applied like an "Or" operator

Content design to support exclusive filter
* It is up to the author to design the content being compatible with exclusive filter
* A page can have more than one exclusive filter.
* Multiple exclusive filter might collide.
* Content displayed after each exclusive state and each collision are applied need to be conform to WCAG 2.0 Level AA. 
* Exclusive filter impact the page structure, a quick review is to evaluate if the page structure don't skip the displayed heading sequence.
* It's show the item where the exclusive filter is applied, it show all children, it show parent heading and hide the sibling.
* Exclusive filter in the same group are treated like "OR" operator.
* Exclusive filter are applied first then regular filter.

Filter behaviour
* Exclusive filter "on"
	* Show the targeted elements
	* Show children of the target elements
	* Show only the parents header elements
	* Hide sibling elements.
* Exclusive filter "off"
	* Display content as if there were no filter applied
* Regular filter "on"
	* Show the target element
	* Show children.
* Regular filter "off"
	* Hide the target element
* Show heading on hidden section/pieces.
	* heading in hidden section could contain a CSS class name like ```show-on-filter-out``` to force displaying the heading. 
	* Behaviour: 
		* Opacity is set to ```50%``` which fade out the font color (set on the container)
		* Font size are forced to be the same as the paragraph size, so ```1em``` (for all children ```*```)
		* Font weight is forced to normal (for all children ```*```)
		* Margin are set to none on the container and to any inner heading (```h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6```)
	* Subsection hidden in a hiden section wont be displayed.

### Technical behaviour

How to identify section controlled by a filter behaviour
* The page can have multiple sub-section that is controled by the same filter control
* Need a quick way to retreive all those section. there is two options:
	* Identifying the section by using a CSS class
	* Identifying the section by using a data attribute
		* This solution look very clean
		* Don't conflic with existing CSS class name for styling
		* Don't enforce the web author to use a naming convention to avoid collision with CSS
* Let the default section to be the "main" elements? Do we simply apply to the overall pages and force the user to define the main content area where the filtering is applied?

How to make the difference between "Exclusive filter" and "Regular filter"
* Use the attribute ```data-wb5-tags``` for "Regular filter"
* Use the attribute ```data-wb5-etags``` for "Exclusive filter"
* Tags used in "etags" or in "tags" could colide.

How to define the initial state of the content and checkbox
* Regular filter:
	* **Check** 
		* Default means the content is visible
		* If it means the content is hidden, then the label must be explicit.
	* **Uncheck** 
		* Default means the content is hidden
		* If it means the content is visible, then the label must be explicit.
* Exclusive filter
	* **Check** means the content represent exclusivelly that tagged content.
	* **Uncheck** means it is ignored.
* If "check", it's initial state are know to be "on" ```stateon = "show"```
* If "uncheck", it's initial state are know to be "off" ```stateoff = "hide"```
* The content tagging define if the filter are exclusive or not

Configuring filter through the URL parameter
* Seek for an integration with the URL mapping plugin.

Persistant state
* Might need to be cook in as their is no generalized plugin to save the plugin sate.

Filter control grouping
* The ```name``` attribute will be use to identify grouping
* Apply button would collect the filters controller state from the form which own the actual button.

How to do negative filter
* An exclusive filter where content should be filtered out?
	* Do we check for presence of the "value" in the normal tagging, and then they will be removed?
	* Do we create a new data attribute?
	* Do we exclude that feature for now? Is it needed?
	* Do we use a prefix, like an exclamation mark "!"

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
	<pre><code>&lt;script&gt;
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
// * -&gt; Controller that change a state in the store (like the checkbox)
// * -&gt; Controller that initiate the change (like the button)
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
&lt;/script&gt;</code></pre>
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

[Working example](2018-7-prototype-3.html)

Todo was:
* Reuse existing checkbox filtering code (prototype 1)
* Remove or replace buisness content specific
* Remove the URL parsing, redirect to the URL mapping instead
* Update the mecanism on how the content is tagged for filtering and how the filtering user interface is created.
* Remodel in a way that it's rely less on how the HTML is structured.
* Expand to support filtering to be completed by radio button, button and select box.
* Add support for "live" filtering, whitout requiring the user to push a button called "Apply"
* Use data-attribute instead of class name
* Let exclusive filters be defined by how the content was tagged and not how the controller is implemented.


Findings
* Didn't re-use prototype 1 code
	* Contains multiple module
		* Checkbox grouping check/uncheck
		* Filter set by URL query
		* Save/Restore Filter
	* Hard link between the checkbox id and the CSS class to apply filtering
	* To not leverage the ```value``` attribute on checkbox
	* To not leverage the ```checked``` state of the checkbox. just if got clicked
	* All check vs all uncheck are expressing the same state equivalent to all check.
	* Current checkbox state do not represent current state of the filtered page. Because if require the user to apply the filter.
	* The checkbox filter are in a popup. So:
		* There is a high risk of an user can assume the checkbox state represent the current filtered state of the page
		* That is an issue if the checkbox state has changed but not applied, then the overlay is closed then re-opened.
	* Cannot reset to the default checked states.
	* Exclusive filter behaviours is mixed and unclear by reviewing the code of how it is applied.
* Live filtering work well
* Exclusive filter are defined in the content.
* Not filter are defined in the content
* Asterik is used to define an exclusive filter
* Exclamation mark is used to defined a "not" filter.
* The initial filtered state of the page is defined by the web author.
* Left for next prototype:
	* **Filter grouping:** A mecanism will need to be build in to allow that. See use case where there is checkboxes and it is also posible to only select one items. The field name will be use for grouping.
	* **Button "Apply filter":** Applying filter async require to scan all the input field and build a filter query
	* **Filter through query string:** Require to update the state of related input field
	* **Save filter state:** Require to update the state of related input field.
	* **Develop a local filter store:** This is to enable applying async filter, query filter and saving filter
	* **Filter exclusive:** Allow to use a "Only" button where exclusively select one filter in the group
	* **Filter reverse:** Use the exclamation mark to reverse the default check state of the input.
* The author can let some pieces force display when the parent container is hidden. 
	* Styled : Opacity set to 50% and font-size forced to be 1em.
* Exclusive filter only hide the sibling.
* Exclusive not filter are not supported.
* A filter tag applied will show the section. [ If checked, it means it is displayed ]
* A filter tag removed will hide the section. [ If unchecked, it means it is hidden and the proper CSS class name is used in the content.]


### How it works

On page load: the content must be in sync with the default state of the filtering UI.

Content (prep-work)
* Content are tagged with the data attribute ```data-wb5-tags```
* The content of ```data-wb5-tags``` is a set of unique space delimited tokens
* The filtering behaviour is applied on how the content is tagged
* A block of content can be tagged "not tag". So it will desapear when that tag is not present.
* The not tag is expressed by prefixing the tag with an exclamation mark like: "!guide"
* An exclusive tag is identify by an asterix prefix like "*guide"
* An exclusive tag hide sibling*
* It is up to the web author to manage and organise how the content is tagged and to ensure there is no conflict.

Filtering UI
* The filtering UI are unaware of the current page state. So the default UI state must be put in sync by the web author when creating the page.
* The filtering UI apply or remove filtering tag.
* The "value" of the input is used to toggle the state of the "filtered by" tag list. 
* A checked checkbox have the "on" state, which means the content is visible. The tag are not present in the filtered by tag list.
* An unchecked checkbox have the "off" state, which means the content is hidden. The tag is added to the filtered by tag list.

Behaviour
* Assume the default state of the content match the default state of the filtering UI
* State **off:** The content is hidden, the CSS class ```wb-fltr-out``` is added to tagged content
* State **on:** The content is visible, the CSS class ```wb-fltr-out``` is removed to tagged content
* State **off - Not tag:** The content is visible, the CSS class ```wb-fltr-out``` is removed to tagged content
* State **on - Not tag:** The content is hidden, the CSS class ```wb-fltr-out``` is added to tagged content
* State **on - Exclusive tag:** The content is visible and untagged exclusive sibling are hidden
* State **off - Exclusive tag:** The content is visible and sibling too, like when the content is not tagged
* State **on - Exclusive not tag:** Not supported, use regular tagging to emulate a similar behaviour.
* State **off - Exclusive not tag:** Not supprted.

Accessibilty
* Each different state that is reproducible by doing all filtering combinaison must be tested. Especially when:
	* Filter can applied across other filterable section with different tag.
	* Filterable section contains heading
	* Exclusive tagging

Usability
* Web author can add the CSS class ```wb-fltr-fade``` to fade a persisting header of an hidden section. Like the when the "checklist" section are hidden in the prototype.



## Integration to WET filter - Prototype 4


### Source code

#### HTML

The filterable content need to be an container and the filter plugin is applied to that container. Like prototype 3.

The following will be the filterable UI. See the use of the attribute ```aria-controls```. This plugin only support when the attribute ```aria-controls``` only contains one id.


{::nomarkdown}
{% raw %}
<pre><code>&lt;h3&gt;Show/Hide content details&lt;/h3&gt;
&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-cd" value="content-details" /&gt; &lt;label for="test-cd"&gt;Content Details&lt;/label&gt;
&lt;br /&gt;

&lt;p class="text-muted"&gt;Not checked by default, and the associate block of content is tagged by default with the CSS &lt;code&gt;wb-fltr-out2&lt;/code&gt;&lt;/p&gt;

&lt;h3&gt;Table of content&lt;/h3&gt;


&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-chkFilter2" value="sintro" checked /&gt; &lt;label for="test-chkFilter2"&gt;Standard intro&lt;/label&gt;
&lt;br /&gt;

&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-chkFilter3" value="guidelines" checked /&gt; &lt;label for="test-chkFilter3"&gt;Guidlines&lt;/label&gt;
&lt;br /&gt;

&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-chkFilter4" value="related" checked /&gt; &lt;label for="test-chkFilter4"&gt;Related guidelines&lt;/label&gt;
&lt;br /&gt;


&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-chkFilter" value="guideline" checked /&gt; &lt;label for="test-chkFilter"&gt;6.1 Leverage open standards and embrace leading practices, including use of open source software where appropriate
&lt;/label&gt;
&lt;br /&gt;

&lt;h3&gt;Sub section filtering for section 6.1&lt;/h3&gt;
&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-8" value="intro" checked /&gt; &lt;label for="test-8"&gt;introduction&lt;/label&gt;
&lt;br /&gt;

&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-3" value="checklist" checked /&gt; &lt;label for="test-3"&gt;checklist&lt;/label&gt; &lt;span class="text-muted"&gt;(The section heading remain visible because they are marked at such)&lt;/span&gt;
&lt;br /&gt;

&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-4" value="guides" checked /&gt; &lt;label for="test-4"&gt;guides&lt;/label&gt;
&lt;br /&gt;

&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-5" value="solutions" checked /&gt; &lt;label for="test-5"&gt;solutions&lt;/label&gt;
&lt;br /&gt;

&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-6" value="similar" checked /&gt; &lt;label for="test-6"&gt;similar&lt;/label&gt;
&lt;br /&gt;

&lt;p class="text-muted"&gt;Check means it is displayed, uncheck means the content are hidden.&lt;/p&gt;

&lt;h3&gt;Exclusive filter&lt;/h3&gt;
&lt;input aria-controls="fiterableContentContainer" type="checkbox" id="test-7" value="architectural" /&gt; &lt;label for="test-7"&gt;Build it rights&lt;/label&gt;
&lt;br /&gt;

&lt;p class="text-muted"&gt;The exclusive filter that is toggled is defined by how the tagging is done. An exclusive tag will be prefixed with an asterik &lt;code&gt;*&lt;/code&gt;. Exclusive filter will only hide the sibling.&lt;/p&gt;</code></pre>
{% endraw %}
{:/}

#### CSS

Update the filter.js CSS to accomodate this new type of filtering.

{::nomarkdown}
{% raw %}
<pre><code>.wb-fltr-exclusive > *:not( .wb-fltr-in ) {
	display: none !important;
}

.wb-fltr-out2 {
	opacity: .5;
}
.wb-fltr-out2 .wb-fltr-fade {
	font-size: 1em;
}
.wb-fltr-out2 :not( .wb-fltr-fade ) {
	display: none !important;
}</code></pre>
{% endraw %}
{:/}

#### Javascript

{::nomarkdown}
{% raw %}
<pre><code>// Web Experience Toolkit - WET-BOEW
// Author: @duboisp
( function( $, window, document, wb ) {
"use strict";

var componentName = "wb-contentfilter",
	selector = "." + componentName,
	controlerName = componentName + "-ctrl",
	selectorCtrl = "." + controlerName,
	initEvent = "wb-init" + selector,
	$document = wb.doc,

	init = function( event ) {
		var elm = wb.init( event, componentName, selector ),
			$elm;

		if ( elm ) {
			$elm = $( elm );

			// Find the controlers, this element must have an id. It assume the controller only control one content-filtering section
			var controlers = $.find("[aria-controls=" + elm.id + "]");

			if ( controlers.length === 0 ) {
				console.warn( "Need to add a default controller");
			}

			// Add a class for event binding.
			$( controlers ).addClass( controlerName );

			wb.ready( $elm, componentName );
		}
	};

// Add or Remove filter when the checkbox is selected
$document.on( "click", "input:checkbox" + selectorCtrl, function( event )  {

	var elm = event.currentTarget,
		filterTag = elm.value,
		state = !!elm.checked,
		controlsId = elm.getAttribute( "aria-controls" ),
		relatedPotential = document.querySelectorAll( "#" + controlsId + " [data-wb5-tags*=" + filterTag + "]" ),
		related = [],
		relatedExclusive = [],
		relatedNot = [],
		relatedExlcusiveNot = [],
		relatedExclusiveRem = [],
		i, i_len, j, j_len,
		currentElm, tagList, tag, lastIndex;

	// Filter down the ones that matched the initial DOM search
	i_len = relatedPotential.length;
	for( i = 0; i < i_len; i = i + 1 ) {
		currentElm = relatedPotential[ i ];
		
		tagList = currentElm.dataset.wb5Tags.split( " " );

		j_len = tagList.length;
		for( j = 0; j < j_len; j = j + 1 ) {

			tag = tagList[ j ];
			lastIndex = tag.lastIndexOf( filterTag );

			// Go next, in the case the elements have multiple tags
			if ( lastIndex === -1 ) {
				continue;
			}

			// Validate the type of filter
			if ( ( state && filterTag === tag ) || ( !state && "!" + filterTag === tag ) ) {
				related.push( currentElm );
				break;
			} else if ( ( !state && filterTag === tag ) || ( state && "!" + filterTag === tag ) ) {
				relatedNot.push( currentElm );
				break;	
			} else if ( state && "*" + filterTag === tag ) {
				relatedExclusive.push( currentElm );
				break;
			} else if ( !state && "*" + filterTag === tag ) {
				relatedExclusiveRem.push( currentElm );
				break;
			}
		}
	}

	// Apply exclusive filter
	// Hide each sibling that is not scoped in the related Exclusive
	i_len = relatedExclusive.length;
	for( i = 0; i < i_len; i = i + 1 ) {
		currentElm = relatedExclusive[ i ];
		currentElm.classList.add( "wb-fltr-in" );
		currentElm.parentNode.classList.add( "wb-fltr-exclusive" );
	}

	// Remove Exclusive filter
	i_len = relatedExclusiveRem.length;
	for( i = 0; i < i_len; i = i + 1 ) {
		currentElm = relatedExclusiveRem[ i ];
		currentElm.classList.remove( "wb-fltr-in" );

		// Remove the parent CSS selector only if this was the last one
		if( !currentElm.parentNode.getElementsByClassName( "wb-fltr-in" ).length ) {
			$( currentElm.parentNode ).removeClass( "wb-fltr-exclusive" );
		}
	}

	// Apply filter out
	$( relatedNot ).addClass( "wb-fltr-out2" );

	// Apply filter in
	$( related ).removeClass( "wb-fltr-out2" );
});


$document.on( "timerpoke.wb " + initEvent, selector, init );

wb.add( selector );

} )( jQuery, window, document, wb );
</code></pre>
{% endraw %}
{:/}


## Intergration to WET filter - Edge prototype

Same as prototype 3, but initiatialized the work to add an "Apply button" and groupping support

{::nomarkdown}
{% raw %}
<details>
	<summary>HTML - UI with the apply button</summary>
	<pre><code>&lt;form&gt;

&lt;!-- content-details --&gt;
	&lt;h2&gt;Development Stage&lt;/h2&gt;

	&lt;ul&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-1" value="alpha" /&gt; &lt;label for="finput-1"&gt;Alpha&lt;/label&gt;&lt;/li&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-2" value="beta" /&gt; &lt;label for="finput-2"&gt;Beta&lt;/label&gt;&lt;/li&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-3" value="live" /&gt; &lt;label for="finput-3"&gt;Live&lt;/label&gt;&lt;/li&gt;
	&lt;/ul&gt;


	&lt;h2&gt;Section Type&lt;/h2&gt;

	&lt;ul&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-4" value="sintro" checked /&gt; &lt;label for="finput-4"&gt;Introduction (for a standard)&lt;/label&gt;&lt;/li&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-5" value="guidelines" checked /&gt; &lt;label for="finput-5"&gt;Guidelines (list for a standard)&lt;/label&gt;&lt;/li&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-6" value="related" checked /&gt; &lt;label for="finput-6"&gt;Related guidelines (list ofr a standard)&lt;/label&gt;&lt;/li&gt;

		&lt;li&gt;&lt;input type="checkbox" id="finput-7" /&gt; &lt;label for="finput-7"&gt;Guideline (for a standard)&lt;/label&gt;

			&lt;ul&gt;
				&lt;li&gt;&lt;input type="checkbox" id="finput-8" value="intro" checked /&gt; &lt;label for="finput-8"&gt;Introduction (for a guideline)&lt;/label&gt;&lt;/li&gt;
				&lt;li&gt;&lt;input type="checkbox" id="finput-9" value="checklist" checked /&gt; &lt;label for="finput-9"&gt;Checklist (for a guideline)&lt;/label&gt;&lt;/li&gt;
				&lt;li&gt;&lt;input type="checkbox" id="finput-10" value="guides" checked /&gt; &lt;label for="finput-10"&gt;Implementation guides (for a guideline)&lt;/label&gt;&lt;/li&gt;
				&lt;li&gt;&lt;input type="checkbox" id="finput-11" value="solutions" checked /&gt; &lt;label for="finput-11"&gt;Reusable solutions (for a guideline)&lt;/label&gt;&lt;/li&gt;
				&lt;li&gt;&lt;input type="checkbox" id="finput-12" value="similar" checked /&gt; &lt;label for="finput-12"&gt;Similar resoures (for a guideline)&lt;/label&gt;&lt;/li&gt;
			&lt;/ul&gt;

		&lt;/li&gt;
	&lt;/ul&gt;

	&lt;h2&gt;Exclusive filters&lt;/h2&gt;

	&lt;ul&gt;
		&lt;li&gt;&lt;input type="checkbox" id="finput-13" value="architectural" /&gt; &lt;label for="finput-13"&gt;Build it rights&lt;/label&gt;&lt;/li&gt;
	&lt;/ul&gt;

	&lt;input type="button"  aria-controls="testID" value="Apply filters" /&gt;
&lt;/form&gt;</code></pre>
</details>

<details>
	<summary>Javascript - Source code</summary>
	<pre><code>( function( $, window, document, wb ) {
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


var store2 = {
	related: [],
	relatedExclusive: [],
	relatedNot: [],
	relatedExclusiveRem: []
}

// What happen when there is multiple filter under the same field name
//	- Group them together
//	- Apply any filter rule
// OR
//	- Get all the value for the group for each input state
//	- Build the filter
//
// Like filter with the same named group are "AND" operator
// Question: Do we require the field to have a name in order to be in scope????? That is necessary for a form submit. OR no name means no groupping???




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


			if ( !elm.id ) {
				elm.id = wb.getId();
			}


			// Find the controlers
			//var controlers = $.find("[aria-controls=" + elm.id + "], [data-wb5-link=" + elm.id + "]");
			var controlers = $.find("[aria-controls=" + elm.id + "]");

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

function GetFilterValue( elm ) {
	return {
		fTag: elm.value,
		state: !!( elm.checked || elm.hasAttributes( "data-wb5-checked") )
	}
}

$document.on( "click", "input:checkbox.ctrlFilter" + "" + "", function( event )  {

	var elm = event.currentTarget,
		filterTag = elm.value,
		state = !!elm.checked,
		elmGroupName = elm.name,
		filters = [];

	// Retreive all filter in the same group
	if ( elmGroupName ) {
		var inputs = document.querySelectorAll( "[name=" + elmGroupName + "]" );

		for( var i = 0; i < inputs.length; i++ ) {
			filters.push( GetFilterValue( inputs[ i ] ) )
		}

	} else {
		filters.push( GetFilterValue( elm ) );
	}

	applyFilter( filterTag, state)
});



/*

		filters = [
			[
tag1			{ fTag: "tag1", state: true },   // tag1 AND tag2 AND tag3
tag2			{ fTag: "tag2", state: false },  // tag1 AND tag2 AND tag3
tag3			{ fTag: "tag3", state: true }    // tag1 AND tag2 AND tag3
			],
			[
tag4			{ fTag: "tag4", state: true }
			]	
		]


Here the boolean operation
( tag1 AND tag2 AND tag3 ) OR tag4


If "tag1" value would be something like "tag1 tag5" then

( ( tag1 OR tag5) AND tag2 AND tag3 ) OR tag4

If "tag1" value would be something like "tag1&tag5" then

( ( tag1 AND tag5 ) AND tag2 AND tag3 ) OR tag4


------ Or a structure like

filters = {
	name: [
		{ Filter object },
		{ Filter object }
	],
	fieldID: [
		{ Filter object }
	],
	GeneratedID: [
		{ Filter object }
	]
}

// GeneratedID are not state that can be saved.
// A structure like that will allow to "overwrite" existing filters.


*/



// Build list of filters, in the store
// Then apply the filters


// Is this filter are in "on" or "off" state?
// If in "on" state
// 		-> Normal: It will show the section
//		-> Not: It will hide the section
// If in "off" state
//		-> Normal: It will hide the section
//		-> Not: It will show the section
//
// If in Exclusive "on" state
//		-> Normal: Will hide all the sibling and show only itseft
// If in Exclusive "off" state
//		-> Normal: Will show all the sibling and show itseft
function applyFilter( filterTag, state ) {

	if ( ! filterTag ) {
		return;
	}

	var currentFilter = {};
	// Retreive current filter and only apply new filter

	// Get potential related elements
	var relatedPotential = document.querySelectorAll( "[data-wb5-tags*=" + filterTag + "]" );
	var related = [],
		relatedExclusive = [],
		relatedNot = [],
		relatedExclusiveRem = [];

	// Filter down the ones that match
	for( var i = 0; i < relatedPotential.length; i++ ) {
		var currentElm = relatedPotential[ i ];

		var dtTags = currentElm.dataset.wb5Tags,
			tagList = dtTags.split( " " );

		for( var j = 0; j < tagList.length; j++ ) {

			var tag = tagList[ j ],
				lastIndex = tag.lastIndexOf( filterTag );

			if ( lastIndex === -1 ) {
				continue;
			}

			// Validate the type of filter
			if ( filterTag === tag ) {

				// Related, regular filtering
				if ( state ) {
					related.push( currentElm );
				} else {
					relatedNot.push( currentElm );
				}
				break;
			} else if ( "*" + filterTag === tag ) {

				// Exclusive tag
				if ( state ) {
					relatedExclusive.push( currentElm );
				} else {
					relatedExclusiveRem.push( currentElm );
				}
				break;
			} else if ( "!" + filterTag === tag ) {

				// Not tag
				if ( state ) {
					relatedNot.push( currentElm );
				} else {
					related.push( currentElm );
				}
				break;
			}
		}
	}

	// Order of applying filter
	//
	// 1. Apply Exclusive filter
	// 2. Apply Exclusive Not filter
	// 3. Apply filter
	// 4. Apply Not filter

	// For exclusive, Add a tag to the element, then add a CSS to the parent which will hide all the children except the one that match the subCSS class.

	// Add exclusive filter
	for( var i = 0; i < relatedExclusive.length; i ++ ) {
		var currentElm = relatedExclusive[ i ];

		// Hide each sibling that is not scoped in the related Exclusive
		$( currentElm ).addClass( "wb-fltr-in" );

		// Add the group CSS class
		currentElm.parentNode.classList.add( "wb-fltr-exclusive" );
	}

	// Remove Exclusive filter
	for( var i = 0; i < relatedExclusiveRem.length; i ++ ) {
		var currentElm = relatedExclusiveRem[ i ];

		// Remove it visible protected state
		$( currentElm ).removeClass( "wb-fltr-in" );

		// Remove the parent CSS selector only if this was the last children
		if( !currentElm.parentNode.getElementsByClassName( "wb-fltr-in" ).length ) {
			$( currentElm.parentNode ).removeClass( "wb-fltr-exclusive" );
		}
	}

	// Filter out
	$( relatedNot ).addClass( "wb-fltr-out2" );

	// Filter in
	$( related ).removeClass( "wb-fltr-out2" );

};

/*
// Add or Remove filter when the checkbox is selected
$document.on( "click", "input:checkbox" + selectorCtrl + ", input:radio" + selectorCtrl, function( event )  {

	// DEBUG: Display the filters
	var $ul = $( "#currentFilterList" );
	$ul.empty();
	$.each( s.filters, function() {
		$ul.append( "<li>" + this.type + " " + this.filter + "</li>" );
	});

});
*/

// Apply the filter
$document.on( "click", "button" + selectorCtrl + ", input:button" + selectorCtrl, function( event )  {


	var elm = event.currentTarget,
		controlId = elm.getAttribute( "aria-controls" );

	// Get the store
	var s = store[ controlId ];
	
	// Get the inputs
	var inputs = elm.form.elements;

	// Build the filter for each inputs
	for( var i = 0; i < inputs.length; i++ ) {

		var input = inputs[ i ],
			filterTag = input.value,
			//state = !!( input.checked || input.hasAttributes( "data-wb5-checked") );
			state = !!input.checked;

			// Current State depend of the input checked state, but if the value is negative "![tag]" Then the state are reversed.

		if ( input !== elm ) {
			applyFilter( filterTag, state );
		}

	}

	// Apply the filter
	// applyFilter( store, controlId );


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

				for ( var i = 0; i < elements.length; i = i + 1 ) {
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

			for ( var i = 0; i < elements.length; i = i + 1 ) {
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

} )( jQuery, window, document, wb );</code></pre>
</details>
{% endraw %}
{:/}

