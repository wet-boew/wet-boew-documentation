---
published: true
layout: default-theme-wet-boew-en
title: 2019-19 - wb5 Moving forward
description: wb5 Moving forward
languages: false
hide_breadcrumb: false
date_modified: 2020-01-13
---

This page is log summary of technical discussion during WET meeting (Codesprint, Tech review, Roadmap meeting) and to track other idea and other work in progress notes relatively to the WB5 project.

## News

### September 9, 2019 update

The wet-boew-experimental github repository would contain the technical experimental product of this new major version of WET-BOEW 5.

Mario spin out a barebone project structure/mechanics during the code sprint.

## Project direction

* We will pursuit the idea proposed in May 2018 WET 5 kickoff metting. [2018-3 - WET 5 kick off](2018-3-wet5-kickoff.html)
* Embrace a data-first design approach.
* The initial attemp of doing a Logic Development Design (LDD) was drop because gear complexity was increasing and proportionally lost/complexify of its reusability in other context. However, the LDD was favorable to do rapid prototyping.

A **plugin** is :
* Template HTML markup
* Visual - Wireframe, visual snapshot
* Style - CSS or SASS or Less instruction to support the visual and template
* Data - Instance of the plugin information and schema definition
* Logic - Function that would transform the data and execute user interaction.
* Config - Customizable behaviour of the component, might get inherited by the data
* I18n - Internationalized string, might get inherited by the config

## Technical note of Pierre

### 2019-09-09

* Rename "handle" by "init"
* Change the init.js by the plugin name, it will easier in the debug console to see from what file the log is coming.
