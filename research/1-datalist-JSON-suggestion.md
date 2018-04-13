---
published: true
layout: default-theme-wet-boew-en
title: 1 - Datalist JSON suggestion - Research and finding - Web Experience Toolkit (WET) documentation
description: Design decision followed by WET.
modified: 2018-03-29
---

## Purpose

Customizable autocomplete feature.

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

## Early prototype

* [2018-04-08 - combobox prototype](2018-1-combobox-example.html)
* [2018-04-11 - combobox prototype 2 - Async loading](2018-1-combobox-prototype-2.html)
* [2018-04-13 - combobox prototype 3 - Validation](2018-1-combobox-prototype-3.html)

## Similar tools

Here a list of similar tools that was found on a February 2018 research

* [jQuery accessible autocomplete list (with some ARIA)](https://a11y.nicolas-hoffmann.net/autocomplete-list/)
* mfranzke - datalist-polyfill
	* JSFiddle - [https://jsfiddle.net/mfranzke/s6awjfze/](https://jsfiddle.net/mfranzke/s6awjfze/)
	* Github - https://github.com/mfranzke/datalist-polyfill
* [Accessible autocomplete](https://haltersweb.github.io/Accessibility/autocomplete.html)
* [SelectWoo Accessibility Testing Samples](https://woocommerce.github.io/selectWoo/accessibility-testing/)
* [Chosen](https://harvesthq.github.io/chosen/)
* [Web Search Engine with Autocorrect and Autofill feature](https://github.com/Pavan18/Web-Search-Engine-with-Autocorrect-and-Autofill-feature)
	* A mashup of server side and client side. Not very re-usable for the need here.
* [Android Autofill Framework](https://github.com/googlesamples/android-AutofillFramework)
	* Android specific application. Not very re-usable for the need here.
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
* [```combobox``` (role)](https://www.w3.org/TR/wai-aria-1.1/#combobox)
* [```aria-autocomplete``` (property)](https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete)

### Quote from spec

> To be keyboard accessible, authors SHOULD manage focus of descendants for all instances of this role, as described in Managing Focus.

Source: listbox (role) - WAI ARIA 1.1

> the interaction model conveyed by the listbox role to assistive technologies does not support interacting with elements inside of an option. Because of these traits of the listbox widget, it does not provide an accessible way to present a list of interactive elements, such as links, buttons, or checkboxes. To present a list of interactive elements, see the grid pattern.

Source: Listbox - WAI ARIA practices

> A composite widget containing a single-line textbox and another element, such as a listbox or grid, that can dynamically pop up to help the user set the value of the textbox.

Source: combobox (role) - WAI ARIA 1.1

> For instance, a combobox where the value of aria-autocomplete would be none is a search field that displays suggested values by listing the 5 most recently used search terms without any filtering of the list based on the user's input.

Source: aria-autocomplete (property) - WAI ARIA 1.1


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


```
<label for="myid">Label</label>
<select id="myid" data-wb5-enhance="autofill@autofillTemplateID">
	<option value="L">Lorem ipsum</option>
	<option value="D">dolor sit amet</option>
	<option value="C">consectetur</option>
	<option value="A">adipiscing elit</option>
</select>
<template id="autofillTemplateID">
	<div class="row" data-wb5-for="(option, index) in select.children()">
		<div class="col-xs-1">
			<p>:-)</p>
		</div>
		<div class="col-xs-11">
			<p><button data-wb5-on="click@selectOption(index)">{{ option.text }}</button></p>
		</div>
	</div>
	<button data-wb5-on="click@selectOption( select.children().length - 1 )">Default option</button>
</template>

```
## Review of existing tools

### jQuery accessible autocomplete list (with some ARIA)

Working example: [jQuery accessible autocomplete list (with some ARIA)](https://a11y.nicolas-hoffmann.net/autocomplete-list/)
Source code: [Github.com/nico3333fr/jquery-acc [...] autocomplete-list-aria.js](https://github.com/nico3333fr/jquery-accessible-autocomplete-list-aria/blob/master/jquery-accessible-autocomplete-list-aria.js)

* The UI and the interaction pattern is interesting and seems to address some of the requirement.
* It don't support loading suggestion from a JSON file.
* The javascript code don't seems to be optimized, there is a lot of repetitive code.
* The solution simulate the "suggestion" panel. It use only ```<div>``` but it is enhanced with ARIA ```role=listbox``` for the panel and ```role=option``` for each individual options. ```tabindex=-1``` is used on options
* Pressing the down arrow when the focus are on the input don't show the suggested list.
* Instructions, for screen reader only, are inserted just before the input field
* Info about the displayed result, for screen reader only, are inserted just before the input field. That block have the attribute ```aria-live=polite```
* It contains an options to limits the number of displayed result.
* It contains an options used as "fall-back" but it didn't work on the demo, and didn't work on mouse click.

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

* When resizing, the overlay is not aligned with the input text.
* The relation between the typed letter and the displayed results seems to be disconnected. The displayed result seems to be tie to the number of typed letter.
* If the input already have an value, like "aa", then when refocusing in the input, the suggestion is not displayed, but we can change the input value by navigating with the top and down arrow on the keyboard. Unless if the input initial value is one from the suggested options.
* Interesting use of ```aria-activedescendant``` attribute to notify what item has been selected.
* This solution seems to use a shadow DOM on the input field.
* Use of ```aria-live=assertive``` to notify the screen reader user. But after a second the notification message is removed from the DOM.

### selectWoo and Select2

Working example:
* [SelectWoo Accessibility Testing Samples](https://woocommerce.github.io/selectWoo/accessibility-testing/)
* [Select2](https://select2.org/)

Source code:
* Fork from woocommerce: [https://github.com/woocommerce/selectWoo](https://github.com/woocommerce/selectWoo)
* Upstream: [https://github.com/select2/select2](https://github.com/select2/select2)

* Large jQuery plugin that contains ~5876 line of javascript code and ~485 line of CSS code
* One difference between Upstream and woocommerce fork is:
	* The upstream identify the items as ```treeitem``` in ```group``` or  ```tree``` for multi select and the woocommerce as ```option``` in ```listbox```
	* The upstream use ```aria-selected``` and the woocommerce use ```data-selected```
* It use ```aria-activedescendant``` to identify the items that is selected.
* Nice visual example with multiple selection. When items are selected, the role ```presentation``` should not be used on the "x" span which act as a button to remove the tag.
* The multi selection aria, with the label are regrouped in a span with the role ```combobox```
* Custom layout (via templating) for the suggestion list need to be managed through javascript. See the working example for [Ajax (remote data)](https://select2.org/data-sources/ajax)
* SelectWoo - Keyboard navigation for multiple is not ideal, when selecting we can not use down arrow to select a second option.
* SelectWoo - Down arrow do not display the options

### Chosen

Working example: [Chosen is a library for making long, unwieldy select boxes more friendly.](https://harvesthq.github.io/chosen/)
Source code: [Github.com/harvesthq/chosen](https://github.com/harvesthq/chosen)

* Use overlay, but the content is not enhanced with aria code.
* It's enhance a basic select box into a interactive selection box with filtering

### React autosuggest

Working example: [Reach autosuggest](http://react-autosuggest.js.org/)
Source code: [github.com/moroshko/react-autosuggest](https://github.com/moroshko/react-autosuggest)

* We can only re-use the design pattern, not the code
* It use wai-aria role ```option``` and ```listbox``` to enhance the accessibility, even for custom render.
* For multiple, each group have it's own ```listbox```
* The user can not use the "down" arrow to simply show all the result
* Custom render, the style is only created with ```span```
* Custom render, the image is a decorative image
* Nice interface, showing the selected option but the user can modify it through an "edit" button link and then all the option is displayed in a overlay and they user can select from a scrolable list.

### Datalist JSON suggestion

Working example: [Datalist JSON suggestion](http://wet-boew.github.io/themes-dist/GCWeb/demos/suggest/suggest-en.html)
Source code: [github.com/wet-boew/GCWeb](https://github.com/wet-boew/GCWeb/tree/master/src/plugins/suggest)

* Load suggestion from a JSON file
* Only provide datalist feature as it was implemented by the browser. So it can be inconsistent depending of the browser vendor.
* Can limit the number of displayed result
* There is some basic mode to filter items, like startWith, words and any. But the browser implementation has precedence. like in IE11 it's always start with and the mode "any" or "word" are not supported.


## List of modules

* Type of selection
	* Single selection
	* Multiple selection
* Type of input
	* Free input, means the user can enter his own value. (HTML datalist element model)
	* Predefined list, means the user need to choose one item in the list. (HTML select element model)
* Type of layout for suggestion
	* Plain, only straight forward items, a simple string is displayed for each item. Will use the role ```option``` and ```listbox```
	* Grouped, use two listbox or use the role ```grid```
	* Customized layout, the suggestion should use the role ```grid```. Includes scenario:
		* Persistent option, at the bottom
		* Input field to filter the suggested items
* Fieldflow
	* Fallback for unknown items when the items is just a suggestions
* Gathering the list of suggested items. From HTML content, JSON file, CSV
* Type of filtering
	* Start with
	* Any
	* Word
	* Find items that are matching at 80% validated with different matching algorithm (SoundEx)

## Behaviour

* For predefined list, it the input value don't match the suggestion, then the input should be have a custom error ```input.setCustomValidity('"' + input.value + '"' don't match one of the suggestions")```
* ? Use the "defaultValue" attribute to set the default value.
* Use the behaviour defined by aria 1.1 comboxbox role
* Detect if it's a simple listbox or a grid or a dialog

## Design pattern - Single selection

### Basic HTML interface

Free input
```
<input list="datalist_id">
<datalist id="datalist_id">
	<option>Lorem</option>
	<option>ipsum</option>
	<option>dolor</option>
	<option>sit</option>
</datalist>
```

```
<div class="wb-fieldflow" data-wb-fieldflow='{"renderas":"combobox", "fallback": { [action object] } }'>
	<p>Please something, something....</p>
	<ul>
		<li><a href="redirect/page-1.html">Lorem ipsum</a></li>
		<li><a href="redirect/page-2.html">dolor sit amet</a></li>
		<li><a href="redirect/page-3.html">consectetur</a></li>
		<li><a href="redirect/page-4.html">adipiscing elit</a></li>
	</ul>
</div>
```

Predefined list
```
<select>
	<option>Lorem</option>
	<option>ipsum</option>
	<option>dolor</option>
	<option>sit</option>
</select>
```

```
<div class="wb-fieldflow" data-wb-fieldflow='{"renderas":"combobox"}'>
	<p>Please something, something....</p>
	<ul>
		<li><a href="redirect/page-1.html">Lorem ipsum</a></li>
		<li><a href="redirect/page-2.html">dolor sit amet</a></li>
		<li><a href="redirect/page-3.html">consectetur</a></li>
		<li><a href="redirect/page-4.html">adipiscing elit</a></li>
	</ul>
</div>
```

### Enhanced interface

The interface as the same for Predefined option and Free input. The difference is the "predefined option" will log a custom error message if the input don't match one items in list of suggested items.


```
<div role="combobox" aria-expanded="true" aria-owns="datalist_id" aria-haspopup="listbox">
    <input aria-autocomplete="list" aria-controls="datalist_id" aria-activedescendant="wb_auto_1">
</div>
<ul id="datalist_id" role="listbox">
    <li id="wb_auto_1" role="option">Lorem</li>
    <li id="wb_auto_2" role="option">ipsum</li>
    <li id="wb_auto_3" role="option">dolor</li>
    <li id="wb_auto_4" role="option">sit</li>
</ul>
```

```
{ hidden }
	<div class="wb-fieldflow" data-wb-fieldflow='{"renderas":"combobox", "fallback": { [action object] } }'>
		<p>Please something, something....</p>
		<ul>
			<li id="wb_auto_7"><a href="redirect/page-1.html">Lorem ipsum</a></li>
			<li id="wb_auto_8"><a href="redirect/page-2.html">dolor sit amet</a></li>
			<li id="wb_auto_9"><a href="redirect/page-3.html">consectetur</a></li>
			<li id="wb_auto_10"><a href="redirect/page-4.html">adipiscing elit</a></li>
		</ul>
	</div>
{/ hidden }

<div role="combobox" aria-expanded="true" aria-owns="wb_auto_6" aria-haspopup="listbox">
	<label for="wb_auto_5">Please something, something.... </label>
    <input id="wb_auto_5" aria-autocomplete="list" aria-controls="wb_auto_6" aria-activedescendant="wb_auto_1">
</div>
<ul id="wb_auto_6" role="listbox">
    <li role="option" data-wb-fieldflow='{"bind":"wb_auto_7","actions":[{"action":"redir","url":"redirect/page-1.html"}]}'>Lorem ipsum</li>
    <li role="option" data-wb-fieldflow='{"bind":"wb_auto_8","actions":[{"action":"redir","url":"redirect/page-2.html"}]}'>dolor sit amet</li>
    <li role="option" data-wb-fieldflow='{"bind":"wb_auto_9","actions":[{"action":"redir","url":"redirect/page-3.html"}]}'>consectetur</li>
    <li role="option" data-wb-fieldflow='{"bind":"wb_auto_10","actions":[{"action":"redir","url":"redirect/page-4.html"}]}'>adipiscing elit</li>
</ul>
```



## Design pattern - Single selection with customized layout

* Custom layout should be detected when the template do not only contains an "option" elements or "optgroup" for select.
* The content to be used as the actual value of the input need to be specified, like via a configuration with a CSS selector value relative to the "row".
* Custom layout require to use the "grid".
* May require a mapping from datasource in the page or from an external JSON file. For in page mapping use ```data-wb5-slot``` attribute where its value is the slot name.

### Predefined list

This example kept simple list items, but the intention is to display inside a custom interface with a fallback.

The template will be created in a new ```<div role="grid">```

The next example re-use the option as the data provider. The "value" are the filterable content

```
<select data-wb5-enhance="combobox">
	<template>
		<ul role="row">
			<li role="gridcell" data-wb5-for="option in select.options()" data-wb5-on="click@$emit('select', option.value )">{{ option.text }}</li>
		</ul>
		<div role="row">
			<div role="gridcell">
				<button data-wb5-on="click@$emit('select', 'sit')">Default persistent option</button>
			</div>
		</div>
	</template>
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>
```

### Free input

```
<input list="datalist_id" data-wb5-enhance="combobox">
<datalist id="datalist_id">
	<template>
		<ul role="row">
			<li role="gridcell" data-wb5-for="option in datalist.options()" data-wb5-on="click@$emit('select', option.value )">{{ option.text }}</li>
		</ul>
		<div role="row">
			<div role="gridcell">
				<button data-wb5-on="click@$emit('select', input.value)">{{ input.value }}</button>
			</div>
		</div>
	</template>
	<option>Lorem</option>
	<option>ipsum</option>
	<option>dolor</option>
	<option>sit</option>
</datalist>
```

### (incomplete) predefined list with custom layout of items

```
<select data-wb5-enhance="combobox" data-wb5-provider="html@mySuggestionList" data-wb5-config='{"prvdr": { "image": "CSS Selector",...}  }'>
	<template>
		<div class="row" data-wb5-for="(option, index) in select.options()">
			<div class="col-xs-1">
				<p>:-)</p>
			</div>
			<div class="col-xs-11">
				<p><button data-wb5-on="click@selectOption(index)">{{ value }}</button></p>
			</div>
		</div>
		<button data-wb5-on="click@selectOption( select.children().length - 1 )">Default option</button>
	</template>
	<option>Lorem</option>
	<option>ipsum</option>
	<option>dolor</option>
	<option>sit</option>
</select>

{ hidden }
	<div class="hidden" id="mySuggestionList">
		<div data-wb5-slot="value">Item 1</div>
	</div>
{/ hidden }

```


## Tasklist

* Find an alternative to ```data-wb5``` like ```data-wb-exp``` for wet-boew experiment or something similar

Fieldflow
* Add the "combobox" renderas
* Add the configuration option "fallback" with support to pass the value of the "input"


## Early prototype requirement

* Predefined list - Single selection with a customized layout for the overlay and the dynamic suggest items are simple.
* Free input - Single selection with a customized layout for the overlay and the dynamic suggest items are simple.


### Code sample and expected results

**Scenario:** The user need to select one option. In order to select an option, the user can filter the suggested list, there is a persistant available option regardless the filter. A second phase will to limit the number of display of result with pagination.

**Template requirement:** As the display is not a linear list, the template must implement the grid.

#### before initialization (Basic)

Author code:
```
<label for="id_select">Please choose an option</label>
<select id="id_select" data-wb5-enhance="combobox@listbox" name="selLoremIpsum">
	<template>
		<ul>
			<li role="option" data-wb5-for="option in select.options()" data-wb5-on="click@$emit('select', option.value )">{{ option.text }}</li>
		</ul>
		<hr class="brdr-bttm">
		<p role="option" data-wb5-on="click@$emit('select', 'sit')">Default persistent option</p>
	</template>
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>
```

#### on initialization (Enhanced)

The enhanced code, on initialization, will look like:
```
<label for="id_select">Please choose an option</label>
<div role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="wb_auto_1">
    <input id="id_select" aria-autocomplete="list" aria-controls="wb_auto_1" name="selLoremIpsum" aria-activedescendant="" />
</div>
<div id="wb_auto_1" role="listbox">
</div>
```

Note:
* If the value of the input don't match one of the available items, then the input would contains a custom error message. An empty value for the input should be valid if the required attribute is not set to "true" on the ```select```
* The user only see a input[type=text] confirming the enhancement has worked
* Consider to not "pre-create" the list of suggestion. It may be more efficiant to create the suggestion list when the user hit that text field.

#### on focus (Enhanced)

The enhanced code, on focus, will look like:
```
<label for="id_select">Please choose an option</label>
<div role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-owns="wb_auto_1">
    <input id="id_select" aria-autocomplete="list" aria-controls="wb_auto_1" name="selLoremIpsum" aria-activedescendant="" />
</div>
<div id="wb_auto_1" role="listbox" class="overlay">
	<ul>
		<li id="wb_auto_2" role="option" data-wb5-on="click@$emit('select', 'Lorem' )">Lorem</li>
		<li id="wb_auto_3" role="option" data-wb5-on="click@$emit('select', 'ipsum' )">ipsum</li>
		<li id="wb_auto_4" role="option" data-wb5-on="click@$emit('select', 'dolor' )">dolor</li>
		<li id="wb_auto_5" role="option" data-wb5-on="click@$emit('select', 'sit' )">sit</li>
	</ul>
	<hr class="brdr-bttm">
	<p id="wb_auto_6" role="option" data-wb5-on="click@$emit('select', 'sit')">Default persistent option</p>
</div>
```


#### on selecting an item (Enhanced)

The item "ipsum" is currently focused.

```
<label for="id_select">Please choose an option</label>
<div role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-owns="wb_auto_1">
    <input id="id_select" aria-autocomplete="list" aria-controls="wb_auto_1" name="selLoremIpsum" aria-activedescendant="wb_auto_3" />
</div>
<div id="wb_auto_1" role="listbox" class="overlay">
	<ul>
		<li id="wb_auto_2" role="option" data-wb5-on="click@$emit('select', 'Lorem' )">Lorem</li>
		<li aria-selected="true" id="wb_auto_3" role="option" data-wb5-on="click@$emit('select', 'ipsum' )">ipsum</li>
		<li id="wb_auto_4" role="option" data-wb5-on="click@$emit('select', 'dolor' )">dolor</li>
		<li id="wb_auto_5" role="option" data-wb5-on="click@$emit('select', 'sit' )">sit</li>
	</ul>
	<hr class="brdr-bttm">
	<p id="wb_auto_6" role="option" data-wb5-on="click@$emit('select', 'sit')">Default persistent option</p>
</div>

```

Only the item with the role ```option``` will be selectable, as that is the design pattern for listbox. If other element need to be selectable then it should be rendered as a grid.

#### after selecting an item (Enhanced)

The item "dolor" is selected by the user.

```
<label for="id_select">Please choose an option</label>
<div role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-owns="wb_auto_1">
    <input id="id_select" aria-autocomplete="list" aria-controls="wb_auto_1" name="selLoremIpsum" aria-activedescendant="" value="dolor" />
</div>
<div id="wb_auto_1" role="listbox" class="overlay">
	<ul>
		<li id="wb_auto_2" role="option" data-wb5-on="click@$emit('select', 'Lorem' )">Lorem</li>
		<li id="wb_auto_3" role="option" data-wb5-on="click@$emit('select', 'ipsum' )">ipsum</li>
		<li id="wb_auto_4" role="option" data-wb5-on="click@$emit('select', 'dolor' )">dolor</li>
		<li id="wb_auto_5" role="option" data-wb5-on="click@$emit('select', 'sit' )">sit</li>
	</ul>
	<hr class="brdr-bttm">
	<p id="wb_auto_6" role="option" data-wb5-on="click@$emit('select', 'sit')">Default persistent option</p>
</div>
```

#### on focus out (Enhanced)

The focus is move to the next element, the grid overlay are hidden and the user has selected the option "dolor" before focusing out.

```
<label for="id_select">Please choose an option</label>
<div role="combobox" aria-expanded="true" aria-haspopup="listbox" aria-owns="wb_auto_1">
    <input id="id_select" aria-autocomplete="list" aria-controls="wb_auto_1" name="selLoremIpsum" aria-activedescendant="" value="dolor" />
</div>
<div id="wb_auto_1" role="listbox" class="hidden">
	<ul>
		<li id="wb_auto_2" role="option" data-wb5-on="click@$emit('select', 'Lorem' )">Lorem</li>
		<li id="wb_auto_3" role="option" data-wb5-on="click@$emit('select', 'ipsum' )">ipsum</li>
		<li id="wb_auto_4" role="option" data-wb5-on="click@$emit('select', 'dolor' )">dolor</li>
		<li id="wb_auto_5" role="option" data-wb5-on="click@$emit('select', 'sit' )">sit</li>
	</ul>
	<hr class="brdr-bttm">
	<p id="wb_auto_6" role="option" data-wb5-on="click@$emit('select', 'sit')">Default persistent option</p>
</div>
```

#### on resize when open (Enhanced)

? Close the overlay or recalculate the possition of the overlay.

#### on validation error (Enhanced)

This may require the form validation plugin in order to display the error message. However, on error, this plugin would set the custom error message to the input text field.
