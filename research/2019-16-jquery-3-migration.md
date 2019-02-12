---
published: true
layout: default-theme-wet-boew-en
title: 2019-16 - jQuery 3 Migration
description: Exploration of a jQuery 3 migration
modified: 2019-02-07
---

## Project Description

WET 4.x will include an upgrade to jQuery 3.3.1. This page is being used to coordinate testing, develop code, and document the work that needs to be done to perform the upgrade. Apart from the research listed below, we’ve also attached some useful links to official jQuery upgrade guides, if you needed more information.

## On this page 

* [Good to know](#good-to-know)
* [Test plan](#test-plan)
* [To do](#to-do)
* [Future discussion topics](#Future-discussion-topics)
* [GitHub issue discussion](#GitHub-issue-discussion)
* [Out of scope](#out-of-scope)

## Good to know 

### Versions and migrate plugin

We're upgrading jQuery from version 2.2.4 to 3.3.1. During testing, we will include the jQuery migrate plugin 3.0.1 to simplify the upgrade. The migrate plugin will allow us to identify any deprecated features in use so that we can update the WET code to run properly on the upgraded jQuery. However, the migrate plugin is a temporary solution for testing and development purposes only, and the migrate plugin will be removed when the upgrade is launched.

### Security issues

The major issue here is that jQuery 2.2.4 is no longer being patched or supported.

### Change log and upgrade guide

We'd recommend that you have a look at the official jQuery change log and upgrade guide to get an idea of all the important changes and have some accurate information on hand if something is not clear.

* [Summary of Important Changes](https://jquery.com/upgrade-guide/3.0/#summary-of-important-changes)
* [jQuery Core 3.0 Upgrade Guide](https://jquery.com/upgrade-guide/3.0/#summary-of-important-changes)
* [jQuery 3 Migrate Plugin](https://github.com/jquery/jquery-migrate#migrate-older-jquery-code-to-jquery-30)
* [jQuery 3 launch blog post](https://blog.jquery.com/2016/06/09/jquery-3-0-final-released/)


## Test plan 

### Development Site

The following links are to the development site (latest build to my jquery3-migration branch) and a link directly to the branch code:

* [Development Site](https://wet-boew-jquery-3-migration.netlify.com/index-en.html)
* [GitHub jQuery 3 Fork](https://github.com/neilmispelaar/wet-boew/tree/jquery3-migration)


### Test status

To do

### WET Plugins

<table class="table table-hover table-responsive">
    <thead>
        <th scope="col">Name</th>
        <th scope="col">Breaking Change Code Present</th>
        <th scope="col">Requires Change</th>
        <th scope="col">Current Status</th>
    </thead>
    <tbody>
        {% for plugin in site.data.jquery3migration.plugins %}
        <tr>
            <td><a href="{{ plugin.href.jquery3 }}">{{ plugin.name }}</a></td>
            <td>{{ plugin.name }}</td>
            <td>{{ plugin.status }}</td>
            <td>Nope</td>
        </tr>
        {% endfor %}
    </tbody>
</table>

### Canada.ca Theme Plugins

To do

### Polyfills 

To do

### WET-BOEW JS Dependencies

To do

## Breaking Changes

The following section lists all of the breaking changes that were introduced by jQuery 3.x. 

<ul>
{% for breakingchange in site.data.jquery3migration.breakingchanges %}
    <li>{{ breakingchange.name }} | {{ breakingchange.category }}</li>
{% endfor %}
</ul>





## To do

* Investigate and determine what version of jQuery should go into the next version of WET (3.3.1 / slim vs other?) 
* Investigate and determine what is the change list / breaking change list of jQuery 2.2.4 -> jQuery 3.3.1\
* Determine how many plugins WET has and put together a full list of dependencies that are being used 
* Investigate with vulnerabilities impact jQuery 2.2.4, as well as if the offending code is used anywhere in WET 
* Fork the documentation repo and add a placeholder page for the jQuery 3 Migration. All project documentation will go here. 
* Create a GitHub issue in the main WET repo to facilitate a discussion for the upgrade 
* Create a jquery3-migration branch in WET that pull requests will be added to 
* Fork the newly created migration branch from WET and add the jquery migration plugin
* Investigate and determine the easiest way to add dist files to github pages or some web space (use a tool like travis, netlify, Jenkins to automagically send the dist files to the server) 

## Future discussion topics

* How do we do outreach on this mini project?
* Do we / should we get the Canada Digital team to spread the word? 
* Do we tweet? 
* Do we need a page that explains the impacts of the project – and once the project is done – what it means for those folks upgrading (especially the folks that have custom tools that leverage jquery 2.x) 

## GitHub issue discussion 

* [GitHub Issue Discussion](https://github.com/wet-boew/wet-boew/issues/8557)


## Out of scope  

### Usefulness of jQuery 

There is a debate to be had about how useful jQuery is in today's modern browser environments. Most modern browsers support newer JavaScript APIs which allow for complex query selection `document.querySelectorAll` https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll without a third party library like jQuery. These native JavaScript API calls will likely also be more performant than third party libraries as well. 

Thankfully, the purpose of this research page is to determine the path forward for the upgrade to jQuery 3. Conversations about the future use of jQuery are out of scope for this project.
