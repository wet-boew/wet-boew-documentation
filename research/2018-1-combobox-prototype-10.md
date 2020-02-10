---
published: true
layout: default-theme-wet-boew-en
title: Combobox prototype 10 with fieldflow and convert select - Datalist JSON suggestion - Research and finding
description: Fieldflow rendering a combobox and transfroming select into combobox
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
script_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_src2: 2018-assets/2018-1-combobox4.js
script_src3: 2018-assets/2018-1-combobox-fieldflow.js
---

Fieldflow rendering a combobox and transfroming select into combobox.

This prototype include :
* a improved style for the option activated in the listbox
* Fix an issue when goign up on the first item, now it got on the last item
* Fix a styling issue when activating an option with the mouse and then changing that selection with the keyboard, the mouse over style is now removed.
* Fix a validation issue when the select is transformed into a combobox. The validation rule ```data-rule-mustExist``` is added.
* Add ```similarText``` string comparaison function.


{::nomarkdown}

{% raw %}

<script src="//wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js"></script>

<style>
/* Overlay default style */
[role=listbox] {
	min-width: 230px;
	background: white;
	border: 2px solid #999;
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
	background: #8bbde1;
	color: #000;
	border: 1px dotted #000;
}
[role=option]:hover {
	cursor: default;
	background: rgb(139, 189, 225); /* #8bbde1 */
	color: #000;
	border: 1px dotted #000;
}
[role=option]:hover[aria-selected=false] {
	background: #fff;
	color: #000;
	border: 1px solid transparent;
}
[role=option]{
	padding: 2px;
	border: 1px solid transparent;
}
[role=option]:last-child {

}
/* Have the input and the overlay together */
.combobox-wrapper {
    display: inline-block;
    position: relative;
}
/*[role=combobox]:after {
	content: "\25BC\a0";
}*/
</style>

<h2>Fieldflow - With similarText compare function</h2>

<div class="wb-frmvld">
  <form action="submited-contact-us-page.html">
      <p>If you have questions about, ask away!</p>
    <div id="test1" class="wb2-fieldflow" data-wb2-fieldflow='{ "noreqlabel": true, "isoptional": true, "noForm": true, "defaultselectedlabel":"Popular questions", "renderas":"combobox", "defaultIfNone": { "action": "query", "name": "question" } }' data-wb-combobox='{ "templateID": "combobox_custom_template" }'>

      <ul>
			<li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/data-ajax/data-ajax-en.html"}'>Inserting content</li>
			<li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/lightbox/lightbox-en.html"}'>Photo galery</li>
			<li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/charts/charts-en.html"}'>Draw charts</li>
			<li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/details/details-en.html"}'>Expand and collapse content</li>
			<li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/equalheight/equalheight-en.html"}'>Set a consistant height</li>
			<li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/overlay/overlay-en.html"}'>Popup content</li>
      </ul>
    </div>
<div class="row">
      <div class="col-sm-3 col-md-2">
        <input class="btn btn-default mrgn-bttm-md" type="submit" value="Submit">
      </div>
<p class="mrgn-tp-sm">Can't find an answer? <a href="submited-contact-us-page.html">Send us your question</a>.</div>
</div>
  </form>
</div>

<template id="combobox_custom_template">
	<div class="combobox-wrapper">
		<div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, value@filter" aria-autocomplete="list" aria-activedescendant="" />
		</div>
		<div data-wb5-bind="id@popupId" role="listbox" class="hidden">
			<template data-slot-elm="" data-wb5-template="sub-template-listbox">
				<p>Showing :-) <span data-wb5-text="options.wbActive">0</span> of <span data-wb5-text="options.wbLen">0</span> </p>
				<ul class="list-unstyled">
					<li
						class="brdr-bttm"
						role="option"
						data-wb5-for="option in options"
						data-wb5-if="!parent.filter.length || parent.config.compareLowerCase(option.value,parent.filter) || parent.config.similarText(option.value,parent.filter,'75')"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" >{{ option.textContent }}</li>
				</ul>
				<p role="option" data-wb5-on="select@select('default')">Default</p>
				<p>Number of result: <span data-wb5-text="options.wbActive">0</span></p>
			</template>
		</div>
	</div>
