---
published: true
layout: default-theme-wet-boew-en
title: Projects
hide_breadcrumb: false
date_modified: 2020-01-13
---

{::nomarkdown}
<style>
progress {
/* Positioning */
position: fixed;
left: 0;
top: 0;
z-index: 15000;

/* Dimensions */
width: 100%;
height: 5px;

/* Reset the appearance */
-webkit-appearance: none;
 -moz-appearance: none;
	  appearance: none;

/* Get rid of the default border in Firefox/Opera. */
border: none;

/* Progress bar container for Firefox/IE10+ */
background-color: transparent;

/* Progress bar value for IE10+ */
color: red;
}

progress::-webkit-progress-bar {
  background-color: transparent;
}

progress::-webkit-progress-value {
  background-color: red;
}

progress::-moz-progress-bar {
  background-color: red;
}

.progress-container {
width: 100%;
background-color: transparent;
position: fixed;
top: 0;
left: 0;
height: 5px;
display: block;
}
.progress-bar {
background-color: red;
width: 0%;
display: block;
height: inherit;
}
</style>
<progress value="0">
	<div class="progress-container">
		<span class="progress-bar"></span>
	</div>
</progress>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
<script>
$(document).ready(function() {
var getMax = function(){
return $(document).height() - $(window).height();
}

var getValue = function(){
return $(window).scrollTop();
}

if ('max' in document.createElement('progress')) {
// Browser supports progress element
var progressBar = $('progress');

// Set the Max attr for the first time
progressBar.attr({ max: getMax() });

$(document).on('scroll', function(){
  // On scroll only Value attr needs to be calculated
  progressBar.attr({ value: getValue() });
});

$(window).resize(function(){
  // On resize, both Max/Value attr needs to be calculated
  progressBar.attr({ max: getMax(), value: getValue() });
});

} else {

var progressBar = $('.progress-bar'),
	max = getMax(),
	value, width;

var getWidth = function() {
  // Calculate width in percentage
  value = getValue();            
  width = (value/max) * 100;
  width = width + '%';
  return width;
}

var setWidth = function(){
  progressBar.css({ width: getWidth() });
}

$(document).on('scroll', setWidth);
$(window).on('resize', function(){
  // Need to reset the Max attr
  max = getMax();
  setWidth();
});
}
});
</script>
{:/}

## Provisory GCWeb feature

Updated: 2019-12-20

This is track the development of provisonal feature to support new beta design pattern.

