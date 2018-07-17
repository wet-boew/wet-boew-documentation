---
published: true
layout: default-theme-wet-boew-en
title: WET 5 - Exploration 1
description: Exploration 1 - Headless framework, component interaction driven from markup, data first design
modified: 2018-07-13
---

This documents is to summarize the work in creating an headless framework, component interaction driven from markup and **data first design**.

Latest prototye (as 2018-07-13) :

* Headless (version 2.1 - [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v2.1/))
	* [Test Page](2018-assets/6-headless-v2.1/testPage.html)
	* [Content Page](2018-assets/6-headless-v2.1/content-en.html)
* Component (version 3 - [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-component-v3/))
	* [Working Example](2018-assets/6-component-v3/docs/index.html)

## Ressources

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

## Data first design

This philosophy is to define first the pieces of key data. Then enhance it with HTML/CSS markup for mobile/tablet/deskop. Then the JS interaction layer.

## Headless browser

The goal is to have the minimum HTML in a page and only use an API to build the page from the ground up. Including the theme and initiating the plugin.


### Headless prototype 1

Publish on: 2018-07-05

* [Working Example](2018-assets/6-headless-v1/testPage.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v1/)

**Note:**
* All the content information is provided via a JSON API call, which is a static file for now.

### Headless prototype 2

Publish on: 2018-07-13

* Working Example
        * [Test Page](2018-assets/6-headless-v2/testPage.html)
        * [Content Page](2018-assets/6-headless-v2/content-en.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v2/)

### Headless prototype 2.1

Publish on: 2018-07-13

This is a slightly better version of the demo. The scripts was cleanup to be easier to read.

* Working Example
	* [Test Page](2018-assets/6-headless-v2.1/testPage.html)
	* [Content Page](2018-assets/6-headless-v2.1/content-en.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-headless-v2.1/)

## Component interaction driven from markup

The goal is to let the web author to use whatever markup he need to acheive his designs and then enhance that markup from functional instruction. Those functional instruction are re-usable in other context.

For example, a carousel will be markup (set by the web author), a timer that change the slide, a next button, a previous button and a play/pause button that stop or start the timer.

Move from CDD model (Component development design) to a LDD model (Logic development design)

### Component prototype 1

Publish on: 2018-07-05

Just copy and paste the following in your web server

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

Publish on: 2018-07-05

* [Working Example](2018-assets/6-component-v2/Main.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-component-v2/)

What it's include:
* Loaded in: Combo Box, Navigation Bar, Carousel and Photo Gallery (also French button, Canada logo and favicon)
* Photo Gallery Loaded in
* Navigation Bar has drop down menus that technically drop down but disappear as you move your mouse from the parent

On development:
* Have the navigation bar bug fixed by adding a timer
* Add a quick inline css to format the photo gallery
* Make the carousel functional
* Move all the functions into separate js files using the code structure that Pierre and Mario have provided
* Continue to try to implement intercooler (possibly knockout)
* Try to re-use the combobox code that was recently developed

### Component prototype 3

Publish on: 2018-07-13

* [Working Example](2018-assets/6-component-v3/docs/index.html)
* [Source code](https://github.com/wet-boew/wet-boew-documentation/tree/master/research/2018-assets/6-component-v3/)


## Templating/Rendering

Need to research for a templating engine. Consider to reuse or by inspired by the template engine create for the combobox.

## Data store

Create a central data store for the headless broswing information and for the component information.
