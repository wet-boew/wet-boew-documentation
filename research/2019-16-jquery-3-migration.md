---
published: true
layout: default-theme-wet-boew-en
title: 2019-16 - jQuery 3 Migration
description: Exploration of a jQuery 3 migration
modified: 2019-02-07
---

## Goal

* Migrate WET 4 to jQuery 3

## To Do

* Investigate and determine what version of jQuery should go into the next version of WET (3.3.1 / slim vs other?) 
* Investigate and determine what is the change list / breaking change list of jQuery 2.2.4 -> jQuery 3.3.1\
* Determine how many plugins WET has and put together a full list of dependencies that are being used 
* Investigate with vulnerabilities impact jQuery 2.2.4, as well as if the offending code is used anywhere in WET 
* Fork the documentation repo and add a placeholder page for the jQuery 3 Migration. All project documentation will go here. 
* Create a GitHub issue in the main WET repo to facilitate a discussion for the upgrade 
* Create a jquery3-migration branch in WET that pull requests will be added to 
* Fork the newly created migration branch from WET and add the jquery migration plugin
* Investigate and determine the easiest way to add dist files to github pages or some web space (use a tool like travis, netlify, Jenkins to automagically send the dist files to the server) 

## Future discussion topics: 

* How do we do outreach on this mini project?
* Do we / should we get the Canada Digital team to spread the word? 
* Do we tweet? 
* Do we need a page that explains the impacts of the project – and once the project is done – what it means for those folks upgrading (especially the folks that have custom tools that leverage jquery 2.x) 
* So many questions 

## GitHub Issue Discussion 

* [GitHub Issue Discussion](https://github.com/wet-boew/wet-boew/issues/8557)
