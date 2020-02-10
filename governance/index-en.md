---
published: true
layout: default-theme-wet-boew-en
title: Internal project gouvernance - WET-BOEW documentatin
description: Brief description of governance behind WET
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
---

If you have any question please submit an github issue. If you want to participate, reach out [Pierre Dubois](https://github.com/duboisp) where you can find he's contact information on GCcollab, on GCconnect or send me a direct message on twitter.


## Technical review meeting

* **Goal:** Review submitted PR and identify what is required to get it merged. Also other task related to the maintenance of WET and GCWeb codebase.
* **Frequency:**
	* One hour every two weeks on Wednesday at 11h00 am, starting on February 14.
	* One hour every two weeks on Thursday at 10h00 am, starting on February 22.
* **Requirement:** PR are only merged during this technical review otherwise it needs to be justified about why it can’t wait. Exception to editorial fixes (typos) for existing published content. For now this only apply to GCweb and wet-boew repository.

Documents created via those meeting will be published on the wet-boew website.


## Roadmap meeting

* **Goal:** Manage the roadmap of WET, maintain the API versioning information and oversight projects/activities related to WET.
* **Frequency:** One/two hours every month aimed for Thursday afternoon on the third week.
* **Requirement:**
  * Annual health checkup for all active repos under WET (variant, theme,…)
  * All WET related projects must be reported with at least a semi-annual health check

Documents created via those meeting will be published on the wet-boew website.



## To participate
* **Technical review meeting:** You can start by making contribution like submitting PR and participating in open issue.
* **Roadmap meeting:** By pertinence for the wet-boew project.



## Adding new WET feature

1. Describe the new features
	* For which audience
	* What is the desired behaviour
	* What is the need, what is the user end-goal
	* Summary and link to similar feature (What is doing, advantage, disavantage...)

2. Look how current tools can be used to archive something similar
	* Describe the methodoly used
	* What work
	* What don't work

3. Research of similar tools
	* Name and small description of the tools
	* Links
	* Summary of the findings
	* Working examples
	* What sastisfied the requirement
	* What is missing
	* Concern (accessiblity, design pattern, configuration, integration, dependencies...)

4. Develop the feature
	* Prototype
	* Optimize
	* Create working example (English and French)
	* Documentation (include API description)

5. Submit PR with the new feature
	* Provide a link to a working example
	* Do an accessiblity assessment
	* Review code (style, optimisation, identify potential issue...)
	* Review the documentation
	* Review and validate the accuracy of the API based from the working example provided
	* Review the scope of that new feature, is it global, theme only or for a small sub-set of pages.

6. Result of PR review
	1. Test passed and PR are merged in.
	2. Error was found and change are requested
	3. Concern was raised and
		* Instruction are provided on how to address concern, or
		* More details need to be provided to describe the concern, or
		* A mitigation plan would be proposed to address the concern


## Github lableling

[See the discussion on github - Issue #8026](https://github.com/wet-boew/wet-boew/issues/8026)

### Adding a new label

New label can be created on a need basis, but it's description need to be detailed here.

### Categories of labels:

* **Feature:** A component of wet-boew that adds specific features or considerably support it. (Plugins, Polyfills, Core, Build,...)
* **User Agent:** Identify issue that is specific to a software agent. (Jaws, NVDA, IE, Chrome, Firefox)
* **Severity:** Identify the importance of the issue compared to the overhaul wet-boew project. (Minor, Normal, Major, Critical)
* **Query:** Identify what the issue is about. (Feature request, Bug, Question,...)
* **Work:** Identify what kind of work it required to resolve the issue. (Typo, i18n, docs, demo, CSS, a11y,...)
* **State:** Identify what state the issue is currently under [when they are open for long time or for complex issue]. (On hold, Work in progress, Last call, Going stale,...)
* **Need:** Identify what is needed to move the issue forward. (More information, Tests case, Use case, Second opinion, Evidence)
* **Meta:** Identify issue that are related to the wet-boew project and not directly for the  maintaining one of it's deliverable and features.
* **Close:** Identify reason of why the issue was closed.

### Feature

A component of wet-boew that adds specific features or considerably support it. It include items related to:

* Plugins
* Polyfills
* Core
* Build
* Themes
* Tools (Table validator,...)

Label color: #2a7da6

List of label:

* Feature: Accessibility responsibility breakdown - Information
* Feature: Ajax Fetch - Plugin
* Feature: Archived Web page - User Interface example
* Feature: Base theme - Theme
* Feature: Build - npm and docker build
* Feature: Calendar of Events - Plugin
* Feature: Charts and graphs - Plugin
* Feature: CLF2 - Theme
* Feature: Collapsible alerts - Plugin
* Feature: Core - Framework initialization and common utilities
* Feature: Country Content - Plugin
* Feature: Current Nav - Plugin
* Feature: Data Ajax - Plugin
* Feature: Data Inview - Plugin
* Feature: Data Picture - Plugin
* Feature: Dismissable content
* Feature: Datalist - Polyfill
* Feature: Date picker - Polyfill
* Feature: Details/Summary - Polyfill
* Feature: Equalize - Plugin
* Feature: Expand/Collapse All - Plugin
* Feature: Feedback Form - User Interface example
* Feature: Favicon - Plugin
* Feature: Feeds - Plugin
* Feature: Footnotes - Plugin
* Feature: Form Validation
* Feature: GCWeb - Theme
* Feature: GCWU - Theme
* Feature: Geomap - Plugin
* Feature: Hello world - Tutorial
* Feature: Intranet - Theme
* Feature: Lightbox - Plugin
* Feature: localStorage - Polyfill
* Feature: MathML - Polyfill
* Feature: Menu - Plugin
* Feature: Meter - Polyfill
* Feature: Modal - Plugin
* Feature: Multimedia player - Plugin
* Feature: OGPL - Theme
* Feature: Overlay - Plugin
* Feature: Prettify - Plugin
* Feature: Progress - Polyfill
* Feature: Resize - Plugin
* Feature: Responsive images - Polyfill
* Feature: Session timeout - Plugin
* Feature: Share widget - Plugin
* Feature: Slideout Tab - Outdated plugin
* Feature: Slider - Polyfill
* Feature: Tabbed Interface/Carousel - Plugin
* Feature: Table enhancement - Plugin
* Feature: Table validator - Developer tools
* Feature: Text highlight - Plugin
* Feature: Theme plugin - Theme plugin (Need to be renamed to specific plugin name)
* Feature: Toggle - Plugin
* Feature: Twitter Feeds - Plugin
* Feature: Web Accessibility Assessment Methodology - Information
* Feature: WET theme - Theme
* Feature: Zebra striping - Plugin

### Meta

Identify issue that are related to the wet-boew project and not directly for the  maintaining one of it's deliverable and features.

Label color: #e102d8

* Meta

### Need

Identify what is needed to move the issue forward.

Label color: #fbca04

* Need: Analysis / Research - Need to be deep dive to find a solution or perform research.
* Need: Evidence - When there is two opposite idea that conflict, providing evidence for each point of view will help to understand and take a design decision.
* Need: More information - There is not enough information provided in the issue to take an action that would resolve it.
* Need: Record finding - Means that some piece of information described in the issue need to be replicated in the documentation or in the working example. For example, any described test case (test example) should be replicated in the documentation for future reference.
* Need: Replicate issue - Someone, usually different of the issue author, need to replicate the described issue with a fresh independent wet-boew copy in a different environment.
* Need: Second opinion - A solution is provided, but prior to be applied it needs to be backed.
* Need: Tests example - Test name with step by step with a code sample (if needed) then what is the expected results. Code sample and expected result would describe the test state before and after the fix is applied
* Need: Testing - The issue need testing.
* Need: Use case - The usefulness to be more detailed. Defining what is the desired outcome.

### Query

Identify what the issue is about.

Label color: #84b6eb

* Query: Bug
* Query: Feature request
* Query: Question
* Query: Implementation
* Query: News - Historical
* Query: Discussion


### Severity

Identify the importance of the issue compared to the overhaul wet-boew project.

Accessibility issues are classified with an higher severity.

Label color: Each state have their own color.

* Severity: Critical (color: #b60205)
* Severity: Major (color: #FF3300
* Severity: Minor (color: #fef2c0
* Severity: Normal (color: #cccccc)

Note:
* An issue that are not tagged with any severity is know by default being into a normal severity state.
* A major issue can represent an issue that conflict with one or more core principle of the Web Experience Toolkit, like a HTML validation issue, an accessibility issue according to WCAG...
* A minor issue is under the normal severity.
* A critical issue is a WET feature that are fully unusable or when it is noticed and demonstrated that default and recommended configuration of a WET feature would potentially cause an human right issue as defined by the Canadian Charter of Rights and Freedoms.
* Ideally, the solution of a critical issue would respect all WET core principle. But in some case that is not feasible and the solution applied is a mitigation plan and it is required that a longer term plan is created and closely tracked by the project roadmap lead. For example: https://github.com/wet-boew/wet-boew/issues/8238


### State

Identify what state the issue is currently under. Useful when they are open for long period of time or for complex issue.

Label color: #EE8310

* State: Going stale - Historically used to identify a issue that didn't got immediate and active public interest.
* State: Last call - An official deadline is set which the issue are going to be closed if nothing new is presented. Usually this is because a resolution or a decision has been proposed and we are going to assume it is accepted as is.
* State: On hold - Represent an issue that need to be considered for a future major milestone.
* State: Not supported - The issue is about unsupported feature or block of code.
* State: Ready for implementation - Means that the topic was discussed thoroughly and a solution are defined and it's now ready to be implemented.
* State: Resolved - An acceptable solution have been provided and the issue would be closed after a reasonable period of time. After the period, it will be assumed the author has accepted the acceptable solution.
* State: Work in progress - Represent an issue that is currently under active development and progression is reported frequently.


### User Agent

Identify issue that is specific to a software agent.

Label color: #0b02e1

* User Agent: Android
* User Agent: Blackberry
* User Agent: Chrome
* User Agent: Edge
* User Agent: Firefox
* User Agent: IE11
* User Agent: iOS
* User Agent: JAWS
* User Agent: NVDA
* User Agent: Old IE (IE7)
* User Agent: Old IE (IE8)
* User Agent: Old IE (IE9)
* User Agent: Old IE (IE10)
* User Agent: Old IE
* User Agent: Safari
* User Agent: Voice over
* User Agent: Windows Phone


### Work

Identify what kind of work it required to resolve the issue.

Label color: #8d201c

* Work: CDTS - Content distributed template system (See in gcpedia for more information)
* Work: Accessibility
* Work: CSS
* Work: Demos
* Work: Documentation
* Work: External
* Work: Guidance seeking
* Work: i18n
* Work: Interoperability
* Work: Maintenance
* Work: Mobile
* Work: Printing
* Work: Template
* Work: Test suites
* Work: Translation
* Work: Typo
* Work: Usability


## WET API (overview)

* **Function:** Description of plugin programmable interaction
* **Configuration:** Description of how to change behaviour and/or output. Usually done through sending parameter, like in JSON format.
* **User interface:** Define the HTML semantic at each WET running stage like on and before the progressive enhancement, on applying a supported group of configuration...
* **External data source:** Content information provided from outside the webpage context, like async loading through an Ajax call, reading a stream...
* **View and style:** Presentation layer of the content information structured by user interface and configuration

