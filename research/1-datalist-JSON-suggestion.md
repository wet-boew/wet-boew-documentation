---
published: true
layout: default-theme-wet-boew-en
title: 1 - Datalist JSON suggestion - Research and finding - Web Experience Toolkit (WET) documentation
description: Design decision followed by WET.
modified: 2018-02-13
---

## Purpose

Load suggestion from a JSON file

## Requirement
* Load suggestion from an array of string in a JSON file
* Be able to limit the number of displayed suggestion
* Be able to change the filtering behaviour like Any, StartWith, Word


## Similar tools

Here a list of similar tools that was found on a February 2018 research


* [jQuery accessible autocomplete list (with some ARIA)](https://a11y.nicolas-hoffmann.net/autocomplete-list/)
	* The UI and the interaction pattern is interesting and seems to address some of the requirement.
	* It don't support loading suggestion from a JSON file.
	* The javascript code don't seems to be optimized, there is a lot of repeative code.
	* The solution simulate the "suggestion" panel, more testing need to be done.

* [chevaliersnoc.hockeygatineau.com/index.php?page=calendar](chevaliersnoc.hockeygatineau.com/index.php?page=calendar)
* [http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra](http://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-fra.html?lang=fra) - Reverse engenering suggestion for when typing in the field "Terme à cherche"
