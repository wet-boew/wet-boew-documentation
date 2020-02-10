---
published: true
layout: default-theme-wet-boew-en
title: Save HTML table into CSV
description: Download an HTML table as a CSV file
languages: false
hide_breadcrumb: false
date_modified: 2020-02-10
---

Download an HTML table as a CSV file.

[Source code and partial documenation](https://github.com/duboisp/GCWeb/tree/tocsv) 

Status: The plugin is in an experimental stable state. 

Todo:
* Testing still need to be completed. Like in IE11 and FF
* Minor code optimation are still left
* Need to consider to move the download function in WET core.

## Requirement

* **Core:** Be able to download an HTML table into CSV (Comma Separated Value) Format.
* Support simple table where the first row is the column header and there is no row header.
* Support table enhanced with the datatable plugin


## Resources

Standards:
* [CVS Format - RFC 4180](http://json2html.com/builder/)
	* Technical specification on the CSV format
* [CVS on the web - W3C](https://www.w3.org/standards/techs/csv#w3c_all)
	* List of W3C work on CSV
* [A primer: CVS on the web](https://www.w3.org/TR/tabular-data-primer/)
	* Primer on how to express usefull metadata about CSV files and other kinds of tabular data.
* [File API](https://www.w3.org/TR/FileAPI/)
	* Parially implemented across browser, it defines the Blob interface used to save as.
* [DOM Interface for the <code>&lt;table&gt;</code> element - HTML 5.3](https://www.w3.org/TR/html53/tabular-data.html#ref-for-dom-interface%E2%91%A6%E2%91%A3)
	* Javascript interface to read tabular data form an HTML table element.

Other resource:
* [FileSaver.js](https://github.com/eligrey/FileSaver.js)
	* Javascript library that facilitate the implementation of a javascript saveAs functionality across browser.
* [DataTables - API](https://datatables.net/reference/api/)
	* API of the third party plugin used by the WET table enhancement plugin.
* [Support chart for "blob" object](https://caniuse.com/#search=blob)
	* Representation of how blob object is supported across browser.

## Feature overview

There is two part of this feature request:
1. Providing a UI (User Interface) to let the user to initiate the action of downloading the HTML table as a CSV format
	* Add a new action in the action manager. This seem the easiest and fastest solution and allow web publisher to use the ```doaction``` plugin to trigger the action.
2. Create the CSV file.
	* Collecting the tabular information from the HTML table and/or from data table
	* Generating the content of the CSV file.
3. Add a download functionality
	* Will be limited to supported browser by WET.

## Structure

The new action will be named "tocsv".
The Action "tocsv" will be responsible to collect the information from the HTML table, to structure the CSV file and then initiate the download.
The download will be moved outside the action as it is at higher risk to be reused by other component for other purpose, like saving a user state or something else.

## Collecting the tabular information

Gathering the information from the HTML table is pretty streat forward, but not from the data table plugin. The chalenge with the data table plugin is it only show, in it's HTML form, a sub-set of the tabular data. Although the tabular data can be retreived from API call. Integrating the support for data table obfuscate more the readibility of code as a completly different technique is needed to access to equivalent data. In the array of rows taken from data table do not include the heading row compared to the rows properties from the ```<table>``` element which include heading row too.

When iterating through rows by using the data table API, it is not all the row that have an associated HTML element. So the cells information is retreived through the ```cell( rowIndex, colIndex ).data()``` API. Then a test is required to know if the content of that cell is HTML, for the CSV we are only to provide textual content, not HTML markup unless if that explicitly display at the screen. 

### Complex table support

The collecting of tabular are limited to simple table. 
Complex table, like the one supported by the WET table parser are considered out of scope for now. Supporting those will require to define several strategy to support each variation. Like grouping and reversing the axes. That might end up to create a complicated configuration file for the "tocsv" action. Also, at the time of writing this, it is noted that the WET table parser need to be fully reviewed and rewritten. It was proposed to follow a structure similar to Data Cube.
 
## Download

The download function was inspired by the FileSave.js code. But I removed all the support for unsuported browser by WET which reduced a lot the code. Also, we didn't implemented the fix which force to add the BOM to text file as no file in WET include the BOM flag.

Need to consider to move the download function into the WET core.

## Developer notes

* 2018-09-25 - The code on how the download is trigger was updated to rely only on the anchor element. Once the anchor is created, a special click handler is added to call ```navigation.msOpenOrSaveBlob()``` function instead of using a hack by opening the blob URL in a different window. Also, that approach is more aligned with the spec and it ease the analytic download tracking.