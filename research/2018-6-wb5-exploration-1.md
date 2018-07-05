---
published: true
layout: default-theme-wet-boew-en
title: WET 5 - Exploration 1
description: Exploration 1 - Headless framework, component interaction driven from markup, data first design
modified: 2018-07-05
---

This documents is to summarize the work in creating an headless framework, component interaction driven from markup and data first design.


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


## Component interaction driven from markup

The goal is to let the web author to use whatever markup he need to acheive his designs and then enhance that markup from functional instruction. Those functional instruction are re-usable in other context.

For example, a carousel will be markup (set by the web author), a timer that change the slide, a next button, a previous button and a play/pause button that stop or start the timer.

Move from CDD model (Component development design) to a LDD model (Logic development design)

### Working example

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

## Templating/Rendering

Need to research for a templating engine