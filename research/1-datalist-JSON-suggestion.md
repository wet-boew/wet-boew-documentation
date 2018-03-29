---
published: true
layout: default-theme-wet-boew-en
title: 1 - Datalist JSON suggestion - Research and finding - Web Experience Toolkit (WET) documentation
description: Design decision followed by WET.
modified: 2018-03-29
---

## Purpose

Customizable autocomple feature.

## Requirements

* Load suggestion / autofill value:
	* From HTML source
	* From CSV documents
	* From JSON documents
* Limit number of displayed items
* Allow customization of the suggested items.
* Follow design pattern of a datalist for accessiblity.
* Have uniform and consistant behavior from various browser. Like IE11, Chrome, Firefox, Edge
* Support grouping of items, like ```<optgroup>``` do for ```<select>```
* Be able to configure where the filtering is applied: startWith, word, any
* Be able to configure how the filtering is applied: Exact Match, SoundEx, Levenshtein distance.
* Be able to highlight the typed character found within the displayed result. Like putting it in bold so the user can easilly make the liaison between the typed character and the suggested results.
* Having a persistant results, like an "others" options.

## Similar tools

Here a list of similar tools that was found on a February 2018 research

* [jQuery accessible autocomplete list (with some ARIA)](https://a11y.nicolas-hoffmann.net/autocomplete-list/)
* mfranzke - datalist-polyfill
	* JSFiddle - [https://jsfiddle.net/mfranzke/s6awjfze/](https://jsfiddle.net/mfranzke/s6awjfze/)
	* Github - https://github.com/mfranzke/datalist-polyfill
* [Accessible autocomplete](https://haltersweb.github.io/Accessibility/autocomplete.html)
* [Web Search Engine with Autocorrect and Autofill feature](https://github.com/Pavan18/Web-Search-Engine-with-Autocorrect-and-Autofill-feature)
* [Android Autofill Framework](https://github.com/googlesamples/android-AutofillFramework)
* [React autosuggest](https://github.com/moroshko/react-autosuggest)
* [Datalist JSON suggestion](https://github.com/wet-boew/GCWeb/tree/master/src/plugins/suggest)

### Website using custom datalist
* [http://wet-boew.github.io/themes-dist/GCWeb/demos/suggest/suggest-en.html](http://wet-boew.github.io/themes-dist/GCWeb/demos/suggest/suggest-en.html)
* [http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra](http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra) - Reverse engenering suggestion for when typing in the field "Terme à cherche"
* [https://www.momondo.ca/?redirect=true](https://www.momondo.ca/?redirect=true)
	* Try to choose a flight, the dropdown item are customized
* National Help Desk: http://srmis-sigdi-iagent.prv

### Feature request description

* The autofill needs to have a text field where users can type, and the options related to what they typed appear below. 
* The autofill should have the option “filter as you type” 
    * Filter as you type: Will populate a list of relevant task containing the characters in series as user types; the list updates for each new character added
    * As the user types, it does not need to be the first word in the task it can be any word within the task that will pick up the options.
* When the user is typing they should not see the entire task list that consists of up to 200 tasks
* Users must select one of the items from the options, they cannot type whatever they want and submit. 
* There needs to be an “other” option accompanying the tasks at all time, so that if the tasks don’t apply to that user, they have an option to select something. 
* The autofill needs to pull the data from the excel spreadsheet that we provide.
* The autofill should allow for the number of tasks to be unlimited so that when we add new tasks in the future it will be some form of a data dump.
* When an option is not available in the list, upon submission, redirect the user to a page where it would be able to submit the new items.
* When an option is not available in the list, let use what the user typed as the value.
* Limit number of displayed items.
* Load suggestion from a JSON dataset.
* Specify what kind of filtering, first matching character in the suggestions, first character of a word, any character. 
* Load suggestion from an array of string in a JSON file
* Be able to limit the number of displayed suggestion
* Be able to change the filtering behaviour like Any, StartWith, Word
* Be able to use a pattern match with would match suggestion that are 80% closer to what the user typed in. This is to accommodates even if there some typos in the inputs. Like: [Soundex](https://en.wikipedia.org/wiki/Soundex), [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) 

### Feature that might worth to considerate

* Should we allow the suggested options to be grouped? Like what the ```optgroup``` element do with the ```select``` element.

### Resources

* [The ```list``` attribute - HTML 5.3 W3C Working Draft](https://www.w3.org/TR/html53/sec-forms.html#the-list-attribute) - contains information when used in combination with ```multiple``` attribute.
* [The ```datalist``` element - HTML 5.3 W3C Working Draft](https://www.w3.org/TR/html53/sec-forms.html#elementdef-datalist)
* [The ```datalist``` element - HTML living standard](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)
* [```multiple``` attribute  - HTML living standard](https://html.spec.whatwg.org/multipage/input.html#the-multiple-attribute) - Contains a visual example of a customized datalist
* ARIA default role: [listbox](https://www.w3.org/TR/wai-aria-1.1/#listbox)
* [Developing a Keyboad Interface - WAI ARIA practices](https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard)
* [Listbox - WAI ARIA practices](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox)
* [Scrollable listbox example - WAI ARIA practices](https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-scrollable.html)
* [Collapsible Dropdown Listbox Example - WAI ARIA practice](https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-collapsible.html)
* [Example Listbox with Reaarangeable Options - WAI ARIA practice](https://www.w3.org/TR/wai-aria-practices-1.1/examples/listbox/listbox-rearrangeable.html)
* [Grids: Interactive Tabular Data and Layout Container - WAI ARIA practice](https://www.w3.org/TR/wai-aria-practices-1.1/#grid)
* [Example 3: Scrollable Search Results - WAI ARIA practice](https://www.w3.org/TR/wai-aria-practices-1.1/examples/grid/LayoutGrids.html#ex3_label)

### Quote from spec

> To be keyboard accessible, authors SHOULD manage focus of descendants for all instances of this role, as described in Managing Focus.

Source: listbox (role) - WAI ARIA 1.1

> the interaction model conveyed by the listbox role to assistive technologies does not support interacting with elements inside of an option. Because of these traits of the listbox widget, it does not provide an accessible way to present a list of interactive elements, such as links, buttons, or checkboxes. To present a list of interactive elements, see the grid pattern.

Source: Listbox - WAI ARIA parctices

## Test case

* See the design pattern information described in [Listbox - WAI ARAI practices](https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox)

## Wireframe

### Visual

![Wireframe - visual representation of the User interface]({{ "2018-assets/1-datalist-wireframe.png" }})

### Behaviour

Conditional submission:
* The proposed list of items are suggestions and choosing an item from the list is totally optional.
* If the typed suggestions are not in the list, then the submission would be redirected to a specific page that would take care of the text entered by the user
* The user need to choose an item in that list in order to submit
* An item might trigger a different action, like simply redirecting to a different page and an another item will do a standard from submission with server side processing.

### Code sample

Take a look also at the working example from the WAI ARIA practices cite in the resources which have clue on how the enhanced user interface should be coded. 

Simple datalist
```
<input list="datalist-id" />

<datalist id="datalist-id">
	<option>Lorem ipsum</option>
	<option>dolor sit amet</option>
	<option>consectetur</option>
	<option>adipiscing elit</option>
</datalist>
```

With a minimalist template, like the suggestion is loaded from a JSON files
```
<input list="datalist-id" />

<datalist id="datalist-id">
	<template>
		<option>{{ Suggestion }}</option>
	</template>
</datalist>
```

A highly customized template where that content can'nt be holded by the datalist element. That kind of content would need to be in a overlay.
```
<input list="datalist-id" />

<datalist id="datalist-id">
	<template>
		<div class="row">
			<div class="col-xs-1">
				<p>:-)</p>
			</div>
			<div class="col-xs-11">
				<p>{{ Suggestion }}</p>
			</div>
		</div>
	</template>
</datalist>
```

A highly customized template with fallback on standard datalist implementation
```
<input list="datalist-id" />

<datalist id="datalist-id">
	<template>
		<div class="row">
			<div class="col-xs-1">
				<p>:-)</p>
			</div>
			<div class="col-xs-11">
				<p>{{ Suggestion }}</p>
			</div>
		</div>
	</template>
	<option>Lorem ipsum</option>
	<option>dolor sit amet</option>
	<option>consectetur</option>
	<option>adipiscing elit</option>
</datalist>
```
* Review the template as per the information and examples in the WAI ARIA practice

Fieldflow plain working example
```
<div class="wb-fieldflow">
	<p>Please something, something....</p>
	<ul>
		<li><a href="redirect/page-1.html">Lorem ipsum</a></li>
		<li><a href="redirect/page-2.html">dolor sit amet</a></li>
		<li><a href="redirect/page-3.html">consectetur</a></li>
		<li><a href="redirect/page-4.html">adipiscing elit</a></li>
	</ul>
</div>
```

Fieldflow with datalist working example
```
<div class="wb-fieldflow" data-wb-fieldflow='{"renderas":"datalist"}'>
	<p>Please something, something....</p>
	<ul>
		<li><a href="redirect/page-1.html">Lorem ipsum</a></li>
		<li><a href="redirect/page-2.html">dolor sit amet</a></li>
		<li><a href="redirect/page-3.html">consectetur</a></li>
		<li><a href="redirect/page-4.html">adipiscing elit</a></li>
	</ul>
</div>
```
* It might need an new configuration to specify a custom template
* The unordered list will be transform into option in the datalist
* By default, the user would need to choose a valid option.
* Fallback on form submission default, that might need to be a new configuration (When the typed option is not available)
* Support for multiple selection

## Review of existing tools

### jQuery accessible autocomplete list (with some ARIA)

Working example: [jQuery accessible autocomplete list (with some ARIA)](https://a11y.nicolas-hoffmann.net/autocomplete-list/)
Source code: [Github.com/nico3333fr/jquery-acc [...] autocomplete-list-aria.js](https://github.com/nico3333fr/jquery-accessible-autocomplete-list-aria/blob/master/jquery-accessible-autocomplete-list-aria.js)

* The UI and the interaction pattern is interesting and seems to address some of the requirement.
* It don't support loading suggestion from a JSON file.
* The javascript code don't seems to be optimized, there is a lot of repeative code.
* The solution simulate the "suggestion" panel. It use only ```<div>``` but it is enhanced with ARIA ```role=listbox``` for the panel and ```role=option``` for each individual options. ```tabindex=-1``` is used on options 
* Pressing the down arrow when the focus are on the input don't show the suggested list.
* Instructions, for screen reader only, are inserted just before the input field
* Info about the displayed result, for screen reader only, are inserted just before the input field. That block have the attribute ```aria-live=polite```
* It contains an options to limits the number of displayed result.
* It contains an options used as "fallback" but it didn't work on the demo, and didn't work on mouse click.


### mfranzke - datalist-polyfill

Working example: [JSFiddle](https://jsfiddle.net/mfranzke/s6awjfze/)
Source code: [Github.com/mfranzke/datalist-polyfill](https://github.com/mfranzke/datalist-polyfill)

* It's a polyfill, it don't work if the browser already support it.
* Main purpose, add the datalist feature in Safari and IE9-10
* Can be a good candidate to replace the existing datalist polyfill in WET

### Accessible autocomplete

Working example: [Accessible autocomplete](https://haltersweb.github.io/Accessibility/autocomplete.html)
Source code: 
* Javascript - [https://github.com/haltersweb/Accessibility/blob/gh-pages/js/autocomplete.js](https://github.com/haltersweb/Accessibility/blob/gh-pages/js/autocomplete.js)
* CSS - [https://github.com/haltersweb/Accessibility/blob/gh-pages/css/autocomplete.css](https://github.com/haltersweb/Accessibility/blob/gh-pages/css/autocomplete.css)

