---
published: true
layout: default-theme-wet-boew-en
title: Combobox prototype 8 with fieldflow - Datalist JSON suggestion - Research and finding
description: Fieldflow rendering a combobox
modified: 2018-05-16

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2018-assets/2018-1-combobox3.js
script_pgbttm3_src: 2018-assets/2018-1-combobox-fieldflow.js
---

Working prototype with a modified version of fieldflow and combobox plugin.

If the typed content are not from the list, then it redirect the user into a generic page. If the typed content match one of the option, then it will be redirect to the linked page associated to that item.

{::nomarkdown}

{% raw %}


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
/*[role=combobox]:after {
	content: "\25BC\a0";
}*/
</style>


<div class="wb-frmvld">
  <form action="submited-contact-us-page.html">
      <p>If you have questions about, ask away!</p>
    <div id="test1" class="wb2-fieldflow" data-wb2-fieldflow='{ "noreqlabel": true, "isoptional": true, "noForm": true, "defaultselectedlabel":"Popular questions", "renderas":"combobox", 


    "defaultIfNone": { "action": "query", "name": "question" }



     }' data-wb-combobox='{ "templateID": "combobox_custom_template" }'>

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
			<input autocomplete="off" data-rule-fromListbox="true" data-wb5-bind="id@fieldId, aria-controls@popupId, value@selectValue" aria-autocomplete="list" aria-activedescendant="" />
		</div>
		<div data-wb5-bind="id@popupId" role="listbox" class="hidden">
			<template data-slot-elm="" data-wb5-template="sub-template-listbox">
				<p>Showing <span data-wb5-text="options.wbActive">0</span> of <span data-wb5-text="options.wbLen">0</span> </p>
				<ul class="list-unstyled">
					<li 
						class="brdr-bttm" 
						role="option" 
						data-wb5-for="option in options" 
						data-wb5-if="!parent.filter.length || option.value.indexOf(parent.filter) !== -1"
						data-wb5-on="select@select(option.value); live@parent.nbdispItem(wb-nbNode)" >{{ option.textContent }}</li>
				</ul>
				<p role="option" data-wb5-on="select@select('default')">Default</p>
			</template>
		</div>
	</div>
</template>


<label for="id_select">Please choose an option</label>
<select id="id_select" class="wb-combobox" name="selLoremIpsum" data-wb-load="2018-assets/2018-1-suggest.json#/suggestions">
	<option value="Lorem">Lorem</option>
	<option value="ipsum">ipsum</option>
	<option value="dolor">dolor</option>
	<option value="sit">sit</option>
</select>


{% endraw %}
{:/}