</template>


<h2>Select to combobox - default</h2>

<div class="wb-frmvld">
	<form>
		<label for="id_select">Please choose an option</label>
		<select id="id_select" class="wb-combobox" name="selLoremIpsum">
			<option value="Lorem">Lorem</option>
			<option value="ipsum">ipsum</option>
			<option value="dolor">dolor</option>
			<option value="sit">sit</option>
		</select>
	</form>
</div>


<h2>Select to combobox - Load suggestions from JSON file</h2>

<div class="wb-frmvld">
	<form>
		<label for="id_select2">Please choose an option</label>
		<select id="id_select2" class="wb-combobox" name="selLoremIpsum2" data-wb-load="2018-assets/2018-1-suggest.json#/suggestions" data-wb-combobox='{"templateID": "select-combobox-load"}'>
			<option value="Lorem">Lorem</option>
			<option value="ipsum">ipsum</option>
			<option value="dolor">dolor</option>
			<option value="sit">sit</option>
		</select>
	</form>
</div>

<template id="select-combobox-load">
	<div class="combobox-wrapper">
		<div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId">
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, value@filter" aria-autocomplete="list" aria-activedescendant="" />
		</div>
		<div data-wb5-bind="id@popupId" role="listbox" class="hidden">
			<template data-slot-elm="" data-wb5-template="sub-template-listbox">
				<ul class="list-unstyled mrgn-bttm-0">
					<li
						class="brdr-bttm"
						role="option"
						data-wb5-for="option in wbLoad"
						data-wb5-if="!parent.filter.length || parent.config.compareLowerCase(option,parent.filter)"
						data-wb5-on="select@select(option); live@parent.nbdispItem(wb-nbNode)" >{{ option }}</li>
				</ul>
			</template>
		</div>
	</div>
</template>



<h2>Source Code</h2>
<pre><code>&lt;style&gt;
/* Overlay default style */
[role=listbox] {
	min-width: 230px;
	background: white;
	border: 2px solid #999;
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
	background: #8bbde1;
	color: #000;
	border: 1px dotted #000;
}
[role=option]:hover {
	cursor: default;
	background: rgb(139, 189, 225); /* #8bbde1 */
	color: #000;
	border: 1px dotted #000;
}
[role=option]:hover[aria-selected=false] {
	background: #fff;
	color: #000;
	border: 1px solid transparent;
}
[role=option]{
	padding: 2px;
	border: 1px solid transparent;
}
[role=option]:last-child {

}
/* Have the input and the overlay together */
.combobox-wrapper {
    display: inline-block;
    position: relative;
}
/*[role=combobox]:after {
	content: "\25BC\a0";
}*/
&lt;/style&gt;

&lt;h2&gt;Fieldflow - With similarText compare function&lt;/h2&gt;

&lt;div class="wb-frmvld"&gt;
  &lt;form action="submited-contact-us-page.html"&gt;
      &lt;p&gt;If you have questions about, ask away!&lt;/p&gt;
    &lt;div id="test1" class="wb2-fieldflow" data-wb2-fieldflow='{ "noreqlabel": true, "isoptional": true, "noForm": true, "defaultselectedlabel":"Popular questions", "renderas":"combobox", "defaultIfNone": { "action": "query", "name": "question" } }' data-wb-combobox='{ "templateID": "combobox_custom_template" }'&gt;

      &lt;ul&gt;
			&lt;li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/data-ajax/data-ajax-en.html"}'&gt;Inserting content&lt;/li&gt;
			&lt;li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/lightbox/lightbox-en.html"}'&gt;Photo galery&lt;/li&gt;
			&lt;li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/charts/charts-en.html"}'&gt;Draw charts&lt;/li&gt;
			&lt;li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/details/details-en.html"}'&gt;Expand and collapse content&lt;/li&gt;
			&lt;li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/equalheight/equalheight-en.html"}'&gt;Set a consistant height&lt;/li&gt;
			&lt;li data-wb-fieldflow='{"action":"redir", "url": "http://wet-boew.github.io/v4.0-ci/demos/overlay/overlay-en.html"}'&gt;Popup content&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
