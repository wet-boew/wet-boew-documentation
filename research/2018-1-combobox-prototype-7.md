---
published: true
layout: default-theme-wet-boew-en
title: Combobox prototype 7 - Datalist JSON suggestion - Research and finding
description: Prototype using a reactive system
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
script_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_src2: 2018-assets/1-datalist-combobox-2.js
script_src3: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Prototype of an ```select``` box transformed into a customized ```combobox``` with the listbox pattern by using a reactive experimental system.


{::nomarkdown}

{% raw %}

<div class="wb-prettify all-pre linenums"></div>

<style>
/* Overlay default style */
[role=listbox] {
	min-width: 230px;
	background: white;
	border: 1px solid #ccc;
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 1.7em;
	z-index: 9999;
	/* Note about z-index
	Ideally it should be set to 1, but the <footer id="wb-info"> has a z-index set to 5,
	 */
}
/* Active state style */
[role=option][aria-selected=true] {
	background: rgb(139, 189, 225); /* #8bbde1 */
}
[role=option]:hover {
	cursor: default;
	background: #719AB9;
}
/* Have the input and the overlay together */
.combobox-wrapper {
    display: inline-block;
    position: relative;
}
[role=combobox]:after {
	content: "\25BC\a0";
}
</style>


<label for="id_select">Please choose an option</label>
<select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb5-template="sub-template-listbox@tmplItems">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>

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

<a href="2018-assets/1-datalist-combobox-2.js">Combobo javascript code</a>

<pre><code>&lt;style&gt;
/* Overlay default style */
[role=listbox] {
	min-width: 230px;
	background: white;
	border: 1px solid #ccc;
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 1.7em;
	z-index: 9999;
	/* Note about z-index
	Ideally it should be set to 1, but the &lt;footer id="wb-info"&gt; has a z-index set to 5,
	 */
}
/* Active state style */
[role=option][aria-selected=true] {
	background: rgb(139, 189, 225); /* #8bbde1 */
}
[role=option]:hover {
	cursor: default;
	background: #719AB9;
}
/* Have the input and the overlay together */
.combobox-wrapper {
    display: inline-block;
    position: relative;
}
[role=combobox]:after {
	content: "\25BC\a0";
}
&lt;/style&gt;


&lt;label for="id_select"&gt;Please choose an option&lt;/label&gt;
&lt;select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb5-template="sub-template-listbox@tmplItems"&gt;
	&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
	&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
	&lt;option value="dolor"&gt;dolor&lt;/option&gt;
	&lt;option value="sit"&gt;sit&lt;/option&gt;
&lt;/select&gt;

&lt;template id="combobox_simple_template"&gt;
	&lt;div class="combobox-wrapper"&gt;
		&lt;div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId"&gt;
			&lt;input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, name@fieldName, value@selectValue" aria-autocomplete="list" aria-activedescendant="" required /&gt;
		&lt;/div&gt;
		&lt;div data-wb5-bind="id@popupId" role="listbox" class="hidden"&gt;
			&lt;template data-slot-elm="" data-wb5-template="sub-template-listbox"&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li
						class="brdr-bttm"
						role="option"
						data-wb5-for="option in options"
						data-wb5-if="!parent.filter.length || option.value.indexOf(parent.filter) !== -1"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" &gt;{{ option.textContent }}&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/template&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;

&lt;p&gt;&lt;a href="2018-assets/1-datalist-combobox-2.js"&gt;Combobo javascript code&lt;/a&gt;&lt;/p&gt;</code></pre>

{% endraw %}
{:/}
