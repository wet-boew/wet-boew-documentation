---
published: true
layout: default-theme-wet-boew-en
title: Meeting summary - WET-BOEW documentation
description: Summary of what has been discussed at the meeting.
modified: 2018-07-26
---

Summary of what has been discussed at the meeting.

## Roadmap

2018-08-24 ( 11 participants )
* Review of all the projects
* It was noted the plugin "Country content" is now broken because of the API freegeoip has recently changed.
	* Related to issue: https://github.com/wet-boew/wet-boew/issues/8365
* Announced that WET 4.0.29 will be released in the following weeks
* The WET 5 presentation was reported to the following week. Details for WET 5 will be published here.

2018-07-26 ( 10 participants )
* Review of all the projects
* Presented an early draft of the first test suites we would have in WET.
	* Heading inside ```<summary>``` element
		* [Temporary live example](https://duboisp.github.io/wet-boew-documentation/assessment/2018-1.html)
		* [Source code](https://github.com/juleskuehn/wet-boew-documentation/tree/detailSummary)
* Presented the new [GCWeb home page](http://wet-boew.github.io/themes-dist/GCWeb/index-en.html)
	* More aligned with the Content and IA spec structure
	* Status label to show the current conformance and backlog items
	* Would be possible to have a detailled history and analysis done for each template. Like the [index pages](http://wet-boew.github.io/themes-dist/GCWeb/index/index.html).
	* Can include departemental specific template. Like [ESDC campaing template](http://wet-boew.github.io/themes-dist/GCWeb/campaign2-en.html)
* WET 5
	* Briefly walked through the work done for the prototype
	* Next WET Roadmap meeting, it will be a presentation of a "functional" WET 5 prototype which should be available to initiate some testing.
	* Will focus on a Data first design approach.
* Test suite and potential future design decision (Best practice)
	* Test suites for heading inside ```<summary>``` element once completed may result by drafting a new Design decision
	* Some work will be intiated to draft a best practice to avoid to use ```placeholder``` attribute. Once the test suites created, tested and the design decision drafted/approved then any CSS customization for the placeholder attribute and related issue about a non-conforming color contrast issue might be close. It's behaviour would be fully delegated to how Browser vendor implement that feature and we will promote and update our working example to not use the ```placeholder``` attribute.

2018-06-20 ( 6 participants )
* Desing decision approved:
	* Design decision 4: Basic HTML mode and progressive enhancement
* Review list of projects and added a few inactive known projects in order to expose them better.

2018-05-17 ( 6 participants )
* Design decision:
	* Design decision 3: WET API/Blueprint
		*  Approved
	* 2018-4: Basic HTML and progressive enhancement
		* Waiting for more feedback, see [#8357](https://github.com/wet-boew/wet-boew/issues/8357)

2018-04-19 ( 9 participants )
* Design decision approved:
	* Design decision 1: Use SVG with img element instead of object
	* Design decision 2: Browser supported
* Design proposal :
	* 2018-4: Basic HTML and progressive enhancement
	* 2018-5: WET API/Blueprint
* UX research :
	* Filtering interface with performance meter

2018-03-14 ( 9 participants )
* Re-introduce and walk through the new [wet-boew documentation](https://wet-boew.github.io/wet-boew-documentation/index-en.html) website.
* We openly discussed about the current projects like the design system and the accessiblity project.
* Introduced and general discussion about what each section means and their purpose.
* We have talk, high level discussion, about what are the requirement for next version of WET. Like the need to better support web apps, be more modular, be less opiniated, have an easy way to setup dev environment (build)
* Collected a list of interested member to be part of a WB5 committee/group/task force.
* WB5 commitee will report to roadmap and wb5 discussion would be aside the roadmap meeting

2018-02-23 ( 2 participants )
* Introduce and walk through the new [wet-boew documentation](https://wet-boew.github.io/wet-boew-documentation/index-en.html) website.
* Improvement for the wet-boew documentation are welcome, submit your suggestion through a github issue or a PR.

## Technical review

Technical review meeting are out of scope by default unless there is a project interest.

2018-04-11 ( 4 paticipants )
* WET feature API/Blueprint
	* It should include the translation string
* i18n (brainstorming)
	* French and English are the official supported language.
	* Use of other language that is not officially supported would be the responsibility of the person/organisation that require to use it. Our i18n design approach would need to continue to support the possibility of having multiple/infinity language. A notice explaining that approach would be included near the i18n information.
2018-04-05 ( 4 participants )
* Talk about what browser is supported for current release of WET
	* 5% and more from [statistic](http://wet-boew.github.io/wet-boew-documentation/research/2018-2-browser-usage.html)
	* Latest and previous released version of major desktop and mobile browser
	* FF, [FF ESR](https://www.mozilla.org/en-US/firefox/organizations/), Chrome, IE11, Edge, Safari, Chrome mobile, Safari mobile
	* Running on Windows 7, Windows 10, android, iOS, MacOS
	* Update the prefix CSS tool [wet-boew issues #8339](https://github.com/wet-boew/wet-boew/issues/8339)
	* Update the browser list for saucelab testing [browser.json](https://github.com/wet-boew/wet-boew/blob/master/browsers.json)
* [wet-boew issue #7631](https://github.com/wet-boew/wet-boew/issues/7631) - Moving the italic issue forward, the next step are:
	* Create a page that summarize the issue, the real concern and the suggested fixes.
	* Poke the communauty and the appropriate web standards office
	* Define a usability testing plan and create test cases of the issue and the suggested fixes.
	* Goal: obtain enough data to create a design decision
	* At the end, a design desion will be released with
* Suggested to use documentation badge like : [https://inch-ci.org/learn_more](https://inch-ci.org/learn_more)
* Suggested to review how we use SauceLabs (it was timing out) and re-activate it
* Try to move forward the Issue template - [wet-boew issues 8316](https://github.com/wet-boew/wet-boew/issues/8316)
* Nick will look at how we can implement AMD for wet feature.

2018-02-28 ( 6 participants )
* Member as been requested to send their priority issue they want to move forward
* Identify for the next meeting Github wet-boew repository that have a low/no activity and close their issue tracker.
	* This is to ease maintenance as new issue or updated issue wont be look at.
	* Issue about those repository would be reported to the wet-boew main project
	* Suggestion on those closed repository:
		* Mention in the repo description that issue can be submited in the wet-boew main project
		* Modify the readme and explain how to submit a issue through the wet-boew main project.
* Suggestions: Create a issue.md template file to provide more guidance for when submiting new issue on Github
	* Eric D. would look to submit a PR

## Special meeting

### WET 5 initial prototype - August 31

[Documenation material presented](../research/2018-11-wet5-augmented-design-presentation.html)

16 participant (8 in person and 8 in teleconference)

Summary
* Presentation of the context of WET 5
* Demonstration of the WET 5 alpha prototype by Mario B.
	* Show what the end user will see
	* Show how interaction pattern are implemented directly in the HTML in-page markup
	* Explained that no build script is required to develop, it use Require.js for dependency loading
	* Explained there is no component, all the logic via a "gear" are configured in the HTML markup
	* Explained the WET 5 loader, which leverage the CSS 3 animation event in order to be trigger.
	* WET 5 web page only support one mode, the standard mode.
	* Explained how a "gear" (a javascript module compatible with the new WET5 architecture) are working
	* Created a new "gear" and it was ready to use upon its creation.
	* Show an enhancer hidden in WET 5 where it highlights area in the web page that are more prone to accessibility error.

Prototype available here: [https://github.com/wet-boew/wet-boew-experimental/tree/release5.0-alpha](https://github.com/wet-boew/wet-boew-experimental/tree/release5.0-alpha)

To setup the prototype you need:
* Download the files and extract it in a Apache HTTP Server. Apache HTTP Server is required to apply the server side include.
* Ensure the HTTP server support the URL rewrite
	* If it don't support Apache Server will return you an error. In that situation, open up the .htaccess file located in "stacks/src" and remove the line that do the URL rewrite.
* The working example is located at: stacks/docs/index.html
* The Javascript file is located at: stacks/src

### WET 5 Kickoff - May 10

[Documentation material presented](../research/2018-3-wet5-kickoff.html)

15 participant (8 in person and 7 in teleconference)

Summary
* The high level concept for WET 5 core was well received.
* It was suggested to switch over ES6 and use thrid party service such Babel to run ES6 on browser that don't support it
* Some concern was express in regards of what the build system could be to support the WET 5 product.
* It was recommended to documents and do more research about the needs from the user of WET.
* Next WET 5 meeting would be more topic specific, like focusing on the core, the build, testing, etc.
* The overall project monitoring will be done through the WET Roadmap meeting.

List of todo:
* Reach out and try to being active on social media.
* Create a page with of thing that need to be addressed and/or taken care of.
* Build small prototype and have it tested with different audience (web developer, web author, WET core developer)
* Produce a documentation that could be easilly aligned with the TBS Digital Standard
* Find contributor across the spectrum and seek their feedback on the product.
* Develop a plan and a strategy to address concern between moving from WET 4 to WET 5.
* Develop a plan and a strategy to address some WET user fears, like removing the jQuery library from WET core.

Suggestion/Idea 
* Use a top bar overlay to advertise the user that he are in the Basic HTML mode
* Having two build system, one for quick local developpement and the full build that may require nodeJS. Some opposition was expressed about having two different type of build.
* Support and promote mobile first design
* Create a business plan about the markup for WET 5, use focus group and explore if it makes senses
* Consider a way to have organisation to lead some WET plugin.

