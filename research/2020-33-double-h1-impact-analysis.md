---
published: true
layout: default-theme-wet-boew-en
title: 2020-33 - Analysis of double h1 impact on search result
description: Research for existing published page that use double h1 and it's impact on the google search result.
modified: 2020-02-18
---


* Expert: @duboisp
* Status: In progress, report incomplete
* Last updated: 2020-02-18
* History:
	* 2020-02-18 - @duboisp - Updated draft, added 28 document and early analysis/recommendation
	* 2020-01-23 - @duboisp - Created a place holder for this document

## Context

Investigate how other are influencing their search result in google search engine and find how we can apply it on our pages in an optimal way to get similar results. This documents mainly focus on the technicality aspect on how it was achieved essentially through semantic HTML and RDF. This research is also to support a new design pattern developed by CRA for page grouping.

In parallel with this research, an UX research is currently ongoing independently by the Web Accessibility Working Group to evaluate the impact of having multiple heading level 1 on a single page for user that consume the information with an assistive technology.

It is possible to have multiple heading level 1 in a single page as per the HTML 5 specification where some particularities might apply. The new outline algorithm described by the HTML specification are not fully implemented and still have unresolved questions/concern. See the discussion in GCWeb issue #1627.


### Related experimental design pattern and discussion

* [Discussion about two (2) heading level 1 in a page](https://github.com/wet-boew/GCWeb/issues/1627)
* [Experimental template with two (2) h1 - index page](https://test.canada.ca/cra/section-menu-design/section-menu-index.html)
* [Experimental template with two (2) h1 - secion page three (3)](https://test.canada.ca/cra/section-menu-design/section-menu-pg3.html)

### Expected results (as January 23)

* Double h1 have an impact on how the search result is display
* Structure data create the impact on search result is display
* We can know for sure if it is the double h1 or the structure date that impact how it is displayed
* double h1 don't seem to impact the search result.
* Double h1 only indicate the label to use when google interpret the structure data.

## Design pattern

A page that contain two h1, where the combination of both is unique, one of them identify a sub-group of pages about one service and the other identify the task, like "Apply", which are unique to for sub-group but might be re-used in other set of pages for other services.

## Recommendation of @duboisp

Early recommendation (might require further testing and research)
* #1 - Related to use case 1 - 2020-02-18 - Improve the structure data with the RDFa markup for the breadcrumb in the GCWeb template. Like defining the typeof "BreadcrumbList". Considering the HTML markup semantic that is currently used for the breadcrumb, I don't think we need to re-define each ListItem. It could worth to test it.
* #2 - Related to use case 1 - 2020-02-18 - Double heading level one (1) seem to provide shorter label which makes sense when search result are grouped together. However, when the search result is alone, the search engine seem to fall back on the page title.

## Todo

* Expand the page structure of document 28, as it was done for document 2 in order to confirm the label taken by the search engine. To support early recommendation #2
* Complete the analysis for use case 1, by expanding documents related to document 5.
* Expand documents for use case 3 and 6 to see if it support recommendation #2
* Share our finding with the UK
* Analysis how the structure data and HTML is used for "People also ask" section (use case 2 and 5)
* Analysis how the structure data and HTML is used for the first result (use case 4)

## Use case

### Use Case 1 - Sub-links - UK - Travel advisory
* Document 1 - Google search - uk travel advisory turkey
* Document 2 - Pages - Turkey travel advice
* Document 3 - Google search - UK travel advisory
* Document 28 - USA travel advice - GOV.UK
* Document 4 - Page - Foreign travel advice
* Document 5 - Google search - UK turkey travel
* Document 6 - Entry requirements
* Document 7 - Terrorism
* Document 8 - Travel advice help and support
* Document 9 - Health
* Document 10 - Safety and security
* Document 11 - Local laws and customs

Observation of @duboisp:
* We can note that from the document 3, the sub link name seem to be coming from one of the multiple heading level 1 in the respective page like document 2 and document 28.
* The document 1 show the link name is the page title of document 2.
* Search result grouping: I can't say the grouping is done because of having double heading level 1. The schema:BreadcrumList defined in all the sub page might have heavily contributed at that content organisation.


### Use Case 2 - People also ask - UK - Travel advisory
* Document 5 - Google search - UK turkey travel
* Document 12 - Is it safe to travel to Turkey from UK?
* Document 13 - Is it safe to holiday in Turkey at the moment?
* Document 14 - Is it safe to travel to Turkey now 2019?
* Document 15 - What is the travel advice for Turkey?
* Document 16 - Which is the best month to visit Turkey?

### Use Case 3 - Sub-links - Canadian EI maternity benefits
* Document 17 -- Google search - EI maternity benefits
* Document 18 - EI maternity and parental benefits
* Document 19 - EI maternity - 4. Apply
* Document 20 - EI maternity - 5. After you apply
* Document 21 - EI maternity - EI maternity and parental
* Document 22 - EI maternity - Special circumstances
* Document 23 - EI maternity - 3. How much you could receive

### Use Case 4 - First link - uk child benefit
* Document 24 - Google search - uk child benefit
* Document 25 - Child Benefit - Entitledto

### Use Case 5 - People also ask - uk child benefit
* Document 24 - Google search - uk child benefit

### Use Case 6 - Full block of content in search result
* Document 24 - Google search - uk child benefit
* Document 26 - Claim Child Benefit
* Document 27 - Claim Child Benefit - What you'll get


## Documents

### Document 1 - Google search - uk travel advisory turkey

* Search term: uk travel advisory turkey
* Snapshot date: 2020-02-16
* [Search pages link](https://www.google.com/search?q=uk+travel+advisory+turkey)
* Top page link: [https://www.gov.uk/foreign-travel-advice/turkey](https://www.gov.uk/foreign-travel-advice/turkey)
* Display as: [Featured Snippets](https://support.google.com/websearch/answer/9351707)

Google search result visual:

{:.img-responsive}
![Google search result where uk result is first]({{ "2020-33-docs/document-1-google-search-result.png" }})


### Document 2 - Pages - Turkey travel advice

* Page title: Turkey travel advice - GOV.UK
* Page URL: [https://www.gov.uk/foreign-travel-advice/turkey](https://www.gov.uk/foreign-travel-advice/turkey)
* Snapshot date: 2020-02-16
* Heading level 1
	* Turkey
	* Summary
* Sub-page group
	* Name: Foreign travel advice
	* Mark as element: paragraph
	* Structure data: Schema.org breadcrumb list item at position 4.
* How page group is coded: See h01 code sample
* Page screen capture: [Visual](2020-33-docs/document-2-fullpage.png)
* Page source code: [Source code](2020-33-docs/document-2-source-code.html)
* Page Live DOM: [DOM](2020-33-docs/document-2-DOM.html)
* Alternative:
	* [atom+xml](2020-33-docs/document-2-alternate.atom)
	* [print - Source code](2020-33-docs/document-2-alt-print-source-code.html)
	* [print - DOM](2020-33-docs/document-2-alt-print-DOM.html)


#### Technical Review Notes of @duboisp

General
* Google search result took the page title to identify the result
* The content of the page is duplicated, one copy in HTML and another copy in JSON-LD escaped in Javascript.
* Seem to use a custom vocabulary prefixed and possibly named "govuk" which is unregistered as a  whatwg MetaExtensions wiki
* Using meta for Cross-site request forgery protection token for Ruby on Rails - https://apidock.com/rails/ActionView/Helpers/CsrfHelper/csrf_meta_tag
* Using a non-conforming meta named twitter:image:alt

Structure data:
* There is an ambiguity (possible integrity issue) about the IRI "https://www.gov.uk/foreign-travel-advice/turkey" in regard if this represent the "Article" or the "BreadcrumbList" schema:Thing. Adding a local resource id for the BreadcrumList will quickly fix this ambiguity.

Accessibility (WCAG):
* They are using aria when not needed (have the role button to an anchor, line 170)
* Using a non-conforming Other metadata names "govuk"
* Heading h07 and h08 are confusing, they are located in two different form
* Comment: There is a lot of heading level 2 related to the web page footer.

Print page:
* Contain a JSON-LD structure for the breadcrumb only

Atom:
* Minimal feed file

#### Details and structure

Note: Documents outline (heading) and document sectioning outline are calculated based on the current live DOM, after the page load and Javascript has ran.

Document outline (Heading):

* Heading L1 (h01) - Turkey
	* Heading L2 (h02) - Subscriptions
* Heading L1 (h03) - Summary
	* Heading L2 (h04) - Related content
	* Heading L2 (h05) - Explore the topic
	* Heading L2 (h06) - Is this page useful?
		* Heading L3 (h07) - Help us improve GOV.UK
		* Heading L3 (h08) - Help us improve GOV.UK
	* Heading L2 (h09) - Transition period
	* Heading L2 (h10) - Services and information
	* Heading L2 (h11) - Departments and policy
	* Heading L2 (h12) - Support links

Document sectioning outline (body):

* div (role=region) - [ aria-label="cookie banner", no heading ]
* header (role=banner) - [no heading]
	* form - (role=search) [no heading]
* main (role=main)
	* h01 - Heading L1
	* aside (role=complementary) [ no heading ]
		* nav (role=navigation) [  aria-label="Travel advice pages", no heading ]
		* section
			* h02 - Heading L2
	* h03 - Heading L1
	* nav (role=navigation) [ aria-label="Pagination", no heading ]
	* -- Visual end of main content here --
	* h04 - Heading L2
	* nav (role=navigation) [ aria-labelledby="h04", heading outside the section, no heading inside ]
	* nav (role=navigation) [ aria-labelledby="h05" ]
		* h05 - Heading L2
* h06 - Heading L2
	* h07 - Heading L3 [Seems disconnected based on how the DOM hierarchy is structured]
	* h08 - Heading L3 [Seems disconnected based on how the DOM hierarchy is structured]
* footer (role=contentinfo)
	* h09 - Heading L2
	* h10 - Heading L2
	* h11 - Heading L2
	* h12 - Heading L2
* script type="application/ld+json
* script type="application/ld+json

Document structure data outline (JSON-LD only)
* JSON-LD - Article
	* mainEntityOfPage ^^WebPage
	* publisher ^^Organization
		* logo ^^ImageObject
	* author ^^Organization
	* about []^^Thing
* JSON-LD - BreadcrumbList
	* itemListElement []^^ListItem
* RDFa - Property for IRI ```https://www.gov.uk/foreign-travel-advice/turkey```
	* og:image:alt
	* og:image
	* og:description
	* og:title
	* og:url
	* og:type
	* og:site_name
	* og:image

HTML meta elements
* charset="utf-8"
* http-equiv="Content-Type" content="text/html; charset=utf-8"
* name="viewport" content="width=device-width, initial-scale=1"
* name="theme-color" content="#0b0c0c"
* name="description" content="Latest travel advice for Turkey including safety and security, entry requirements, travel warnings and health"
* name="csrf-token" content="OFXOaLfsaQ3TtXlWjmxo104Bbw/n2IqvOubqoHjC3dlYNMJKOQ+89BSLWB/11SlwFmzKkxsQqfCcY4+KfgJ8sg=="
* name="csrf-param" content="authenticity_token"
* name="twitter:image:alt" content=""
* name="twitter:image" content="https://assets.publishing.service.gov.uk/media/5d08da2340f0b620109f08c6/190618_Turkey_jpeg.jpg"
* name="twitter:card" content="summary_large_image"
* name="govuk:taxon-slugs" content="living-in-turkey,travelling-to-turkey"
* name="govuk:taxon-slug" content="living-in-turkey"
* name="govuk:taxon-ids" content="88d5c77b-bc40-49aa-9436-caeaf997afc2,074a7995-ca29-4262-ac28-f84c54cc0cd2"
* name="govuk:taxon-id" content="88d5c77b-bc40-49aa-9436-caeaf997afc2"
* name="govuk:themes" content="world/all"
* name="govuk:analytics:organisations" content="<D13>"
* name="govuk:content-has-history" content="true"
* name="govuk:content-id" content="385d62b6-1fb3-4b29-80f3-cef2efa73cce"
* name="govuk:schema-name" content="travel_advice"
* name="govuk:publishing-application" content="travel-advice-publisher"
* name="govuk:format" content="travel_advice"
* name="govuk:rendering-application" content="government-frontend"
* property="og:image:alt" content=""
* property="og:image" content="https://assets.publishing.service.gov.uk/media/5d08da2340f0b620109f08c6/190618_Turkey_jpeg.jpg"
* property="og:description" content="Latest travel advice for Turkey including safety and security, entry requirements, travel warnings and health"
* property="og:title" content="Turkey travel advice"
* property="og:url" content="https://www.gov.uk/foreign-travel-advice/turkey"
* property="og:type" content="article"
* property="og:site_name" content="GOV.UK"
* property="og:image" content="https://assets.publishing.service.gov.uk/static/opengraph-image-a1f7d89ffd0782738b1aeb0da37842d8bd0addbd724b8e58c3edbc7287cc11de.png"



#### Code sample

h01

```
<p class="gem-c-title__context">
      Foreign travel advice
    </p>
  <h1 class="gem-c-title__text ">
    Turkey
  </h1>
```

h03
```
    <h1 class="part-title">
      Summary
    </h1>
```

First json-ld script tag
```
{
	"@context":"http://schema.org",
	"@type":"Article",
	"mainEntityOfPage":{
		"@type":"WebPage",
		"@id":"https://www.gov.uk/foreign-travel-advice/turkey"
	},
	"headline":"Turkey travel advice",
	"datePublished":"2013-03-20T00:00:00.000+00:00",
	"dateModified":"2020-02-05T17:20:54.000+00:00",
	"description":"Latest travel advice for Turkey including safety and security, entry requirements, travel warnings and health",
	"publisher":{
		"@type":"Organization",
		"name":"GOV.UK",
		"url":"https://www.gov.uk",
		"logo":{
			"@type":"ImageObject",
			"url":"https://assets.publishing.service.gov.uk/government-frontend/govuk_publishing_components/govuk-logo-e5962881254c9adb48f94d2f627d3bb67f258a6cbccc969e80abb7bbe4622976.png"
		}
	},
	"image":[
		"https://assets.publishing.service.gov.uk/media/5d08da2340f0b620109f08c6/190618_Turkey_jpeg.jpg"
	],
	"author":{
		"@type":"Organization",
		"name":"Foreign \u0026 Commonwealth Office",
		"url":"https://www.gov.uk/government/organisations/foreign-commonwealth-office"
	},
	"about":[
		{
			"@context":"http://schema.org",
			"@type":"Thing",
			"sameAs":"https://www.gov.uk/world/living-in-turkey"
		},
		{
			"@context":"http://schema.org",
			"@type":"Thing",
			"sameAs":"https://www.gov.uk/world/travelling-to-turkey"
		}
	],
	"articleBody":"\u003cp\u003eThe Foreign and Commonwealth Office (FCO) advise against all travel to areas within 10 km of the border with Syria, except the city of Kilis (see below).\u003c/p\u003e\n\n\u003cp\u003eThe FCO advise against all but essential travel to:\u003c/p\u003e\n\n\u003cul\u003e\n  \u003cli\u003eall other areas of Sirnak, Kilis (including Kilis city) and Hatay provinces\u003c/li\u003e\n  \u003cli\u003ethe provinces of Diyarbakir, Tunceli and Hakkari\u003c/li\u003e\n\u003c/ul\u003e\n\n\u003cp\u003eFor more information, see \u003ca href=\"/foreign-travel-advice/turkey/safety-and-security\"\u003eLocal travel\u003c/a\u003e and \u003ca href=\"/foreign-travel-advice/turkey/terrorism\"\u003eTerrorism\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eBritish nationals made over 2.3 million visits to Turkey in 2018. Most visits are trouble free. Be alert to your surroundings and remain vigilant in crowded places popular with foreign nationals, including during festival periods.\u003c/p\u003e\n\n\u003cp\u003eA Pegasus Airlines domestic flight from Izmir crashed on landing at Istanbul’s Sabiha Gökçen International Airport on 5 February. The airport has been closed. If you’re due to travel to or from Sabiha Gökçen airport, you should check with your airline for updates before travelling to your departure airport.\u003c/p\u003e\n\n\u003cp\u003eA 6.8 magnitude earthquake hit Elazig and neighbouring provinces in the east of Turkey on the evening of 24 January, causing damage to local buildings and a number of fatalities.  A number of aftershocks have also been reported.  A disaster response is underway. You should avoid the immediate vicinity, and follow the advice of local authorities.\u003c/p\u003e\n\n\u003cp\u003eFollowing the death of Iranian General Qasem Soleimani in a US strike in Baghdad on 3 January, the incident has led to increased tensions in the region. There is a possibility of an increased threat against Western interests and the security situation could worsen with little warning. You should remain vigilant and keep up to date with the latest developments, including via the media and \u003ca href=\"/foreign-travel-advice/turkey/email-signup\"\u003ethis travel advice\u003c/a\u003e.\u003c/p\u003e\n\n\u003cp\u003eTurkey is conducting a military operation in north-eastern Syria. This has led to heightened tensions in border regions, including cross-border rocket and mortar attacks into Turkey, close to the border. If you’re in provinces bordering Syria, you should remain extremely vigilant and keep up to date with developments via local media and this travel advice. See \u003ca href=\"/foreign-travel-advice/turkey/safety-and-security#syrian-border\"\u003eSyrian border\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eMany parts of Turkey are subject to earthquakes. You should familiarise yourself with safety procedures in the event of an earthquake and follow the advice of the local authorities. See \u003ca href=\"/foreign-travel-advice/turkey/natural-disasters\"\u003eNatural disasters\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eThe situation has calmed following an attempted coup in July 2016. A state of emergency imposed after the coup attempt has been lifted, although some restrictions remain in place. See \u003ca href=\"/foreign-travel-advice/turkey/safety-and-security#political-situation\"\u003ePolitical situation\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eTerrorists are very likely to try to carry out attacks in Turkey. Terrorist groups, including Kurdish groups, Daesh (formerly referred to as ISIL) and far left organisations, continue to plan and carry out attacks. Further attacks could be indiscriminate. Most attacks have taken place in the south-east of the country, and in Ankara and Istanbul. While there is a potential that citizens from western countries may be targets or caught up in attacks, particularly in the major cities, attacks are most likely to target the Turkish state, civilians and demonstrations. You should be vigilant, follow the advice of local security authorities, monitor media reports and keep up to date with this travel advice. See \u003ca href=\"/foreign-travel-advice/turkey/terrorism\"\u003eTerrorism\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eIt’s illegal to be a member or supporter of a terrorist organisation in Turkey, including expressions of support on social media. Some organisations in the region though not proscribed in the UK, such as the YPG and the Gülen Movement are illegal in Turkey.\u003c/p\u003e\n\n\u003cp\u003eBritish nationals need a visa to travel to Turkey, except for some cruise ship passengers arriving at sea ports for visits of up to 72 hours. If you’re visiting Turkey as a tourist or on business, get an \u003ca rel=\"external\" href=\"https://www.evisa.gov.tr/\"\u003ee-Visa\u003c/a\u003e online before you travel. Make sure you use the official e-Visa website so you get a genuine visa without paying additional fees. See \u003ca href=\"/foreign-travel-advice/turkey/entry-requirements#visas\"\u003eVisas\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eYou should carry your passport and a printed copy of your e-visa (if applicable) or residence permit at all times. In some busy areas, especially Istanbul, the Turkish authorities are stopping members of the public to conduct ID checks. See \u003ca href=\"/foreign-travel-advice/turkey/local-laws-and-customs\"\u003eLocal laws and customs\u003c/a\u003e\u003c/p\u003e\n\n\u003cp\u003eThere have been reports of an increase in holidaymakers being encouraged to submit a claim for personal injury if they have experienced gastric illness during their stay. You can find more information about the action you can take if you have suffered a personal injury on the \u003ca rel=\"external\" href=\"https://www.citizensadvice.org.uk/law-and-courts/legal-system/personal-injury/personal-injuries/\"\u003eCitizens Advice website\u003c/a\u003e. You should only consider pursuing a complaint or claim if you have genuinely suffered from injury or illness. If you make a false or fraudulent claim, you may face legal proceedings in the UK or Turkey.\u003c/p\u003e\n\n\u003cp\u003eYou can contact the emergency services by calling 155 (police), 112 (ambulance) and 110 (fire).\u003c/p\u003e\n\n\u003cp\u003eIf you’re abroad and you need emergency help from the UK government, contact the \u003ca href=\"https://www.gov.uk/government/world/embassies\"\u003enearest British embassy, consulate or high commission\u003c/a\u003e. Consular support is severely limited in parts of Turkey where the FCO advise against travel, and limited in the areas where the FCO advise against all but essential travel.\u003c/p\u003e\n\n\u003cp\u003eTake out comprehensive \u003ca href=\"https://www.gov.uk/foreign-travel-insurance\"\u003etravel and medical insurance\u003c/a\u003e before you travel.\u003c/p\u003e\n"
}
```

Second json-ld script tag
```
{
	"@context":"http://schema.org",
	"@type":"BreadcrumbList",
	"itemListElement":[
		{
			"@type":"ListItem",
			"position":1,
			"item":{
				"name":"Home","@id":"https://www.gov.uk/"
			}
		},
		{
			"@type":"ListItem",
			"position":2,
			"item":{
				"name":"Passports, travel and living abroad",
				"@id":"https://www.gov.uk/browse/abroad"
			}
		},
		{
			"@type":"ListItem",
			"position":3,
			"item":{
				"name":"Travel abroad",
				"@id":"https://www.gov.uk/browse/abroad/travel-abroad"
			}
		},
		{
			"@type":"ListItem",
			"position":4,
			"item":{
				"name":"Foreign travel advice",
				"@id":"https://www.gov.uk/foreign-travel-advice"
			}
		}
	]
}
```




### Document 3 - Google search - UK travel advisory

* Search term: UK travel advisory
* Snapshot date: 2020-02-17
* [Search pages link](https://www.google.com/search?q=UK+travel+advisory)
* Notes:
	* Feature a right panel about the UK
	* Include result for "UK travel **advice**"
	* Show a travel guide of 4 items with image, cities, air plane and motel price
* Display as: A master entry, with a set of sub, more specific pages
	* Main link: https://www.gov.uk/foreign-travel-advice
	* Sub link:
		* Turkey: https://www.gov.uk/foreign-travel-advice/turkey
			* The name correspond to one of the in page h1s
		* USA: https://www.gov.uk/foreign-travel-advice/usa
			* The name correspond to one of the in page h1s
			* That page seems to be designed similarly to document-2
		* Hong Kong: https://www.gov.uk/foreign-travel-advice/hong-kong
			* The name correspond to one of the in page h1s
			* That page seems to be designed similarly to document-2
		* Spain: https://www.gov.uk/foreign-travel-advice/spain
			* The name correspond to one of the in page h1s
			* That page seems to be designed similarly to document-2
		* Canada: https://www.gov.uk/foreign-travel-advice/canada
			* The name correspond to one of the in page h1s
			* That page seems to be designed similarly to document-2
		* Egypt: https://www.gov.uk/foreign-travel-advice/egypt
			* The name correspond to one of the in page h1s
			* That page seems to be designed similarly to document-2

Google search result visual:

{:.img-responsive}
![Google search result where uk result is first]({{ "2020-33-docs/document-3-google-search-result.png" }})



### Document 4 - Page - Foreign travel advice

* Page title: Foreign travel advice - GOV.UK
* Page URL: [https://www.gov.uk/foreign-travel-advice](https://www.gov.uk/foreign-travel-advice)
* Snapshot date: 2020-02-17
* How page group is coded: See h01 code sample
* Page screen capture: [Visual](2020-33-docs/document-4-fullpage.png)
* Page source code: [Source code](2020-33-docs/document-4-source-code.html)
* Page Live DOM: [DOM](2020-33-docs/document-4-DOM.html)
* Alternative: [atom+xml](2020-33-docs/document-4-alternate.atom)
* Heading level 1: Foreign travel advice


#### Technical notes of @duboisp

General
* Google search result took the page title to identify the result
* Seem to use a custom vocabulary prefixed and possibly named "govuk" which is unregistered as a whatwg MetaExtensions wiki

Structure data:
* The page contain RDFa lite information with the open graph vocabulary.

Accessibility (WCAG):
* They are using aria when not needed (have the role button to an anchor)
* Using a non-conforming Other metadata names "govuk"
* Heading h30 and h31 are confusing, they are located in two different form
* Comment: There is a lot of heading level 2 related to the web page footer.

Atom:
* List of country with the latest update that link to other feed.


#### Details and structure

Note: Documents outline (heading) and document sectioning outline are calculated based on the current live DOM, after the page load and Javascript has ran.

Document outline (Heading):

* Heading L1 (h01) - Foreign travel advice
	* Heading L2 (h02) - Get updates
	* Heading L2 (h03) - Countries or territories
		* Heading L3 (h04) - Countries starting with A
		* Heading L3 (h05) - Countries starting with B
		* Heading L3 (h06) - Countries starting with C
		* Heading L3 (h07) - Countries starting with D
		* Heading L3 (h08) - Countries starting with E
		* Heading L3 (h09) - Countries starting with F
		* Heading L3 (h10) - Countries starting with G
		* Heading L3 (h11) - Countries starting with H
		* Heading L3 (h12) - Countries starting with I
		* Heading L3 (h13) - Countries starting with J
		* Heading L3 (h14) - Countries starting with K
		* Heading L3 (h15) - Countries starting with L
		* Heading L3 (h16) - Countries starting with M
		* Heading L3 (h17) - Countries starting with N
		* Heading L3 (h18) - Countries starting with O
		* Heading L3 (h19) - Countries starting with P
		* Heading L3 (h20) - Countries starting with Q
		* Heading L3 (h21) - Countries starting with R
		* Heading L3 (h22) - Countries starting with S
		* Heading L3 (h23) - Countries starting with T
		* Heading L3 (h24) - Countries starting with U
		* Heading L3 (h25) - Countries starting with V
		* Heading L3 (h26) - Countries starting with W
		* Heading L3 (h27) - Countries starting with Y
		* Heading L3 (h28) - Countries starting with Z
	* Heading L2 (h29) - Is this page useful?
		* Heading L3 (h30) - Help us improve GOV.UK
		* Heading L3 (h31) - Help us improve GOV.UK
	* Heading L2 (h32) - Transition period
	* Heading L2 (h33) - Services and information
	* Heading L2 (h34) - Departments and policy
	* Heading L2 (h35) - Support links


Document sectioning outline (body):

* div (role=region) - [ aria-label="cookie banner", no heading ]
* header (role=banner) - [no heading]
	* form - (role=search) [no heading]
* main (role=main)
	* header
		* h01 - Heading L1
	* section
		* form [no heading, for content filtering]
		* h02 - Heading L2
		* section [no heading, for content subscription]
	* section [aria-live="polite"]
		* h03 - Heading L2
		* h04 - Heading L3
		* h05 - Heading L3
		* h06 - Heading L3
		* h07 - Heading L3
		* h08 - Heading L3
		* h09 - Heading L3
		* h10 - Heading L3
		* h11 - Heading L3
		* h12 - Heading L3
		* h13 - Heading L3
		* h14 - Heading L3
		* h15 - Heading L3
		* h16 - Heading L3
		* h17 - Heading L3
		* h18 - Heading L3
		* h19 - Heading L3
		* h20 - Heading L3
		* h21 - Heading L3
		* h22 - Heading L3
		* h23 - Heading L3
		* h24 - Heading L3
		* h25 - Heading L3
		* h26 - Heading L3
		* h27 - Heading L3
		* h28 - Heading L3
* h29 - Heading L2
	* h30 - Heading L3 [Seems disconnected based on how the DOM hierarchy is structured]
	* h31 - Heading L3 [Seems disconnected based on how the DOM hierarchy is structured]
* footer (role=contentinfo)
	* h32 - Heading L2
	* h33 - Heading L2
	* h34 - Heading L2
	* h35 - Heading L2


Document structure data outline

* JSON-LD - There is no structure data information
* RDFa - Property for IRI ```https://www.gov.uk/foreign-travel-advice```
	* og:image


HTML meta elements

* http-equiv="Content-Type" content="text/html; charset=utf-8"
* charset="utf-8"
* name="description" content="Latest travel advice by country including safety and security, entry requirements, travel warnings and health"
* name="theme-color" content="#0b0c0c"
* name="viewport" content="width=device-width, initial-scale=1"
* name="govuk:section" content="passports, travel and living abroad"
* name="govuk:taxon-slugs" content="countries-living-in,living-abroad,travel-abroad"
* name="govuk:taxon-slug" content="countries-living-in"
* name="govuk:taxon-ids" content="ce9e9802-6138-4fe9-9f33-045ef213be29,d956c72a-246d-4787-af39-00bf58b2ea66,d96e4efc-9c26-4d9b-9fa7-a036b5c11a65"
* name="govuk:taxon-id" content="ce9e9802-6138-4fe9-9f33-045ef213be29"
* name="govuk:themes" content="going-and-being-abroad, going-and-being-abroad-old"
* name="govuk:analytics:organisations" content="<D13>"
* name="govuk:content-id" content="08d48cdd-6b50-43ff-a53b-beab47f4aab0"
* name="govuk:schema-name" content="travel_advice_index"
* name="govuk:publishing-application" content="travel-advice-publisher"
* name="govuk:format" content="travel_advice_index"
* name="govuk:rendering-application" content="frontend"
* property="og:image" content="https://assets.publishing.service.gov.uk/static/opengraph-image-a1f7d89ffd0782738b1aeb0da37842d8bd0addbd724b8e58c3edbc7287cc11de.png"




### Document 5 - Google search - UK turkey travel

* Search term: uk turkey travel
* Snapshot date: 2020-02-18
* [Search pages link](https://www.google.com/search?q=uk+turkey+travel&oq=uk+turkey+travel)
* Notes:
	* Display first result as: A master entry followed by unordered step
	* Next to the second result, there is a section "People also ask" which is a list of 4 choice of questions with expand/collapse
* First result display as: A master entry, with a set of sub, more specific pages
	* Main link text: Turkey travel advice - GOV.UK
	* Main link: https://www.gov.uk/foreign-travel-advice/turkey
	* Sub link:
		* Entry requirements: https://www.gov.uk/foreign-travel-advice/turkey/entry-requirements
		* Terrorism: https://www.gov.uk/foreign-travel-advice/turkey/terrorism
		* Travel advice help and support: https://www.gov.uk/foreign-travel-advice/turkey/travel-advice-help-and-support
		* Health: https://www.gov.uk/foreign-travel-advice/turkey/health
		* Safety and security: https://www.gov.uk/foreign-travel-advice/turkey/safety-and-security
		* Local laws and customs: https://www.gov.uk/foreign-travel-advice/turkey/local-laws-and-customs
* People also ask
	* First displayed question:
		* Is it safe to travel to Turkey from UK? - https://www.theweek.co.uk/turkey/93371/is-turkey-safe-to-visit
		* Is it safe to holiday in Turkey at the moment? - https://www.travelsupermarket.com/en-gb/blog/travel-news/is-it-safe-to-go-to-turkey/
		* Is it safe to travel to Turkey now 2019? - https://turkeytravelplanner.com/details/Safety/should_i_go.html
		* What is the travel advice for Turkey? - https://www.thesun.co.uk/travel/1978432/turkey-safe-travel-advice-latest-holiday/
		* Which is the best month to visit Turkey? - https://www.audleytravel.com/turkey/best-time-to-visit
		* Is Turkey high risk? - https://www.gov.uk/foreign-travel-advice/turkey/terrorism
	* From all those Question, only 1 is from the UK Gov
	* Interesting to note that when we were extracting the link for the question, google has added more and more questions to the expand/collapsible list
		* See screen capture: [document-5-people-also-ask-fullpage.png](2020-33-docs/document-5-people-also-ask-fullpage.png)

Google search result visual:

{:.img-responsive}
![Google search result where uk result is first]({{ "2020-33-docs/document-5-fullpage.png" }})


### Document 6 - Entry requirements

* URL: https://www.gov.uk/foreign-travel-advice/turkey/entry-requirements
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-6-fullpage.png)
* [DOM code](2020-33-docs/document-6-DOM.html)



### Document 7 - Terrorism

* URL: https://www.gov.uk/foreign-travel-advice/turkey/terrorism
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-7-fullpage.png)
* [DOM code](2020-33-docs/document-7-DOM.html)


### Document 8 - Travel advice help and support

* URL: https://www.gov.uk/foreign-travel-advice/turkey/travel-advice-help-and-support
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-8-fullpage.png)
* [DOM code](2020-33-docs/document-8-DOM.html)


### Document 9 - Health

* URL: https://www.gov.uk/foreign-travel-advice/turkey/health
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-9-fullpage.png)
* [DOM code](2020-33-docs/document-9-DOM.html)


### Document 10 - Safety and security

* URL: https://www.gov.uk/foreign-travel-advice/turkey/safety-and-security
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-10-fullpage.png)
* [DOM code](2020-33-docs/document-10-DOM.html)

### Document 11 - Local laws and customs

* URL: https://www.gov.uk/foreign-travel-advice/turkey/local-laws-and-customs
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-11-fullpage.png)
* [DOM code](2020-33-docs/document-11-DOM.html)



### Document 12 - Is it safe to travel to Turkey from UK?

* URL: https://www.theweek.co.uk/turkey/93371/is-turkey-safe-to-visit
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-12-fullpage.png)
* [DOM code](2020-33-docs/document-12-DOM.html)

### Document 13 - Is it safe to holiday in Turkey at the moment?

* URL: https://www.travelsupermarket.com/en-gb/blog/travel-news/is-it-safe-to-go-to-turkey/
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-13-fullpage.png)
* [DOM code](2020-33-docs/document-13-DOM.html)

### Document 14 - Is it safe to travel to Turkey now 2019?

* URL: https://turkeytravelplanner.com/details/Safety/should_i_go.html
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-14-fullpage.png)
* [DOM code](2020-33-docs/document-14-DOM.html)

### Document 15 - What is the travel advice for Turkey?

* URL: https://www.thesun.co.uk/travel/1978432/turkey-safe-travel-advice-latest-holiday/
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-15-fullpage.png)
* [DOM code](2020-33-docs/document-15-DOM.html)

