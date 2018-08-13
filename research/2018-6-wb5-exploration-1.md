---
published: true
layout: default-theme-wet-boew-en
title: WET 5 - Exploration 1
description: Exploration 1 - Headless framework, component interaction driven from markup, data first design
modified: 2018-07-27
---

The current exploratory direction for WET 5 is that of a **data-first design**. This design philosophy focuses on the key data of a page first, and the presentation of that data second. With data defined first, different HTML/CSS structures and themes may be applied for different platforms.

There are currently two parts to the WET 5 research : a headless framework, and component interation driven from markup (coined LDD).

[Link to latest prototype (as 2018-07-27)](#combined-prototype-1) 

## Resources

* [JSON2HTML](http://json2html.com/builder/)
        * Example of horizontal transformation from HTML to JSON and vice versa.
* [json:api](http://jsonapi.org/)
        * JSON strucuture to exchanges information
        * Communcation protocol (RESTful) to exchange information between the client and the server
* [Require.js](https://requirejs.org/)
        * Javascript library loader
* [Quilljs](https://quilljs.com/)
        * WYSIWYG / Rich text editor that are API based
* [Knockout](http://knockoutjs.com/)
        * A JS framework based on data binding
* [intercooler.js](http://intercoolerjs.org/)
        * A JS framework event based declared through HTML attribute. There is no initialization.
* [Github masterbee/wet-boew-next-development](https://github.com/masterbee/wet-boew-next-development)
        * High level prototype showing component interaction driven from markup.
* [Github masterbee/wet-boew-next](https://github.com/masterbee/wet-boew-next)
        * High level view of the file system structure that can be for WET5. It's also include the high level prototype.
* [Template playground prototype - Combo box](2018-1-template-playground-prototype.html)
        * Template logic generator based on the state of a JS object. (It's reactive)
* [JSON-LD Playground](https://json-ld.org/playground/)
        * Transforming a JSON-LD
* [JSON-LD W3C Standard](https://www.w3.org/TR/json-ld/)
        * Exchange data format in JSON of RDF tripples

## Headless Framework

The goal of the 'headless' webpage is to have the minimum amout of HTML and instead use a JSON API to build the page. This includes loading in the theme and plugins using JSON. In any of the following prototype, view the page source to better understand this concept.


### Headless Prototype 1

Published on: 2018-07-05

All the content information is provided via a JSON API call, which is a static file for now.

* [Working Example](2018-assets/6-headless-v1/testPage.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v1/)


### Headless Prototype 2

Published on: 2018-07-13

This demo can switch between two pages without refreshing the browser, using only an AJAX call.

* Working Example
	* [Test Page](2018-assets/6-headless-v2/testPage.html)
	* [Content Page](2018-assets/6-headless-v2/content-en.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v2/)

### Headless Prototype 2.1

Published on: 2018-07-13

A slight improvement over version 2, with cleaner scripts for better readability.

* Working Example
	* [Test Page](2018-assets/6-headless-v2.1/testPage.html)
	* [Content Page](2018-assets/6-headless-v2.1/content-en.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v2.1/)

## Component interaction driven from markup

In WET 5, a goal is to move away from using the component classes, instead attaching logic directly to the page markup. Thus, we move from a Component Development Design model to a Logic Development Design model (LDD).

A web author may use whatever markup is needed, and then enhance that markup with reuseable, modular bits of Javascript logic.

For instance, the markup for a carousel may be a simple series of images. Attached to this would be a 'timer' module, 'next', 'previous' and 'play/pause' button modules, and a 'hide/show' module. These individual modules would interact to modify the markup and create the carousel.

The purpose of this is to increase flexibility, possibility of designs, and ease maintenance.

### Component prototype 1

Published on: 2018-07-05

Copy and paste the following in your web server.
This code implements a timer module that periodically adds to the text.

**JS - wb5.js**
```
/**
* Wet  Next
*/
(function( dom , win ){
 
                var Inventory = {
                        timer : function( node, selectors, options ) { node.innerHTML = node.innerHTML + " ( OK TIMER )"; }
                }
       
                var wb5 = dom.querySelectorAll('[data-wb5]');
 
                for (var i = wb5.length - 1; i >= 0; i--) {
                        var elm = wb5[i],
                                params = elm.getAttribute('data-wb5').split('@');
 
                        Inventory[ params.shift() ]( elm, params );
                }
 
})( document, window)
```

**HTML - index.html**
```
<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Welcome</title>
        <link rel="stylesheet" href="">
</head>
<body>
        <h1> Welcome </h1>
        <p data-wb5="timer@selector@options" >  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </p>
        <script src="js/wb5.js" type="text/javascript" charset="utf-8" async defer></script>
</body>
</html>
```

### Component prototype 2

Published on: 2018-07-05

In this demo, there is limited functionality. The Navigation Menu and Photo Gallery are partially functional.

* [Working Example](2018-assets/6-component-v2/Main.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-component-v2/)

Development notes:
* Fix the navigation bar by using a timer
* Format the photo gallery with CSS
* Make the carousel functional
* Seperate the JS functions into seperate modules
* Research intercooler and knockout
* Try to re-use the combobox code that was recently developed

### Component prototype 3

Published on: 2018-07-13

Photo Gallery functionality has been extended, but is still limited. This example introduces RequireJS.

* [Working Example](2018-assets/6-component-v3/docs/index.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-component-v3/)

{% raw %}

<h3>Component Prototype 4       <span class="label label-warning">High level docs incomplete</span></h3>

{% endraw %}

Published on: 2018-07-23

Using different code from the previous prototypes, this demo implements a carousel through several small modules loaded in with RequireJS.

* [Source code (all files)](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018/logic-design/1)

About this demo:
* Requires "Fetch" and "Promise". They are polyfilled if they not supported.
* Use "RequireJS" as the dependency loader
* Use "Mustache" as the template engine

File description
* [Core of wb5](https://github.com/wet-boew/wet-boew-documentation/blob/master/research/2018/logic-design/1/src/wb5.js) (js)
        * This main file is used to load in logic modules. It uses a CSS trick to dispatch an event whenever an element with the 'data-wb5' attribute is loaded. This event is used to initialise the modules.

### Component Prototype 5

Published on: 2018-08-10

Using the same modules as the carousel in V4, along with a single new module, this prototype implements a countdown/stopwatch.

* [Working Example](2018-assets/6-component-v5/docs/countdown-test.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-component-v5/)

## Combined Prototypes

The following prototypes seek to combine the work on the Headless Framework and Markup-Based Interaction.

### Combined Prototype 1

Published on: 2018-07-27

This version combines Headless V2.1 and Component V4. The carousel is loaded in with AJAX, then made functional by the RequireJS modules. 
A **readme** file is included, containing basic explanations of each file.

* [Working Example](2018-assets/6-combined-v1/clerk-wet.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-combined-v1)


## Miscellaneous
### Templating/Rendering
A templating engine is required to marry the data and the structure. Currently, two templating systems are being used: Mustache, and the templating engine created for the combobox. In the future, an upgraded version of the combobox engine may suffice.

### Data store

Create a central data store for the headless broswing information and for the component information.

### Page data as JSON

In the current headless prototype, json2html is being used to transmit data and build pages from JSON. However, this has a few drawbacks:
* Since the JSON is line-per-line equivalent to the source HTML, the data object is rigidly tied to the page structure, and contains unnecessary information such as DOM elements.
* json2html does not allow for both text and child elements in the body of an element.
* Arrays can not be used in the data object
Research is being done to find a better format for page data.
