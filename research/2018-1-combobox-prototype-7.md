---
published: true
layout: default-theme-wet-boew-en
title: Combobox prototype 7 - Datalist JSON suggestion - Research and finding
description: Prototype using a reactive system 
modified: 2018-04-09

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/1-datalist-combobox-2.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
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

<template id="tmplItems">
	<ul class="list-unstyled">
		<li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}">{{ autofillItem.textContent }}</li>
	</ul>
	<hr class="brdr-bttm mrgn-tp-sm mrgn-bttm-sm">
	<p role="option" data-wb5-selectvalue="my default value">Default persistent option</p>
</template>


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

<p><a href="#">A dummy link for tab sequence testing</a></p>

<pre><code>&lt;style&Gt;
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
	Ideally it should be set to 1, but the &lt;footer id="wb-info"&Gt; has a z-index set to 5,
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
&lt;/style&Gt;


&lt;label for="id_select"&Gt;Please choose an option&lt;/label&Gt;
&lt;select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb5-template="sub-template-listbox@tmplItems"&Gt;
	&lt;option value="Lorem"&Gt;Lorem&lt;/option&Gt;
	&lt;option value="ipsum"&Gt;ipsum&lt;/option&Gt;
	&lt;option value="dolor"&Gt;dolor&lt;/option&Gt;
	&lt;option value="sit"&Gt;sit&lt;/option&Gt;
&lt;/select&Gt;

&lt;template id="tmplItems"&Gt;
	&lt;ul class="list-unstyled"&Gt;
		&lt;li role="option" data-wb5-for="autofillItem in select.options" data-wb5-selectvalue="{{autofillItem.textContent.toUpperCase()}}"&Gt;{{ autofillItem.textContent }}&lt;/li&Gt;
	&lt;/ul&Gt;
	&lt;hr class="brdr-bttm mrgn-tp-sm mrgn-bttm-sm"&Gt;
	&lt;p role="option" data-wb5-selectvalue="my default value"&Gt;Default persistent option&lt;/p&Gt;
&lt;/template&Gt;


&lt;template id="combobox_simple_template"&Gt;
	&lt;div class="combobox-wrapper"&Gt;
		&lt;div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId"&Gt;
			&lt;input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, name@fieldName, value@selectValue" aria-autocomplete="list" aria-activedescendant="" required /&Gt;
		&lt;/div&Gt;
		&lt;div data-wb5-bind="id@popupId" role="listbox" class="hidden"&Gt;
			&lt;template data-slot-elm="" data-wb5-template="sub-template-listbox"&Gt;
				&lt;ul class="list-unstyled"&Gt;
					&lt;li 
						class="brdr-bttm" 
						role="option" 
						data-wb5-for="option in options" 
						data-wb5-if="!parent.filter.length || option.value.indexOf(parent.filter) !== -1"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" &Gt;{{ option.textContent }}&lt;/li&Gt;
				&lt;/ul&Gt;
			&lt;/template&Gt;
		&lt;/div&Gt;
	&lt;/div&Gt;
&lt;/template&Gt;

&lt;p&Gt;&lt;a href="#"&Gt;A dummy link for tab sequence testing&lt;/a&Gt;&lt;/p&Gt;</code></pre>

{% endraw %}
{:/}
