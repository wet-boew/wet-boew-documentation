---
published: true
layout: default-theme-wet-boew-en
title: WET 5 - Augmented Design - Early prototype presentation
description: Exploration 1 - Headless framework, component interaction driven from markup, data first design
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---
Web Experience Toolkit (WET) Next  - v5.0


*Presented on August 31.*
Prototype available here: [https://github.com/wet-boew/wet-boew-experimental/tree/release5.0-alpha](https://github.com/wet-boew/wet-boew-experimental/tree/release5.0-alpha)

To setup it you need:
* Download the files and extract it in a Apache HTTP Server. Apache HTTP Server is required to apply the server side include.
* Ensure the HTTP server support the URL rewrite
	* If it don't support Apache Server will return you an error. In that situation, open up the .htaccess file located in "stacks/src" and remove the line that do the URL rewrite.
* The working example is located at: [stacks/docs/index.html](2018-assets/2018-11-prototype/stacks/docs/index.html)
* The Javascript file is located at: stacks/src


## the journey…



* WCAG 1.0 recommended 1999
	* Common Look and Feel v1.0 in 2000
* WCAG 2.0 recommended in 2008
	* Common Look and Feel v2.0 in 2010
* Web Experience Toolkit (WET) brand created (a.k.a CLF Template) in 2011
* moved to Github in 2012
* released WET 3.0 that year (2012)
* released WET 4.0 in 2014
* yep it is 4 years old! .. so is that bad.. kinda but not really..

## the challenge(s)…

* Accessibility is not so easy to understand and has overlaps making it hard to get it right, right away
* JavaScript Frameworks are tools for making JavaScript coding faster and more efficient
* Web as a landscape is a moving target and constantly evolving with new players (browsers and standards) phasing in and out

## the answer…

* An award-winning front-end framework for building websites that are accessible, usable, interoperable, mobile friendly and multilingual
* A collection of flexible and themeable templates and reusable components
* A collaborative open source project led by the Government of Canada

## yet we still…

* Needed to ensure the design pattern used are conforming to all applicable standard (WCAG, WAI-ARIA, HTML,..)
* Needed to ensure the design pattern used are widely compatible with AT, Browser and other framework (NVDA, JAWS, IE11, Chrome, FF, application stacks and other frameworks).
* Needed to ensure the design pattern used are responsive (mobile, tablet, desktop) and mobile first.

## so lets talk stats…

* 60% of all commits ( ~ 4100 since 2012 ) isolated to 6 people
* GCWeb is the predominant theme pushing any innovation to the Web Experience Toolkit plugins and/or architecture
* Majority of plugins created before 2012 ( 83% )
* Improvements and enhancements have been mostly focused on rebranding and theme compatibility
* JS frameworks generally [last a couple years](https://www.bitovi.com/blog/longevity-or-lack-thereof-in-javascript-frameworks), JS libraries … decades
* Node is a fantastic baseline is still rather limited in adoption for most departments

## developing today…

* Expect a greater focus on evolutionary architecture and microservices data distribution
	* Modularity and loose coupling, organization around business capabilities
	* And the ability to conduct operationally inexpensive experiments
* Expect evolution for CSS and steady improvement in JavaScript
	* Rest/spread properties, Asynchronous iteration, Dynamic import() of modules
	* … to name a few
* React reigns today; ReasonML could be next; and so on and so on
	* Angular’s popularity continues to decline, while Vue's small following continues to grow (especially in China).
	* Facebook released ReasonML in 2017, and they are anticipating more open-source releases from Facebook this year.

## predications for 2030…

* There will be approximately 5 more frameworks that will come and go
* API’s will become a more prominent
* Big name platforms like Facebook, Youtube and Google will keep influencing/driving change to front-end frameworks

## what does this all mean…

* WET change to quarterly releases made things easier for adopters
* Community is there but has a hard time contributing
* WET is seeing more and more pressure to be more agile
* Component Development Design (CDD) has a noticeable technical debt
* Contribution can be increased if we can find a way to improve the development experience

## WET Next  - v5.0

* Logic Development Design (LDD) approach to component
* A simpler development lifecycle
* Stronger modularization
* More up-to-date documentation
* Greater focus on design patterns to increase accessibility awareness

## Quote

> “to make the easy things easy, and the hard things possible”

–Larry Wall

Creator, Perl Programming Language

## the good stuff…

* Supported dependency loader (requireJS)
* A time tested and hardened modular approach (AMD)
* Adoption of latest browser API features (pagevisibility API)
* Stronger focus on strongly supported polyfills to augment browsers to standard
* A new accessibility easter egg to help developers with page audits ( thank you a11y! )
* A new ‘automagic’ DOMObserver allowing to Ajax content to be automatically detected

## more good stuff…

* Anticipated over 1/3 reduction in code base
* 100% compatibility with CLF2, WET3, WET4 - more like can live in parallel with
* Stronger focus on innovation and presentation layer agility
* Further decoupling of theme from the WET JS allowing each theme to be more autonomous in CSS ( not all forced to change to one )
	* GCWeb - Bootstrap
	* GCWU - Custom CSS
	* CLF 2 - Custom CSS

## Ok, not so good parts…

* WET Next is more complex in terms of implementation than it’s earlier versions
* More HTML mark-up required
* Strong reliance on documentation and its solid design patterns
* That’s it…

## Demo

## to recap…

* Component Development Design are more prone to perpetual change, than Logic Development Design
* This new approach has a substantial development improvements
* The development process forces modular design
* Collaboration is now easier since it requires minimal setup time
* It allows for a dramatic increase in innovation without any JS changes (cool right? )

## Questions
