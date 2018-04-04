---
published: true
layout: default-theme-wet-boew-en
filename_fr: index-fr
title: Projects - Web Experience Toolkit (WET) documentation
description: List of projects related to WET.
modified: 2018-03-19
---


## Active project

Updated: 2018-03-01


### Accessibility
* Reviewing and validating open github issue
* Documenting basic HTML design pattern
* WCAG 2.1 Level AA conformance check for existing features
* Evaluate web accessibility compliance for wb5 features
* **Last updated:** March 14, 2018
* **Progress check history**: 2018-04-03; 2018-03-14; 2018-02-27; 2018-02-20
* **History:**
	* (2018-03-14) On going - review github issues and fixing current open issue.
	* (2018-02-13) Validation of issue labelled "Work: Accessibility" which are open and the closed ones with the label "State: Going Stale".


### Design system
Design system to standardize the visual language and user experience of our digital collaboration tools. The system will encompass visual elements, components and communications.
* **Last updated:** February 26, 2018
* **Current status:** Basic visual for forms
* **Current project phase:** Phase I - Visual and basic elements.
* **Deliverable:** Prototype downloadable in photoshop, Illustrator and Adobe XD files. And eventually the corresponding HTML code conforming to WCAG 2.0/2.1 Level AA.
* **Notes:** That design system might replace the wet-boew style guide.
* **Project homepage:** [#GCDigital Design System](https://gctools-outilsgc.gitbooks.io/-gcdigital-design-system/content/)
* **History:**
	* (2018-02-26) Basic visual for forms
	* (2018-02-13) Working on the visual look for the design system.

### Improved datalist (autocomplete/suggestion)
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
* **Last updated:** March 14, 2018
* **Project lead:** Pierre Dubois
* **Research:**
	* [Datalist JSON suggestion](research/1-datalist-JSON-suggestion.html)
* **History:**
	* (2018-03-12) Defining the requirement

### PDF generator
Create a new feature that would allow the user to obtain a PDF printable version of the page. The PDF printable version are different from the web printable version in the sense that it would be possible to control and well define how the content of the webpage would transposed into a paper base format.
* **Last updated:** March 1, 2018
* **Current status:** Refining the projects description and research.
* **Deliverable:** A feature that generate a PDF from a webpage.
* **Goal:** Change the current practice which consist in uploading a standalone PDF version of the content and include a reference to that uploaded PDF in the content. At the same time, it would reduce the risk of have both version no in sync when a content update is applied.
* **Project lead:** David Elisma
* **History:**
	* (2018-02-22) Refining the projects description and research.


## Backlog project

### Postal code lookup for maps or to refine/classify a result set
Having a postal code lookup where it would display relative result on a map, or show a list of results classify by the closest to the farest. Having the posibility to set a threshold, like within 50 km of the entered postal code,...
* **Last updated:** March 19, 2018
* **Current status:** Need resources to initiate the project documentations and initial research. 
* **Goal:** Have a form that receive a postal code to refine a result set or show an area on a map.
* **Project lead:** Pierre Dubois
* **Work order reference:** b4731
* **Similar projects:**
	* [Find a passport service location near you](http://www.cic.gc.ca/english/passport/map/map.asp)
	* [Find a Service Canada Office](http://www.servicecanada.gc.ca/tbsc-fsco/sc-hme.jsp?lang=eng)

## Inactive project with prototype

Any taker? The following projects are currently incomplete and perhaps not ready to get merged into wet-boew. However a considerable amount of work was completed and they might only to be tuned. If you are interested, please contact wet-boew project lead or let's know your interests by opening a new github issue on the [wet-boew main project](https://github.com/wet-boew/wet-boew). Idem if you are aware of incomplete project that should be added at this list.

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
* **Working example:** [TheKodester - Steps Form](http://www.thekodester.ca/demos/formvalid/steps)
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