### Service information template
* Renewed template that visually better support a group a pages that relate to the same task.
* **Last updated:** December 20, 2019
* **Project Lead:** Chad Farquharson, CRA; Christopher Oakes, CRA
* **Current status:** Reviewing and addressing each accessibility concern and each design ambuiguity
* **Github discussion/issue:**
	* [GCWeb issue #1627](https://github.com/wet-boew/GCWeb/issues/1627)
* **History:**
	* (2019-12-18) Project lead is getting organized to address all the concern
	* (2019-12) The review was forward to the project lead to address each concern.
	* (2019-11) Principal publish and the web accessibility working group has done a quick accessibility review
	* (2019-10) Contacted Prinicpal Publisher to know the process of getting the CSS requirement for that new design available in Canada.ca
	* (2019-08) Create a prototype with the refresh design pattern

### Institutional profile
* Renewed institutional profile page inspired by the new Canada.ca home lauched in February 2019
* **Last updated:** December 18, 2019
* **Project Lead:** Digital Transformation Office (DTO)
* **Current status:** Prototype presented, wait for the request to start an accessibility review
* **History:**
	* (2019-11-29) Presentation of the prototype as "beta" without testing for accessibility during the Canada.ca Fall update
	* (2019-08) Prototype created

### Template/design pattern documentation template
* Interactive template to integrated section documentation with the visual component of each component the template use
* **Last updated:** December 18, 2019
* **Project Lead:** Miguel Borges-Porteous, Digital Transformation Office (DTO)
* **Current status:** Early prototype presented, wait for the request to start an accessibility review
* **History:**
	* (2019-11-29) Presentation of the prototype as "alpha" to show how the template would be documented in the future during the Canada.ca Fall update
	* (2019-11) Prototype created

## Active projects

Updated: 2019-12-18


### Accessibility
* Reviewing and validating open github issue
* Documenting basic HTML design pattern
* WCAG 2.1 Level AA conformance check for existing features in wet-boew
* Evaluate web accessibility compliance for wb5 features
* **Last updated:** October 23, 2019
* **Project lead:** Brad Souster
* **Project board:** [wet-boew root project #1](https://github.com/orgs/wet-boew/projects/1)
	* To participate: Pick an "Notes" and add your name
	* Once completed: Move the notes inside the "Tested" and then submit your result to Pierre or Brad
* **Progress check history**: 2019-10-23; 2019-09-20; 2018-10-18; 2018-08-24; 2018-07-26; 2018-06-20; 2018-05-17; 2018-04-10; 2018-04-03; 2018-03-14; 2018-02-27; 2018-02-20
* **History:**
	* (2019-10-23) Items in testing column are tested, need to be published. Template testing is completed.
	* (2019-09-20) Test of WCAG 2.1 has started and documented in the [wet-boew root project #1](https://github.com/orgs/wet-boew/projects/1)
	* (2018-08-24) Menu - Fixed the keyboard behviour of submenu (details/summary)
	* (2018-07-26) Created a github project to triage accessibility related issue - [https://github.com/wet-boew/wet-boew/projects/2](https://github.com/wet-boew/wet-boew/projects/2)
	* (2018-06-20) Tested a few issue reproducibility, fixed #8400 (Tabs on Google Chrome)
	* (2018-05-17) WIP: #552 (Mobile checklist) and #8238 (Validation error in Mobile menu)
	* (2018-04-10) PR submited for pie chart labeling
	* (2018-03-14) On going - review github issues and fixing current open issue.
	* (2018-02-13) Validation of issue labelled "Work: Accessibility" which are open and the closed ones with the label "State: Going Stale".

<!--
#### WET4 conformance to WCAG 2.1
* Review all WET4 feature and evaluate and make them compliant to WCAG 2.1
* **Project lead:** TBD
* **Status:** Defining and planning the project
* **Last updated:** July 24, 2019
* **History:**
	* (2019-07-24) A new Web Accessibility Working Group was formed.
-->

### Multi page survey
* Provide a configurable multi page form to accomodate a parametrable end of website visit survey.
* **Project lead:** Eric Dunsworth (SC)
* **Status:** Development of a functional prototype
* **Last updated:** December 19, 2019
* **History:**
	* (2019-12-19) Working on developing a functional prototype

### Flat checkboxes and radio button for Canada.ca theme
* Provide a better UX experience for people navigating content with fieldflow.
* **Project lead:** David Elisma (DTO) -Patrick Lajeunesse (DTO)-
* **Status:** Project has split in smaller pieces, Apply explicit label-input pattern in wet-boew, Apply flat checkbox style, Apply change to fieldflow plugin to use the new explicit label-input pattern
* **Last updated:** December 18, 2019
* **History:**
	* (2019-12-18) wet-boew change has been merged waiting for the wet-boew dependency update in GCweb
	* (2019-10-23) wet-boew change has been submited - Has some discussion to test the propose design pattern against WCAG 2.0 level AA conformance.
	* (2019-09-20) Initiating this project tracking - On development WIP track on GCWeb PR, feature fragmented for a better integration in wet-boew and gcweb and make it more reusable.

### Web Controls Library .NET
List of wet-boew component ready to be used in a .NET environment
* **Project lead:** Jason Pesant
* **Current status:** Library stable, still improving and fixing bug as more testing is completed. Currently planning the component development roadmap.
* **Last updated:** June 20, 2019
* **History:**
	* (2019-04-23) Added the project in wet-boew organisation

### Horizontal definition list  
Be able to specify a relative with for the definition title because the default one is sometime restrictive in some content design.
* **Project lead:** Samar ElAmir
* **Current status:** Protype created, starting the integration into WET-BOEW
* **Last updated:** January 22, 2019
* **History:**
	* (2019-01-22) Protype created, starting the integration into WET-BOEW

### Steps visual indicator
Provide a visual indication that show the current forms steps.
* **Project lead:** Samar ElAmir
* **Current status:** Prototype created, starting the integration into GCWeb
* **Last updated:** January 22, 2019
* **History:**
	* (2019-01-22) Prototype created, starting the integration into GCWeb

### Chat bot
Convert a form into a chat like interaction. The supporting use case is for GCWeb only for now.
* **Project lead:** Francis Gorman
* **Current status:** Functional high fidelity prototype and it's now ready to start the integration into wet-boew (docs + working example). Exploring to separate the "bubble" into it's own plugin.
* **Others:** In the execution of this project, it's going to revive the step-form plugin previously submited into WET.
* **Last update:** December 18, 2019
* **History:**
	* (2019-12-18) A working group was established to discuss about a GC wide solution for chat bots
	* (2019-10-23) Renamed the project from "Chat wizard" to "Chat bot"
	* (2019-06-20) Functionality planned to be released with GCWeb 5.2
	* (2019-05-16) Status update
	* (2019-04-25) Plugin stable, upcoming integration into wet-boew
	* (2019-03-21) Functional high fidelity prototype and it's now ready to start the integration into wet-boew.
	* (2019-02-20) Project status update (stable prototype)
	* (2019-01-21) Initiated research 2019-15 - Exploration of a chat like design pattern

### Step form
This component provides the ability to break a form into steps. To be use when Web forms are long/contain lot of information.
* **Last updated:** June 20, 2019
* **Github:** [PR #7913](https://github.com/wet-boew/wet-boew/pull/7913)
* **Working example:** [TheKodester - Steps Form](https://www.thekodester.ca/wet/formvalid/steps)
* **What left:** Apply the request of change of [PR #8645](https://github.com/wet-boew/wet-boew/pull/8645)
* **Project integration lead:** Francis Gorman
* **Current status:** Code base is under review and a few code adjustment are under development.
* **History:**
	* (2019-06-20) Functionality planned to be released with wet-boew 4.0.32
	* (2019-05-16) PR submited and there is some request of change to apply
	* (2019-04-25) Now stabilized, PR almost ready to submit, need just a commits history re-write to preserve intellectual property merits.
	* (2019-03-21) Re-activated this project and code base under review
	* (2018-03-01) Move the project into inactive project list

### jQuery 3 Migration

We’re upgrading jQuery from version 2.2.4 to 3.3.1. Version 2.x is no longer supported, nor is it receiving any security patches or bug fixes. The idea is to release a beta version first for groups to test with, and then a full version shortly thereafter.

* **Project lead:** Neil Mispelaar
* **Current status:** Did an initial scan of all the wet-boew code. Testing each working example and quickly reviewing the JS of each plugin.
* **Documentation:** [https://wet-boew.github.io/wet-boew-documentation/research/2019-16-jquery-3-migration.html](https://wet-boew.github.io/wet-boew-documentation/research/2019-16-jquery-3-migration.html)
* **Last update:** May 16, 2019
* **History:**
	* (2019-07-24) Project still on hold
	* (2019-05-16)
		* We will create a separate package of WET-BOEW and GCWEb with jQuery 3 for testing
		* There is some jQuery 3 error for flot third party, we will maintain our own copy of it
		* The download will be available in the download page as an experimental kind of package.
	* (2019-04-25) Project on hold
	* (2019-02-21) Did an initial scan of all the wet-boew code. Testing each working example and quickly reviewing the JS of each plugin.
	* (2019-02-01) Initiate research 2019-16 - jQuery 3 migration

### Add to calendar

Widget that can create an outlook like invitation on the fly to allow the user to add into its device calendar.

* **Project lead:** Eric Guitar
* **Current status:** New project, solution research ongoing
* **Last update:** December 18, 2019
* **History:**
	* (2019-12-18) Progressing in researching and documenting the approach
	* (2019-10-23) Change the project lead from Francis Gorman to Eric Guitar
	* (2019-05-16) Still in work in progress, a download function was added into the wet core in preparation of this plugin.
	* (2019-04-25) New project, solution research ongoing


## Related projects

### Design system
Provide a central design system library.
* **Last update:** December 18, 2019
* **Tasks force:** Work are done in 3 area, UX experimentation/prototyping, Documentation, WET5 as an implementation reference.
* **Current status:** Still in early stage, they are currently defining and refining the vocabulary used
* **History:**
	* (2019-12-28) Review and get comments for the new WET5 architect. Re-engeneering the documentation template and looking forward to avoid confusion between wet-boew-styleguide, gcweb and design system.
	* (2019-10-23) Still in early stage, they are currently defining and refining the vocabulary used

### Previously - Design system in 2018
Design system to standardize the visual language and user experience of our digital collaboration tools. The system will encompass visual elements, components and communications.
* **Last updated:** October 18, 2018
* **Current status:** It was observed this project was renamed to "Aurora" and a new website with code sample was lauched.
* **Current project phase:** Unknow
* **Deliverable:** Prototype downloadable in photoshop, Illustrator and Adobe XD files. And eventually the corresponding HTML code conforming to WCAG 2.0/2.1 Level AA.
* **Notes:** That design system might replace the wet-boew style guide.
* **Project homepage:**
	* [Aurora](https://design.gccollab.ca/#!)
	* [#GCDigital Design System](https://gctools-outilsgc.gitbooks.io/-gcdigital-design-system/content/)
* **History:**
	* (2018-10-18) It was observed this project was renamed to "Aurora" and a new website with code sample was lauched.
	* (2018-06-20) Common UI was draw. Currently they are creating prototype (HTML code) behind it. This project might get renamed in a near future.
	* (2018-05-17) Seems to have started phase II
	* (2018-02-26) Basic visual for forms
	* (2018-02-13) Working on the visual look for the design system.


## Going stale project

### Long documents (was PDF generator)
Create a new feature that would allow the user to obtain a PDF printable version of the page. The PDF printable version are different from the web printable version in the sense that it would be possible to control and well define how the content of the webpage would transposed into a paper base format.
* **Last updated:** June 20, 2019
* **Current status:** Refining the projects description and research.
* **Deliverable:** A feature that generate a PDF from a webpage.
* **Goal:** Change the current practice which consist in uploading a standalone PDF version of the content and include a reference to that uploaded PDF in the content. At the same time, it would reduce the risk of have both version no in sync when a content update is applied.
* **Project lead:** David Elisma
* **History:**
	* (2019-06-20) Move this project in Going Stale as requested by the project lead David Elisma
	* (2018-11-15) Status update
	* (2018-10-18; 2019-01-15) Improving use case and requirement
	* (2018-09-28) [Writting use case and requirement](http://wet-boew.github.io/wet-boew-documentation/research/2018-12-long-documents.html)
	* (2018-02-22) Refining the projects description and research.

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
	* (2018-08-24) Currently stale
	* (2018-07-26) Still experimental, started to create independant set of working example pages.
	* (2018-06-20) Experimental stable plugin was released on Canada.ca. It support the conversion from a select to a combo box and added combo box render for fieldflow. Next is to create the docs and various working example. There is also a template playground which render a template from a JS object.
	* (2018-05-17) Prototype fully working as expected, now it's code cleanup and optimisation
	* (2018-04-18) Prototype working but a few improvement need to be done, see developer note and UX early testing note
	* (2018-04-13) Close to release a minimal viable product.
	* (2018-03-12) Defining the requirement

### Migration to WCAG 2.1 Level AA
See the Accessibility project.

### Checkbox based filtering
Leverage CSS classes and checkboxes to apply content filtering. A feature like the filter plugin but without keyword filtering through a text field. This functionality might be required for publishing the Digital Playbook on Canada.ca
* **Research and findings page:** [http://wet-boew.github.io/wet-boew-documentation/research/2018-7-checkbox-filtering.html](http://wet-boew.github.io/wet-boew-documentation/research/2018-7-checkbox-filtering.html)
* **Prototype :**
	* [Prototype 1 - Conceptual prototype - high/medium fidelity](https://github.com/canada-ca/digital-playbook-guide-numerique/blob/master/assets-atouts/js/filter-interface-filtre.js)
	* Prototype 2 - [Solution exploratory prototype - low fidelity](http://wet-boew.github.io/wet-boew-documentation/research/2018-7-prototype-2.html)
	* Prototype 3 - [Initial work of integrating with WET4 - medium fidelity](http://wet-boew.github.io/wet-boew-documentation/research/2018-7-prototype-3.html)
	* Prototype 4 - [WET4 plugin - high fidelity](https://github.com/duboisp/wet-boew/tree/contentfilter)
* **Last updated:** August 24, 2018
* **Project lead:** Pierre Dubois
* **What left:** Finishing working example, testing and documentation for an integration into WET

### Score system for triggering action with Field flow
Through a questionnaire, having each question that provide a score. And when a specific score is reach or when it is manually trigger (like at the end of the questionnaire) A results adapted to the score obtained will be displayed.
* **Research and findings page:** [http://wet-boew.github.io/wet-boew-documentation/research/2018-10-fieldflow-scoring-trigger.html](http://wet-boew.github.io/wet-boew-documentation/research/2018-10-fieldflow-scoring-trigger.html)
* **Last updated:** August 24, 2018
* **Project lead:** Pierre Dubois
* **What left:** Create one or a few use cases

## Backlog project

### Update outdated Node package
Update outdated NPM package of wet-boew and gcweb build package.
* **Last updated:** July 24, 2019
* **Current status:** Waiting for a project/dev lead
* **History:**
	* (2019-07-24) Grunt version is being updated, making the build 3x faster on Windows, and Node SASS version was updated, allowing some contributors to successfully build GCWeb.

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


### Reading Progress Bar/indicator

**Last updated:** February 4, 2019

Have a progress bar at the top of certain reports, which gives the reader an overview of how far in the page they are at. So becomes basically a reading progress bar.

(As seen at the top of the window on this current page.)

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

### DatePicker

**Last updated:** July 24, 2019

Move DatePicker from the polyfill folder to the plugins, giving developers flexibility to provide either the native date picker from the browser or the plugin itself. Plugin's default behaviour MUST remain the polyfill (for browser without support), but further enhancements could be added optionally. One of the major concern was that Edge's native date picker prevents the user from inputting text in the field.

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

## Completed

{::nomarkdown}
<details>
	<summary>Show the list of completed projects</summary>
{:/}

### Save HTML table into CSV
Save a HTML table into a CVS file on the fly by using javascript. That feature are going to be implemented in the action manager.
* **Research and findings page:** [http://wet-boew.github.io/wet-boew-documentation/research/2018-8-table-to-csv.html](http://wet-boew.github.io/wet-boew-documentation/research/2018-8-table-to-csv.html)
* **Prototype**
	* [Source code](https://github.com/duboisp/GCWeb/commit/6ff019dec0e31549674c5a018d0aba445658f0a9)
* **Last updated:** September 20, 2019 - Merged in GCWeb
* **History:**  September 28, 2018 - Finish working example, testing and documentation for an integration in GCWeb.
* **Project lead:** Pierre Dubois

### Accessibility - Assessment tool for WCAG 2.1 AA/AAA
* Copy and tailor WCAG 2.0 assessment tools to fit WCAG 2.1 AA/AAA criteria.
* **Project lead:** Eric Dunsworth
* **Status:** Project completed and released.
* **Last updated:** September 20, 2019
* **Created:** July 24, 2019 - Mentioned during roadmap meeting.

### Geomap - Upgrade to open layer v3.x
Upgrade the geomap plugin to use the latest version of open layer v3.x.
* **PR:** [#7889](https://github.com/wet-boew/wet-boew/pull/7889)
* **What left:**
	* Ensure there is no breaking change for old geomap markup that use open layer v2.x. The expectation is WET geomap coded as showed in the WET working example would continue to work as is without requiring any markup change. Like having a fallback for OSM basemap example.
* **Project integration lead:** Pierre Dubois
* **Project lead:** Joost
* **State:** The missing piece was added and there is a separate working example for previous configuration.

### Server side error message integration with form validation feature
Harmonize the error message displayed when in browser error is combined with server side errors
* **Last udpated:** January 23, 2019
* **Project lead:** Stéphane Ducharme
* **History:**
 	* (2019-02-20) Merged into WET-BOEW and published in v4.0.30
	* (2019-01-07) Fixing some issues and code optimisation.
	* (2018-08-24) Need to apply some code optimation base on peer review comments.
	* (2018-07-26) Project almost completed, going in peer review process.
	* (2018-06-20) WIP with the working example creation and testing the solution.
	* (2018-05-17) Work for single input or select, but not when it is combined together.
	* (2018-04-11) Early exploratory prototype

### Support CORS with feed plugin
Bypassing the yahoo API call when fetching an ATOM feed that inside the scope defined by CORS (Cross-origin resource sharing).
* **Project lead:** Ilya Pak
* **Current status:** PR #8534 submited
* **Last updated:** January 23, 2019
* **History:**
 	* (2019-02-20) Merged into WET-BOEW and published in v4.0.30
	* (2019-01-18) Making the CORS as default and removing Yahoo API
	* (2018-12-13) Added CORS option to JSON feed plugin
	* (2018-06-27) Project initialized and Local prototype was created which take the ATOM feed and turn it into JSON format similar to the yahoo API call

### Boolean filtering for WET filter feature
Provide the option regarding how the space is interpretated during filtering content with the filter plugin.
* Interprete space as "OR", "AND", "XOR" or "EXACT" logical instruction. May include a location instruction such as "Anywhere", "startWith", "word".
* **Last updated:** August 24, 2018
* **Project lead:** Neil Mispelaar
* **History:**
	* (2018-08-15) Project completed
	* (2018-08-15) Code merged in WET
	* (2018-06-20) WIP - Apply a few code optimisation fix
	* (2018-05-17) PR submited ([#8383](https://github.com/wet-boew/wet-boew/pull/8383)), additional fix to come
	* (2018-04-18) Early prototype, working on test and documentation material
	* (2018-04-10) Project initiation

{::nomarkdown}
</details>
{:/}