&lt;div class="row"&gt;
      &lt;div class="col-sm-3 col-md-2"&gt;
        &lt;input class="btn btn-default mrgn-bttm-md" type="submit" value="Submit"&gt;
      &lt;/div&gt;
&lt;p class="mrgn-tp-sm"&gt;Can't find an answer? &lt;a href="submited-contact-us-page.html"&gt;Send us your question&lt;/a&gt;.&lt;/div&gt;
&lt;/div&gt;
  &lt;/form&gt;
&lt;/div&gt;

&lt;template id="combobox_custom_template"&gt;
	&lt;div class="combobox-wrapper"&gt;
		&lt;div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId"&gt;
			&lt;input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, value@filter" aria-autocomplete="list" aria-activedescendant="" /&gt;
		&lt;/div&gt;
		&lt;div data-wb5-bind="id@popupId" role="listbox" class="hidden"&gt;
			&lt;template data-slot-elm="" data-wb5-template="sub-template-listbox"&gt;
				&lt;p&gt;Showing :-) &lt;span data-wb5-text="options.wbActive"&gt;0&lt;/span&gt; of &lt;span data-wb5-text="options.wbLen"&gt;0&lt;/span&gt; &lt;/p&gt;
				&lt;ul class="list-unstyled"&gt;
					&lt;li
						class="brdr-bttm"
						role="option"
						data-wb5-for="option in options"
						data-wb5-if="!parent.filter.length || parent.config.compareLowerCase(option.value,parent.filter) || parent.config.similarText(option.value,parent.filter,'75')"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" &gt;{{ option.textContent }}&lt;/li&gt;
				&lt;/ul&gt;
				&lt;p role="optionss" data-wb5-on="select@select('default')"&gt;Default&lt;/p&gt;
				&lt;p&gt;Number of result: &lt;span data-wb5-text="options.wbActive"&gt;0&lt;/span&gt;&lt;/p&gt;
			&lt;/template&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;


&lt;h2&gt;Select to combobox - default&lt;/h2&gt;

&lt;div class="wb-frmvld"&gt;
	&lt;form&gt;
		&lt;label for="id_select"&gt;Please choose an option&lt;/label&gt;
		&lt;select id="id_select" class="wb-combobox" name="selLoremIpsum"&gt;
			&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
			&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
			&lt;option value="dolor"&gt;dolor&lt;/option&gt;
			&lt;option value="sit"&gt;sit&lt;/option&gt;
		&lt;/select&gt;
	&lt;/form&gt;
&lt;/div&gt;


&lt;h2&gt;Select to combobox - Load suggestions from JSON file&lt;/h2&gt;

&lt;div class="wb-frmvld"&gt;
	&lt;form&gt;
		&lt;label for="id_select2"&gt;Please choose an option&lt;/label&gt;
		&lt;select id="id_select2" class="wb-combobox" name="selLoremIpsum2" data-wb-load="2018-assets/2018-1-suggest.json#/suggestions" data-wb-combobox='{"templateID": "select-combobox-load"'&gt;
			&lt;option value="Lorem"&gt;Lorem&lt;/option&gt;
			&lt;option value="ipsum"&gt;ipsum&lt;/option&gt;
			&lt;option value="dolor"&gt;dolor&lt;/option&gt;
			&lt;option value="sit"&gt;sit&lt;/option&gt;
		&lt;/select&gt;
	&lt;/form&gt;
&lt;/div&gt;

