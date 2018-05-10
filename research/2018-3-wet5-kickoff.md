---
published: true
layout: default-theme-wet-boew-en
title: 2018-3 - WET 5 kick off
description: Documentations material presented at the WET 5 kick off on May 10, 2018
modified: 2018-05-10
---


Documentations material presented at the WET 5 framework development kick off meeting on May 10, 2018. 

{::nomarkdown}

{% raw %}

<div class="alert alert-info">
	<p>The information on this page might be already superseeded and might not represent the actual status of the WET 5 framework development.</p>
</div>

{% endraw %}
{:/}


## Kickoff meeting event description


The new WET 5 would need to :
* Better support development of:
	* Single page application (SPA)
	* Traditional multi page application
* Stronger focus on accessible version of interactive UI
* More modular and re-usable
* Reduced learning curve for developers
* Better documentation (more working examples, WET feature blueprint)
* Separate the UI from the logic. Like allowing to a way quickly switch from an initial UI enhanced state into a Basic HTML UI state. And to not prescribe a specific CSS framework to implementer.
* Connect with web services provided by Restfull API, GraphQL API and SPARQL.
 
The meeting goal is:
* Create sub working group to initiate the work on WET 5.
* Present a few core concept targeted for WET 5
* Presentation of sub working group themes like:
	* WCAG 2.1 Level AA review
	* WET Feature blueprint
	* WET 5 core
		* Core
		* Plugin structure
		* File system structure
		* Plugin manifest
		* JS/CSS dependency loading
		* Virtual DOM
	* Web site / blog / communication
	* WET 4 to WET 5 migration
		* Move of WET 4 plugin to WET 5
		* Migration tools
	* Internationalisation (i18n)
	* uild of WET 5 and continuous integration (Travis-CI)


### You want to participate

Let us knowby contacting Pierre Dubois. You can find his contact info on [GCCollab](https://gccollab.ca/profile/Pierre.Dubois) or on [GCConnex](https://gcconnex.gc.ca/profile/duboisp) or by opening a [github issue](https://github.com/wet-boew/wet-boew/issues)

## Links

* [Combobox prototype 7](http://wet-boew.github.io/wet-boew-documentation/research/2018-1-combobox-prototype-7.html)
* [Github issue: WET API/Bluprint](https://github.com/wet-boew/wet-boew/issues/8358)
* [Github issue: Basic HTML mode and progressive enhancement](https://github.com/wet-boew/wet-boew/issues/8357)

## Template sample

```
<template id="combobox_simple_template">

	<div class="combobox-wrapper">
		<div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, name@fieldName, value@selectValue" aria-autocomplete="list" aria-activedescendant="" required />
		</div>
		<div data-wb5-bind="id@popupId" role="listbox" class="hidden">
			<template data-slot-elm="" data-wb5-template="sub-template-listbox">
				<ul class="list-unstyled">
					<li 
						class="brdr-bttm" 
						role="option" 
						data-wb5-for="option in options" 
						data-wb5-if="!parent.filter.length || option.value.indexOf(parent.filter) !== -1"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" >{{ option.textContent }}</li>
				</ul>
			</template>
		</div>
	</div>
</template>
```

## Graphic

Note: The text-alternative version will be provided later on.

### Plugin pieces and how they are extended/overwrited in themes

{% raw %}

<img scr="2018-assets/3-plugin-pieces.jpg" class="img-responsive" alt="" />

{% endraw %}

### Flow of WET 5 internal

{% raw %}
<img scr="2018-assets/3-wet5-flow-internal.jpg" class="img-responsive" alt="" />
{% endraw %}

### WET feature blueprint

{% raw %}
<img scr="2018-assets/3-wet-feature-blueprint.jpg" class="img-responsive" alt="" />
{% endraw %}

### WET 5 live cycle flow

{% raw %}
<img scr="2018-assets/3-wet5-live-cycle-flow.jpg" class="img-responsive" alt="" />
{% endraw %}
 