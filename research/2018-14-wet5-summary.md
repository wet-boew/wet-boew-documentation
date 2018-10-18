---
published: true
layout: default-theme-wet-boew-en
title: 2018-14 - WET 5 Summary
description: Summary of the WET5 project
modified: 2018-09-28
---

Summary of the WET5 project. Question or comments can be share by [opening new issue](https://github.com/wet-boew/wet-boew/issues/new).

* [May 2018 - WET 5 kickoff documentation material](2018-3-wet5-kickoff.html)
* [July 2018 - WB5 exploration 1](2018-6-wb5-exploration-1.html)
* [August 2018 - Suggested Improvements to Build Tools](2018-9-grunt.html)
* [August 2018 - Presentation of the early prototype - Augmented Design](2018-11-wet5-augmented-design-presentation.html)
* [August 2018 - Prototype - alpha](2018-assets/2018-11-prototype/stacks/docs/index.html)
* [September 2018 - WET 5 workshop – UXDS @ STATCAN](2018-13-wet5-workshop-statcan.html)
* [September 2018 - Prototype - menu key navigation](2018-assets/2018-11-prototype/stacks/docs/nav-demo.html)
* September 2018 - Question and concern was expressed during the WET Roadmap meeting
* [October 2018 - Prototype - menu key navigation V2](2018-assets/2018-11-prototype/stacks/docs/nav-demo-v2.html)

## WET 5 architecture in a nutshell, as the end of September 2018

* [Presention of WET 5 architecture](2018-11-wet5-augmented-design-presentation.html)
* Logic Development Design (LDD) approach to component
* More modular, dependencies loading via an AMD architecture
* No build script required for developement
* Can run in parallel with WET 4 without conflict.
* Making the product as a library not a framework.
* There is two prototype - [Carrousel](2018-assets/2018-11-prototype/stacks/docs/index.html); [Key navigation](2018-assets/2018-11-prototype/stacks/docs/nav-demo.html)

## Logic Development Design

* There is no markup transformation on page load.
* Web publisher code the user interface in their final state.
* Logic "gear" are integrated within the DOM nodes.
* Each "gear" are independent from any DOM nodes.
* When "gear" need to play with DOM nodes, as such reference are provided through CSS selector configured within the DOM node via a ```data-*``` attributes.
* Gears are independant and can work together.

### That means

* Easier and quicker for the web publisher to update an UI based on UX research or on business needs.
* Less noticeable technical debt compared to Component Development Design approach 
* More template and documentation will be provided to create UI conform with web accessibility standard.
* Not following an approved template or deliverately modifying an existing one means:
	* Increase web publisher responsability for publishing web content that meet web accessibility standard
	* May require to do full WCAG assesement
	* May require to test the modified template with multiple assistive technologies to ensure it's [accessibility supported](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-accessibility-support-head).
* If a template or documentation get updated, that means:
	* Web publisher would need to stay inform with whatever changes is made.
	* Web publisher would need to apply manually the patch, that for each published page that use that template.

## Project status

### October 9

Prototype update

[Keyboard navigation module](2018-assets/2018-11-prototype/stacks/docs/nav-demo-v2.html)

### October 4 

Informal discussion of what is the advantages and disadvantages about current design approach of WET5

Here a list of the item, determining if it is advantage or a disadvantage are opinionated. Share with us your opinion by submiting a new Github issue in the wet-boew project.

* Very flexible to create amazing interaction pattern.
* Solid alternative for department that cann't add any custom Javascript on their pages/application because web content management system restriction, like the WMS.
* It's modularity shouldn't conflic with other library or framework.
* Each tiny module is called "Gear"
* Planned to be developped as a library and not as a framework.
* Won't conflict with WET4, so it would be possible to use both at the same time
* Planned to create documentation on how to assemble gears into a pattern that the content would meet WCAG 2.1 Level AA
* Espected less effort for the code base maintenance.
* Expected to last for decades
* Expected to be stable and have a few commits occasionally.
* Expected to require less ressource to maintain the library
* Expected to have a wide and active community to develop and maintain a strong documentation of code sample.
* Coding without following the official WET5 documented template/code sample:
	* Higher risk of introducing issue that are not conforming to web accessibility standard
	* Recommend to have the code beign reviewed by an accessibility expert.
	* Recommend to perform a full assessement to evaluate the conformance of WCAG.
	* Recommend to do various device testing. (browser software, mobile device, tablet,...)
	* Recommend to test with various assistive technologies (Screen reader, ....)
	* Recommend to have an easy access to Web Accessibility Expert resource.
	* Recommend to test for performance, the uses of multiple gear might downgrade the web page performance.
	* Some design pattern might require to be enhanced with WAI-ARIA if it don't pass the test or partially/not supported by the browser.
* Implementer of WET5 code sample would need to manage an internal content inventory to ensure current implementations are conforming with the latest code sample version.
* Might impact existing web publishing team where the required efforts for maintenance and testing are increased.
* There is no web components. Implementating the gear as per the code sample and template would became the components.
* Ideal for web system where publisher can have custom javascript. Like in a restricted publishing environment.
* WET 5 will contains a few automated tools to assis the web author during the WCAG confomance check.
* Will be no markup mutation, like dual mode like basic HTML and standard we have in WET4 won't exits in WET 5.
* Doign custom javascript coding wont be required, the gear will replace it.
* WET 5 is binded on the final web interface, a markup which include any code enhancement, like ARIA. 

### as September 28

Question/comments from the WET Roadmap meeting of September 27, 2018

* What would replace the basic HTML mode? Answer: There is no basic HTML mode possible with that design approach.
* It is know in the communauty the purpose of WET framework is to help web publisher to meet easier the web accessibility guideline. It was noted that:
	* Having a such (WET 5) library, there is a high risk that web publisher could avoid to meet the accessibility requirement in order to meet internal goal, especially with short timeline. Answer: Need to be discussed.
	* More error prone to accessibility error for people with average/low web accessiblity skill. Answer: Need to be discussed.
	* May enforce each team to have their own accessiblity expert. Answer: Need to be discussed.
* What is the advantage of WET 5 library compared to other library? Answer: Need to be discussed.
* That library look like to solve a web content managment system (CMS) design issue [1] rather than helping the web publisher to meet web accessibility standard. Answer: Need to be discussed. [1] A CMS like where web publisher can't add any custom JS/CSS code.
* By using that UI design approach, it may require department to hire more web accessiblity expert. Answer: Need to be discussed.
* HTML snipped will be provided which it will be recognied to meet the accessibility guideline. But what if there is an update at that snipped? It looks like that may result with more maintenance work for the web publishing team. Answer: Need to be discussed.

Question/comments from a WET 5 workshop – UXDS @ STATCAN (Published on September 25, 2018)

* [What Works (what we want to keep in WET5)](2018-13-wet5-workshop-statcan.html#what-works-what-we-want-to-keep-in-wet5)
* [What doesn’t work](2018-13-wet5-workshop-statcan.html#what-doesnt-work)
* [What we’d like to see in WET5](2018-13-wet5-workshop-statcan.html#what-wed-like-to-see-in-wet5)


Question/comments from the WET 5 early prototype presentation of August 31

* It was, in general, well received.
* Some UX designer expressed their enthusiasm with that new approach. They liked the most the UI flexibility and being able to make change quickly.
* One active contributor step back because that approach for WET 5 was not aligned with the web component initiative (Custom Element, shadow DOM, HTML Template, ES Module)

## WET 5 prototype

Published on: 2018-10-09
A demo page for the keyboard navigation module. To demonstrate the flexibility of WET5, this module is used to create a menubar, a secondary menu, a carousel and a calender.
* [Working Example](2018-assets/2018-11-prototype/stacks/docs/nav-demo-v2.html)