&lt;template id="select-combobox-load"&gt;
	&lt;div class="combobox-wrapper"&gt;
		&lt;div role="combobox" aria-expanded="false" aria-haspopup="listbox" data-wb5-bind="aria-owns@popupId"&gt;
			&lt;input autocomplete="off" data-rule-fromListbox="true" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, value@filter" aria-autocomplete="list" aria-activedescendant="" /&gt;
		&lt;/div&gt;
		&lt;div data-wb5-bind="id@popupId" role="listbox" class="hidden"&gt;
			&lt;template data-slot-elm="" data-wb5-template="sub-template-listbox"&gt;
				&lt;ul class="list-unstyled mrgn-bttm-0"&gt;
					&lt;li
						class="brdr-bttm"
						role="option"
						data-wb5-for="option in wbLoad"
						data-wb5-if="!parent.filter.length || parent.config.compareLowerCase(option,parent.filter)"
						data-wb5-on="select@select(option); live@parent.nbdispItem(wb-nbNode)" &gt;{{ option }}&lt;/li&gt;
				&lt;/ul&gt;
			&lt;/template&gt;
		&lt;/div&gt;
	&lt;/div&gt;
&lt;/template&gt;</code></pre>

<h2>JS Update for the similar text compare function</h2>
<pre><code>similarText: function( str1, str2, passRatio ) {

// Function to compare the distance between two word.
function matchDistance( s1, s2 ) {
	var arr = [];

	for ( var i = 0; i <= s1.length; i++ ) {
		var lastValue = i;

		for ( var j = 0; j <= s2.length; j++ ) {
			if ( i === 0 ) {
				arr[j] = j;
			}
			else {
				if ( j > 0 ) {
					var newValue = arr[ j - 1 ];
					if ( s1.charAt( i - 1 ) !== s2.charAt( j - 1 ) ) {
						newValue = Math.min( Math.min( newValue, lastValue ), arr[ j ] ) + 1;
					}
				arr[ j - 1 ] = lastValue;
					lastValue = newValue;
				}
			}
		}
		if ( i > 0 ) {
			arr[ s2.length ] = lastValue;
		}
	}
	return arr[ s2.length ];
}

function similartextCheck( s1, s2 ) {

	s1 = s1.replace( /[\-\/]|_/g, " " ).replace( /[^\w\s]|_/g, "" ).trim().toLowerCase();
	s2 = s2.replace( /[\-\/]|_/g, " " ).replace( /[^\w\s]|_/g, "" ).trim().toLowerCase();

	var arrShorter = s1.split( " " ),
		arrLonger  = s2.split( " " );

	if ( s1.length > s2.length ) {
		arrShorter = s2.split( " " );		
		arrLonger  = s1.split( " " );
	}


	if ( !arrLonger.length || !arrShorter.length ) {
		return 100;
	}

	var matchChars = 0,
		maxChars = 0,
		longer = "",
		shorter = "";

	for ( var i = 0; i < arrShorter.length; i++ ) {				
		var bestMatch = 0,
			fullLength = 0,
			fullMatch = false;

		for ( var j=0; j < arrLonger.length; j++ ) {			

			shorter = arrShorter[ i ];
			longer = arrLonger[ j ];

			if( longer.indexOf( shorter ) >= 0 ) {

				var currentMatch = longer.length;

				if ( ( !fullMatch ) || ( currentMatch < bestMatch ) ) {
					bestMatch = longer.length;
					fullLength = longer.length;
				}
				fullMatch = true;							
			}
			else if( !fullMatch ) {
				currentMatch = longer.length - matchDistance( shorter, longer );

				if( currentMatch > bestMatch ) {
					bestMatch  = currentMatch;
					fullLength = longer.length;
				}
			}
		}
		matchChars = matchChars + bestMatch;		
		maxChars = maxChars + fullLength;
	}

	if ( matchChars === 0 ) {
		return 0;
	}

	return ( matchChars / maxChars ) * 100;
}

// Check agains the pass Ratio
var result = similartextCheck( str1, str2 );
passRatio = parseInt( passRatio );
if ( result >= passRatio ) {
	return true;
}
return false;
}</code></pre>

{% endraw %}
{:/}