### Document 16 - Which is the best month to visit Turkey?

* URL: https://www.audleytravel.com/turkey/best-time-to-visit
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-16-fullpage.png)
* [DOM code](2020-33-docs/document-16-DOM.html)


### Document 17 -- Google search - EI maternity benefits

* Search term: ei maternity benefits
* Snapshot date: 2020-02-17
* [Search pages link](https://www.google.com/search?q=ei+maternity+benefits&oq=ei+maternity+benefits)
* Notes:
	* Display first result as: A master entry followed by unordered step
	* Second result is a FAQ page
	* Next to the second result, there is a section "People also ask" which is a list of 4 choice of questions
* First result display as: A master entry, with a set of sub, more specific pages
	* Main link text: EI maternity and parental benefits: What these benefits offer ...
	* Main link: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental.html
	* Sub link:
		* 4. Apply: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/apply.html
		* 5. After you apply: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/after-applying.html
		* EI maternity and parental: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/eligibility.html
		* Special circumstances: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/special-circumstances.html
		* 3. How much you could receive: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/benefit-amount.html

Google search result visual:

{:.img-responsive}
![Google search result where uk result is first]({{ "2020-33-docs/document-17-fullpage.png" }})


### Document 18 - EI maternity and parental benefits

* URL: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental.html
* Snapshot date: 2020-02-17
* [Screen capture](2020-33-docs/document-18-fullpage.png)
* [DOM code](2020-33-docs/document-18-DOM.html)

### Document 19 - EI maternity - 4. Apply

* URL: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/apply.html
* Snapshot date: 2020-02-17
* [Screen capture](2020-33-docs/document-19-fullpage.png)
* [DOM code](2020-33-docs/document-19-DOM.html)

### Document 20 - EI maternity - 5. After you apply

* URL: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/after-applying.html
* Snapshot date: 2020-02-17
* [Screen capture](2020-33-docs/document-20-fullpage.png)
* [DOM code](2020-33-docs/document-20-DOM.html)


### Document 21 - EI maternity - EI maternity and parental

* URL: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/eligibility.html
* Snapshot date: 2020-02-17
* [Screen capture](2020-33-docs/document-21-fullpage.png)
* [DOM code](2020-33-docs/document-21-DOM.html)


### Document 22 - EI maternity - Special circumstances

* URL: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/special-circumstances.html
* Snapshot date: 2020-02-17
* [Screen capture](2020-33-docs/document-22-fullpage.png)
* [DOM code](2020-33-docs/document-22-DOM.html)


### Document 23 - EI maternity - 3. How much you could receive

* URL: https://www.canada.ca/en/services/benefits/ei/ei-maternity-parental/benefit-amount.html
* Snapshot date: 2020-02-17
* [Screen capture](2020-33-docs/document-23-fullpage.png)
* [DOM code](2020-33-docs/document-23-DOM.html)


### Document 24 - Google search - uk child benefit


* Search term: uk child benefit
* Snapshot date: 2020-02-17
* [Search pages link](https://www.google.com/search?q=ei+maternity+benefits&oq=ei+maternity+benefits)
* First result display as: Quick answer and a link to: https://www.entitledto.co.uk/help/child-benefit-claim
* Second result is a "People also ask" section
	* Initially displayed:
		* How much is child benefit in UK? - https://www.moneyadviceservice.org.uk/en/articles/claiming-child-benefit
		* Who is entitled to child benefit in UK? - https://www.gov.uk/child-benefit/eligibility
		* How much do you need to earn before you lose child benefit? - https://www.moneyadviceservice.org.uk/en/articles/changes-to-child-benefit-from-2013
		* Is child benefit going up 2019? - https://www.which.co.uk/money/tax/tax-credits-and-benefits/child-benefit-as03c8p5dprb
* Third result is a main link with a set of expandable steps
	* Main link: https://www.gov.uk/child-benefit
	* Main text link: Claim Child Benefit - GOV.UK
	* Initially displayed:
		* How it works
		* What you'll get
		* Eligibility
		* Show more
	* Content is displayed directly in search result
	* Show more display additional 3 sub expandable content
		* How to claim
		* Make a change to your claim
		* Get help with your claim
		* Show less
	* See screen capture: [document-24-expandable-steps-fullpage.png](2020-33-docs/document-24-expandable-steps-fullpage.png)

Google search result visual:

{:.img-responsive}
![Google search result where uk result is first]({{ "2020-33-docs/document-24-fullpage.png" }})



### Document 25 - Child Benefit - Entitledto

* URL: https://www.entitledto.co.uk/help/child-benefit-claim
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-25-fullpage.png)
* [DOM code](2020-33-docs/document-25-DOM.html)


### Document 26 - Claim Child Benefit

* URL: https://www.gov.uk/child-benefit
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-26-fullpage.png)
* [DOM code](2020-33-docs/document-26-DOM.html)


Quick technical note
* heading level 1: Claim Child Benefit
* heading level 1: How it works
* schema.org Question thing named: How it works
* Contain all the question content duplicated as JSON-LD, this don't fully match the current page displayed content


### Document 27 - Claim Child Benefit - What you'll get

* URL: https://www.gov.uk/child-benefit/what-youll-get
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-27-fullpage.png)
* [DOM code](2020-33-docs/document-27-DOM.html)

Quick technical note
* heading level 1: Claim Child Benefit
* heading level 1: What you'll get
* Don't contains all the questions.


### Document 28 - USA travel advice - GOV.UK

* URL: https://www.gov.uk/foreign-travel-advice/usa
* Snapshot date: 2020-02-18
* [Screen capture](2020-33-docs/document-28-fullpage.png)
* [DOM code](2020-33-docs/document-28-DOM.html)
