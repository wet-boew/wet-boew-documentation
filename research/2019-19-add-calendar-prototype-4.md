---
published: true
layout: default-theme-wet-boew-en
title: Add to Calendar prototype 4 - Details summary and schema.org/event - new class wb-addcal-location for when the property location is not used
description: Prototype 4
modified: 2020-02-10

script_pgbttm_src: //wet-boew.github.io/themes-dist/GCWeb/GCWeb/js/theme.min.js
script_pgbttm2_src: 2019-assets/add-to-calendar/1-add-to-calendar.js
script_pgbttm3_src: //wet-boew.github.io/themes-dist/GCWeb/wet-boew/js/deps/jsonpointer.js
---

Prototype of an ```Add to Calendar``` widget using details summary pattern and Schema.org/Event RDFa markup.


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
	background: rgb(139, 189, 225);
}
[role=option]:hover {
	cursor: default;
}

.max-content,.max-content[open]{
	display: inline-block !important;
}

</style>

<h1 property="name" id="wb-cont">Add to calendar</h1>
<div class="wb-addcal mrgn-bttm-md" typeof="Event">
	<h2 property="name">Canux20</h2>
	<p property="description">CanUX (pronounced “canucks”, like the hockey team) is an independent, locally-grown, non-profit, volunteer-driven event created for people who want to learn and share their expertise about user experience, and how our profession contributes to making things work better for everyone.</p>
	<h3>Date and time</h3>	
	<p>Start date: <time property="startDate" content="20200127T120000Z" datetime="2020-01-27 7:00">Monday, Jan 27, 2020, 7:00am EST</time><br>
	End date: <time property="endDate" content="20200127T170000Z" datetime="2020-01-29 12:00">Wednesday, Jan 29, 2020, 12:00pm EST</time></p>
	<h3>Location</h3>
	<!--<P><a href="https://www.historymuseum.ca/" class="wb-addcal-location">Canadian <span lang="en">Museum</a< of History</a></p>-->
	<div class="mrgn-bttm-md" property="location" typeof="Place">
		<span property="name">Shaw Centre</span>
		<div class="address" property="address" typeof="PostalAddress">
			<span property="streetAddress">55 Colonel By Drive</span><br>
			<span property="addressLocality">Ottawa</span>,
			<span property="addressRegion">ON</span>
			<span property="postalCode">K1N 9J2</span>
		</div>
	</div>
</div>
<div class="wb-addcal mrgn-bttm-md" typeof="Event">
	<h2 property="name">Ice sculptures on the Kipnes Lantern</h2>
	<p property="description">Ice sculptures from the international competition will be featured on the Kipnes Lantern at the National Arts Centre during the 2nd and 3rd weekend of Winterlude. During the 1st weekend a 3D computer generated ice sculpture will also be featured.</p>
	<h3>Date and time</h3>	
	<p><time property="startDate" content="20200217T210000Z" datetime="2020-02-17 16:00">Monday, February 17, 2020 | 4:00 pm</time> to <time property="endDate" content="20200218T040000Z" datetime="2020-02-17 23:00">11:00 pm</time></p>
	<h3>Location</h3>
	<div class="mrgn-bttm-md" property="location" typeof="Place">
		<span property="name">National Arts Centre</span>
		<div class="address" property="address" typeof="PostalAddress">
			<span property="streetAddress">1 Elgin Street</span><br>
			<span property="addressLocality">Ottawa</span>,
			<span property="addressRegion">ON</span>
		</div>
	</div>
</div>
<div class="wb-addcal mrgn-bttm-md" typeof="Event">
	<h2 property="name">Igloo Baratanga</h2>
	<p property="description">A percussion activity for the whole family! Take part in a drum circle and get warmed up. No musical experience required and smiles guaranteed! Come play with us!</p>
	<h3>Date and time</h3>	
	<p><time property="startDate" content="20200208T180000Z" datetime="2020-02-08 13:00">Sunday, February 8, 2020 | 1:00 pm</time> to <time property="endDate" content="20200208T183000Z" datetime="2020-02-08 13:30">1:30 pm</time></p>
	<h3>Location</h3>
	<P class="wb-addcal-location">Snowflake Kingdom, <span lang="fr">Jacques-Cartier</span> Park, Gatineau</p>
	</div>
</div>

{% endraw %}
{:/}
