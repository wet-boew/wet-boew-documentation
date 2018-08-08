LDPrototype
│   clerk-mustache.html			HTML Page with carousel loaded with Mustache
│   clerk-mustache.json			JSON Data for the above page (See lines 32-69)
│   clerk-wet.html				HTML Page with carousel loaded with templating.js
│   clerk-wet.json				JSON Data for the above page (See line 32)
│   content-en.html				Generic HTML Page
│   content-en.json				JSON Data for the above page
│   readme.txt					You're already here!
│   templates.json				Templates for components, used by templating.js
│
├───ajax						Folder for content that is AJAX'd in
│       sitemenu-en.html		Data for the megamenu
│
├───assets						Images and other assets
├───css							
│       style.css				CSS for the carousel
│       theme.css				CSS for the rest of the page
│
├───fonts						
├───js							
│   │   css.js					(Require Module) Loads in css. Used to load observer.js
│   │   json2html.js			Converts JSON to HTML
│   │   main.js					Main require.js file. Loads in other WB5 modules
│   │   pageBuilder.js			Makes AJAX calls to get JSON data, and builds a page using json2html
│   │   require.js				Module Loader
│   │   templating.js			Builds components from templates
│   │   wet-boew.js				WET-BOEW core, used for WET4 components (feed and megamenu)
│   │
│   ├───deps					
│   ├───i18n					
│   ├───module					Stores require.js modules, used in the carousel
│   │   │   aria.js				Adds ARIA attributes
│   │   │   broadcast.js		Dispatches events on click/keypress
│   │   │   element.js			Helper functions for elements
│   │   │   event.js			Creates custom events
│   │   │   fetch.js			Fetches JSON data and an HTML template, then merges them with Mustache
│   │   │   reveal.js			Reveals/hides one element in a series at a time
│   │   │   timer.js			Periodically dispatches events
│   │   │   toggle.js			Toggles a class on an element
│   │   │
│   │   └───core				
│   │           date.js			Implements a date object
│   │           debug.js		Logs to the console
│   │           number.js		Generates a GUID
│   │           object.js		Implements extend() and get() for objects
│   │           observer.css	CSS trick used to initialised WB5 elements
│   │           pad.js			Pads strings
│   │           store.js		Stores data
│   │           time.js			Gets the time
│   │
│   ├───polyfills				
│   │       fetch.js			Polyfill for IE
│   │       promise.js			Polyfill for IE
│   │
│   └───vendor					
│       └───mustache			
│               mustache.js		Templating Engine
│
└───json						
        carousel_1_V2.json		Data for carousel (Mustache)
        carousel_1_V3.json		Data for carousel (templating.js)
        feeds_1.json			Data for Flickr Feed
        feeds_2.json			Data for Speeches Feed
        feeds_3.json			Data for Messages Feed
        feeds_4.json			Data for Parliamentary Appearances Feed



The WB5 Carousel works by using the timer and broadcast modules to dispatch 'increment' and 'decrement' events. The reveal module listens for these events, and then switches between the panels of the carousel.

!!!Important!!!
The carousel is error prone. Several pages refreshes may be required to properly view the carousel.