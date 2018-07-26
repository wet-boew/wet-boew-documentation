---
published: true
layout: default-theme-wet-boew-en
filename_fr: index-fr
title: Projects - Web Experience Toolkit (WET) documentation
description: List of projects related to WET.
modified: 2018-07-26
---


## Active project

Updated: 2018-07-26


### Accessibility
* Reviewing and validating open github issue
* Documenting basic HTML design pattern
* WCAG 2.1 Level AA conformance check for existing features
* Evaluate web accessibility compliance for wb5 features
* **Last updated:** July 26, 2018
* **Progress check history**: 2018-07-26; 2018-06-20; 2018-05-17; 2018-04-10; 2018-04-03; 2018-03-14; 2018-02-27; 2018-02-20
* **History:**
	* (2018-07-26) Created a github project to triage accessibility related issue - [https://github.com/wet-boew/wet-boew/projects/2](https://github.com/wet-boew/wet-boew/projects/2)
	* (2018-06-20) Tested a few issue reproducibility, fixed #8400 (Tabs on Google Chrome) 
	* (2018-05-17) WIP: #552 (Mobile checklist) and #8238 (Validation error in Mobile menu)
	* (2018-04-10) PR submited for pie chart labeling
	* (2018-03-14) On going - review github issues and fixing current open issue.
	* (2018-02-13) Validation of issue labelled "Work: Accessibility" which are open and the closed ones with the label "State: Going Stale".

### Design system
Design system to standardize the visual language and user experience of our digital collaboration tools. The system will encompass visual elements, components and communications.
* **Last updated:** June 20, 2018
* **Current status:** Basic visual for forms
* **Current project phase:** Phase I - Visual and basic elements.
* **Deliverable:** Prototype downloadable in photoshop, Illustrator and Adobe XD files. And eventually the corresponding HTML code conforming to WCAG 2.0/2.1 Level AA.
* **Notes:** That design system might replace the wet-boew style guide.
* **Project homepage:** [#GCDigital Design System](https://gctools-outilsgc.gitbooks.io/-gcdigital-design-system/content/)
* **History:**
	* (2018-06-20) Common UI was draw. Currently they are creating prototype (HTML code) behind it. This project might get renamed in a near future.
	* (2018-05-17) Seems to have started phase II
	* (2018-02-26) Basic visual for forms
	* (2018-02-13) Working on the visual look for the design system.

### Combobox (autocomplete/suggestion)
[ was: Improved datalist (autocomplete/suggestion) ]
Simulate a datalist that work uniformly through browser implementation and contains more functionality compared as described in the HTML5.3 spec such as
* Limit the number of display results
* Provide the option on how to apply the filter (ex: startWith; word; any; Levenshtein distance; conditional filter)
* Be able to customize the displayed suggestion. A suggestion can include link, images and other thing
* Be able to highlight the filtered keyword, like bolding the text filter character in suggestion
* Be able to load suggestion from a JSON file, CSV or have it binded to another features
* Be keyboard accessible as per the accessible default pattern
* Be able to force the user to choose a displayed option
* Be able to include a catch all default option that would always appear as an option
* Fix datalist related [github issue](https://github.com/wet-boew/wet-boew/issues?q=is%3Aopen+is%3Aissue+label%3A%22Feature%3A+Datalist%22)
* **Last updated:** July 26, 2018
* **Project lead and developper:** Pierre Dubois
* **Collaborator:**
	* Ivan Hughes - Refined the requirement and did initial environmental scan.
* **Research:**
	* [Datalist JSON suggestion](research/1-datalist-JSON-suggestion.html)
* **Prototype:**
	* [2018-04-08 - combobox prototype](research/2018-1-combobox-example.html)
	* [2018-04-11 - combobox prototype 2 - Async loading](research/2018-1-combobox-prototype-2.html)
	* [2018-04-13 - combobox prototype 3 - Validation](research/2018-1-combobox-prototype-3.html)
	* [2018-04-16 - combobox prototype 4 - Allow free text input (datalist)](research/2018-1-combobox-prototype-4.html)
	* [2018-04-16 - combobox prototype 5 - Limiting number of result and type of filter](research/2018-1-combobox-prototype-5.html)
	* [2018-04-18 - combobox prototype 6 - Fieldflow integration and down arrow](research/2018-1-combobox-prototype-6.html)
	* [2018-05-09 - combobox prototype 7 - By using a reactive template engine](research/2018-1-combobox-prototype-7.html)
	* [2018-05-16 - combobox prototype 8 - Fieldflow integration with default action if no match found by using a reactive template engine](research/2018-1-combobox-prototype-8.html)
	* [2018-05-16 - combobox prototype 9 - Fieldflow and async load](research/2018-1-combobox-prototype-9.html) (Might not work)
	* [2018-05-28 - combobox prototype 10 - Fieldflow and default and async load - With reactive engine](research/2018-1-combobox-prototype-10.html)
	* [2018-06-21 - Template playground prototype - Render UI by using the combobox templating system](research/2018-1-template-playground-prototype.html)
* **History:**
	* (2018-07-26) Still experimental, started to create independant set of working example pages. 
	* (2018-06-20) Experimental stable plugin was released on Canada.ca. It support the conversion from a select to a combo box and added combo box render for fieldflow. Next is to create the docs and various working example. There is also a template playground which render a template from a JS object.
	* (2018-05-17) Prototype fully working as expected, now it's code cleanup and optimisation
	* (2018-04-18) Prototype working but a few improvement need to be done, see developer note and UX early testing note
	* (2018-04-13) Close to release a minimal viable product.
	* (2018-03-12) Defining the requirement

### Boolean filtering for WET filter feature
Provide the option regarding how the space is interpretated during filtering content with the filter plugin.
* Interprete space as "OR", "AND", "XOR" or "EXACT" logical instruction. May include a location instruction such as "Anywhere", "startWith", "word".
* **Last updated:** June 20, 2018
* **Project lead:** Neil Mispelaar
* **History:**
	* (2018-06-20) WIP - Apply a few code optimisation fix
	* (2018-05-17) PR submited ([#8383](https://github.com/wet-boew/wet-boew/pull/8383)), additional fix to come
	* (2018-04-18) Early prototype, working on test and documentation material
	* (2018-04-10) Project initiation

### Server side error message integration with form validation feature
Harmonize the error message displayed when in browser error is combined with server side errors
* **Last udpated:** July 26, 2018
* **Project lead:** Stéphane Ducharme
* **History:**
	* (2018-07-26) Project almost completed, going in peer review process.
	* (2018-06-20) WIP with the working example creation and testing the solution.
	* (2018-05-17) Work for single input or select, but not when it is combined together.
	* (2018-04-11) Early exploratory prototype

### PDF generator
Create a new feature that would allow the user to obtain a PDF printable version of the page. The PDF printable version are different from the web printable version in the sense that it would be possible to control and well define how the content of the webpage would transposed into a paper base format.
* **Last updated:** March 1, 2018
* **Current status:** Refining the projects description and research.
* **Deliverable:** A feature that generate a PDF from a webpage.
* **Goal:** Change the current practice which consist in uploading a standalone PDF version of the content and include a reference to that uploaded PDF in the content. At the same time, it would reduce the risk of have both version no in sync when a content update is applied.
* **Project lead:** David Elisma
* **History:**
	* (2018-02-22) Refining the projects description and research.

### Migration to WCAG 2.1 Level AA
See the Accessibility project.

### Checkbox based filtering
Leverage CSS classes and checkboxes to apply content filtering. A feature like the filter plugin but without keyword filtering through a text field. This functionality might be required for publishing the Digital Playbook on Canada.ca
* **Example:** [6. Use open standards and solutions (draft)](https://canada-ca.github.io/digital-playbook-guide-numerique/views-vues/standards-normes/en/6-use-open-standards-solutions.html)
	* The filter can be displayed when the user click on the "Show filters" button
	* An right overlay appear with a structured content on how filter can be applied
	* There is an option to apply persistant filter
	* Filter can be grouped, a parent would apply some of all sub-filter term.
* **Prototype source code:** [https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/assets-atouts/js/filter-interface-filtre.js](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/assets-atouts/js/filter-interface-filtre.js)
* **Last updated:** July 26, 2018
* **Project lead:** Pierre Dubois
* **What left:** Planning the integration of the prototype into WET

### Score system for triggering action with Field flow
Through a questionnaire, having each question that provide a score. And when a specific score is reach or when it is manually trigger (like at the end of the questionnaire) A results adapted to the score obtained will be displayed.
* **Last updated:** July 26, 2018
* **Project lead:** Pierre Dubois
* **What left:** Create one or a few use cases

## Backlog project

### Postal code lookup for maps or to refine/classify a result set
Having a postal code lookup where it would display relative result on a map, or show a list of results classify by the closest to the farest. Having the posibility to set a threshold, like within 50 km of the entered postal code,... We might need to consider to merge the geo localisation data with real time data, like showing the waiting for location display after the postal code lookup.
* **Last updated:** June 20, 2018
* **Current status:** Need resources to initiate the project documentations and initial research.
* **Goal:** Have a form that receive a postal code to refine a result set or show an area on a map.
* **Project lead:** Pierre Dubois
* **Similar projects:**
	* [Find a passport service location near you](http://www.cic.gc.ca/english/passport/map/map.asp)
	* [Find a Service Canada Office](http://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng)
* **History:**
	* (2018-06-20) Still a valid backlog project that need ressource.
	* (2018-03-19) Project added in the backlog

### Update jekyll variant
Goal is to have a base jekyll variant to improve contribution. At the end we would need to consider one repository per theme and we should consider to leverage the CDTS (Centrally Deployed Templates Solution). This site "WET-BOEW project documentation" are running with jekyll but don't use yet the variant.
* **Github repository:** [wet-boew/wet-boew-jekyll](https://github.com/wet-boew/wet-boew-jekyll)
* **Work in progress PR:** [wet-boew-jekyll PR #110](https://github.com/wet-boew/wet-boew-jekyll/pull/110)
* **Project lead:** Nick Schonning
* **Current status:** Defining requirement

### Support CORS with feed plugin
Bypassing the yahoo API call when fetching an ATOM feed that inside the scope defined by CORS (Cross-origin resource sharing).
* **Project lead:** Ilya Pak
* **Current status:** Local prototype was created which take the ATOM feed and turn it into JSON format similar to the yahoo API call
* **Last updated:** June 27, 2018

### Flagging insecure dependencies [Build script]
Look at Retire.js for flagging insecure dependencies in WET.
* **Github discussion:** [#8393](https://github.com/wet-boew/wet-boew/issues/8393)
* **Project lead:** No official lead
* **Last updated:** June 20, 2018
* **Current status:** Defining requirement

### Block autofill (autocomplete)
Have an autofill (autocomplete) for a group of form field. It could be provided through suggestion when filling a adjacent input file. Something like the street address lookup service from canada post. Where you just type a postal code with the house street number and you are able to get the exact full complete address (city, province, official street name).
* **Project lead:** No official lead
* **Last updated:** June 20, 2018
* **Current status:** Defining requirement

### Fixing potential security vulnerability with jQuery 2.x
Ensuring that WET do not contain any security culnerability exposed by using the jQeury 2.x library.
* **List of options:**
	* **Reviewing WET 4 javascript code base** and then evaluate with fixing the code where the identified jQuery 2 vulnerability could happen. Prior to initiate that review, we would need to documents what are exactly the vulnerability and how those vulnerability can occur.
	* **Upgrading to jQuery 3.x:** This will require to fully test every WET feature and fixing any breaking change. It may potentially require to find/develop an alternative solution for some third party plugin that is currently used by the WET framework.
	* **Speeding the developement of WET 5** We are aiming to have WET 5 core fully independent from jQuery. This don't means jQuery wont be used, but it usage should be minimal.
* **Current status:** Need ressource and then move forward with one of the propose option

## Inactive project with prototype

Any taker? The following projects are currently incomplete and perhaps not ready to get merged into wet-boew. However a considerable amount of work was completed and they might only to be tuned. If you are interested, please contact wet-boew project lead or let's know your interests by opening a new github issue on the [wet-boew main project](https://github.com/wet-boew/wet-boew). Idem if you are aware of incomplete project that should be added at this list.

### Geomap - Upgrate to open layer v3.x
Upgrade the geomap plugin to use the latest version of open layer v3.x.
* **PR:** [#7889](https://github.com/wet-boew/wet-boew/pull/7889)
* **What left:**
	* Ensure there is no breaking change for old geomap markup that use open layer v2.x. The expectation is WET geomap coded as showed in the WET working example would continue to work as is without requiring any markup change. Like having a fallback for OSM basemap example.

### Responsive table (Table saw)
Transform data table into responsive table that are mobile friendly. There is four mode: Stack, Swipe, Toggle and display the table as is in large view.
* **Example:**
	* [Stack - Tablesaw](http://filamentgroup.github.io/tablesaw/demo/stack.html)
	* [Swipe Table - Tablesaw](http://filamentgroup.github.io/tablesaw/demo/swipe.html)
	* [Toggle - Tablesaw](http://filamentgroup.github.io/tablesaw/demo/toggle.html)
	* [Tablesaw prototype in WET4](http://universallabs.org/wet/labs/tablessaw/demo1/stack.php)
* **Source code:**
	* [WET4 prototype javascript](http://universallabs.org/wet/labs/tablessaw/demo1/tablessaw.js)
	* [Tablesaw - Filament group](https://github.com/filamentgroup/tablesaw)
* Other ressource
	* [Tables - Universal labs](http://universallabs.org/tables/index-en.php)
* **Last updated:** June 20, 2018
* **What left:**
	* Defining requirement
	* Planning the integration of the prototype into WET
	* Fixing/adressing various potential accessibility issue

### Feature calc
A calculator helper plugin to provide a basic math calculation (addition, subtraction, multiplication, division) engine. The requirement for calculations that could be implemented via WET-assisted HTML came about during the migration of web pages where inline Javascript was not supported.
* **Last updated:** March 1, 2018
* **Github:** [PR #8212](https://github.com/wet-boew/wet-boew/pull/8212)
* **What left:**
	* Address various reported issue in the PR.
	* Run test
	* Evaluation of WCAG compliance
	* Complete the plugin documentation API
	* Create a French working example


### Step form
This component provides the ability to break a form into steps. To be use when Web forms are long/contain lot of information.
* **Last updated:** March 1, 2018
* **Github:** [PR #7913](https://github.com/wet-boew/wet-boew/pull/7913)
* **Working example:** [TheKodester - Steps Form](https://www.thekodester.ca/wet/formvalid/steps)
* **What left:**
	* Run test
	* Evaluation of WCAG compliance
	* Complete the plugin documentation API such:
		* Basic HTML interface
		* Enhanced HTML interface
		* Data structure
		* Function
		* Visual (Wireframe and CSS) for each UI variation
	* Review how the plugin work on mobile, tablet and desktop mode. Note if it should act differently depending of the view.
	* Prepare i18n text to be inserted in the master i18n spreadsheet
	* Translate the French working example
	* Review the plugin javascript


## Projects with no official team lead

An considerable interest was expressed for the following projects. Some work was already been completed and we are looking to have an official team lead to move it forward.

### React variant

**Last updated:** March 1, 2018

Use WET feature through a React web application

Github related issue:
* [#8150 - wet-toolkit integration with React Redux](https://github.com/wet-boew/wet-boew/issues/8150)

Working example:
* [First prototype - Test case #2018-3](testcase/2018-3.html)

Next step:
* Identify top WET features to make it React compatible
* Documents high level how to integrate WET feature as React component
* Documents and create integration example of each WET feature in React
* Identify missing API in WET feature to better integrate with a React application
* Contribute to WET documentation API to enable React developper to use WET feature


{::nomarkdown}
<h2 id="featurerequest">Features request and new project idea</h2>
{:/}

The following project idea (feature request) was brought up, but there is no known official development team that are working on it. If you are interested to take over and lead one of the following project, please contact us by submitting an [issue on github](https://github.com/wet-boew/wet-boew/issues/new) or by joining us at the Roadmap meeting. The roadmap meeting information are available on the wet-boew group on [GCcollab.ca](https://gccollab.ca/login)

### Angular

**Last updated:** March 1, 2018

Need for more documentation on how WET can be integrated with Angular. For instruction on how pages can be designed to ensure the "Basic HTML mode" continue to work as expected. For instruction on how to design web interface that support Basic HTML and the angular enhanced mode.

* [Github wet-boew issue #8206](https://github.com/wet-boew/wet-boew/issues/8206)

### Compare product

**Last updated:** March 1, 2018

To have an easy way to compare multiple product side by side. A feature similar as we can found when a user want to buy a new camera on a web site and he want to compare side by side the specification for two different model of camera in order to decide which one would fit best his needs.

### Javascript AB testing framework
Have a javascript that can show option A or B and be consistent for a period of 2-3 weeks.

Chalenges:
* What would be the basic interface.
* Do we show option A, then after JS kick in we clear the visible DOM and show option B
* Do we put option A inside a details summary, then when JS kick in we remove that details summary and show what-ever option for the user.

Next step:
* Define what is that basic interface 
* What UX we want to provide before it gets progressive enhanced to whatever option.
