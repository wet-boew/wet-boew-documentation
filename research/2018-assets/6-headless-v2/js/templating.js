( function( $, window, doc, wb ) {
	"use strict";
/*
 * Variable and function definitions.
 * These are global to the plugin - meaning that they will be initialized once per page,
 * not once per instance of plugin on the page. So, this is a good place to define
 * variables that are common to all instances of the plugin on a page.
 */
 var componentName = "wb-generic-ph",
 selector = "." + componentName,
 initEvent = "wb-init" + selector,
 $document = wb.doc,
 templates = {},
 virtualLinearDOM = {},
 docFragmentSourceUI = doc.createDocumentFragment(),
 eventsToBeHook = [],
 	walk = function( node, dataObj, asScoped ) {

	 	var children = node.childNodes,
	 	i, i_cache,
	 	i_len = children.length,
	 	nodeToBeRemove = [];

	 	for( i = 0; i < i_len; i ++ ) {
	 		i_cache = children[ i ];

				// If it is a textNode and contain handlebar
				if ( i_cache.nodeType === 3  && i_cache.textContent.indexOf( "{{") != -1 ) {

					var regExMustache = /{{\s?([^}]*)\s?}}/g;

					i_cache.textContent = i_cache.textContent.replace( regExMustache, function( a, b ) {
						return getObjectAt( dataObj.data, b.trim() );
					} );
				}

				// It's a document fragment node
				if ( i_cache.nodeName === "TEMPLATE" ) {

					// Get the template name if any, if no name then generate it and attach on the parent.
					// Cache it as being a default in the dataObj

					// Think if it will be better to cache it only later on, when that template would be actually needed
					var templateName = getAndRemoveAttr( i_cache, "data-wb5-template" );

					if ( !templateName ) {
						templateName = wb.getId();
					}

					if ( !i_cache.parentNode.hasAttribute( "data-wb5-template" ) ) {
						i_cache.parentNode.setAttribute( "data-wb5-template", templateName );
					}

					dataObj.tmplDefault( templateName, i_cache );
					

					continue;
				}

				// Skip the current look if the current node is not an element
				if ( i_cache.nodeType !== 1 ) {
					continue;
				}
				
				// Parse Current node
				if ( i_cache.hasAttribute( "data-wb5-for" ) ) {
					// This is a iterator

					// Note: if this element contain a "if" it will be processed by the iterator template engine.

					var forAttr = getAndRemoveAttr( i_cache, "data-wb5-for" );
					var forParsed = parseFor( forAttr );


					var objToBeIterated = getObjectAt( dataObj.data, forParsed.for );

					if ( !objToBeIterated ) {
						throw "Iterator not found";
					}


					// Iterate (ObjToBeIterated need to be an array to know the "active" property)
					var opts_len = objToBeIterated.length;
					var i,
						nbNode = 0; // Number of added node


	    			objToBeIterated.wbLen = parseInt( opts_len ); // Ensure we don't get a reference but a copy

	    			if ( $.isArray( objToBeIterated ) ) {
	    				objToBeIterated.active = nbNode;
	    			}

	    			for( i =0; i < opts_len; i++) {

						// TODO: Check if the i_cache is a template element, if so then run it as a sub-template
						// TODO: Check if the i_cache contains "data-wb5-template" elements, if do 
						var cloneItm = i_cache.cloneNode( true );

						var ifParsed = processIf( cloneItm );


						var dt = {
							"wb-idx": i,
							"wb-nbNode": nbNode,
							parent: dataObj.data
						};
						dt[ forParsed.alias ] = objToBeIterated[ i ];


						// Make the new Data Reactive.....
						dt = wb5React( dt );

						if ( asScoped ) {
							dataObj.data[ asScoped ] = dt;
						}

						if ( !ifParsed.if || isTrue( ifParsed.if, dt.data, dataObj.data ) ) {

							nbNode = nbNode + 1;

							walk( cloneItm, dt, asScoped );
							node.appendChild( cloneItm );

						}
					}

					objToBeIterated.wbActive = nbNode; // Number of active nodes

					nodeToBeRemove.push( i_cache );

					continue;
					
				} else if ( i_cache.hasAttribute( "data-wb5-if" ) || i_cache.hasAttribute( "data-wb5-else" ) || i_cache.hasAttribute( "data-wb5-ifelse" ) ) {
					// This is a conditional 

					// throw "Not implemented"
					//var ifParsed = processIf( i_cache );

				}

				// Go deeper in the next children element
				walk( i_cache, dataObj, asScoped );
			}

			// Removing node that was used for iteration or not accepted by the "if" query
			i_len = nodeToBeRemove.length;
			for ( i = 0; i !== i_len; i = i + 1 ) {
				node.removeChild( nodeToBeRemove[ i ] );
			}


			//
			// Attribute Binding
			//
			if ( node.nodeType === 1 && node.hasAttribute( "data-wb5-bind" ) ) {
				var bindAttr = getAndRemoveAttr( node, "data-wb5-bind" ),
				bindList = bindAttr.split(", ");

				for ( var i  = 0; i < bindList.length; i++ ) {
					var bindPart = bindList[ i ].split("@");




					if ( !node[ bindPart[ 0 ] ] ) {
						// Initialize the value
						node.setAttribute( bindPart[ 0 ], getObjectAt( dataObj.data, bindPart[ 1 ] ) );

						// Observer
						dataObj.observe(bindPart[ 1 ], function (value) {

							if ( typeof node[ bindPart[ 0 ] ] !== "undefined" ){
								// Like the attribute "value"
								return node[ bindPart[ 0 ]] = getObjectAt( dataObj.data, bindPart[ 1 ] ) || '';
							} else {
								return node.setAttribute( bindPart[ 0 ], getObjectAt( dataObj.data, bindPart[ 1 ] )) || '';
							}
						});
					} else {
						// Initialize the value
						node[ bindPart[ 0 ]] = getObjectAt( dataObj.data, bindPart[ 1 ] );

						// Observer
						dataObj.observe(bindPart[ 1 ], function (value) {

							return node[ bindPart[ 0 ]] = getObjectAt( dataObj.data, bindPart[ 1 ] ) || '';
						});

					}
				}
			}
			
			//
			// TODO: InnerHTML and TextContent binding
			//
			if ( node.nodeType === 1 && node.hasAttribute( "data-wb5-text" ) ) {

				// Get the event that we need to listen to
				var onText = getAndRemoveAttr( node, "data-wb5-text" );

				// Initialize the value
				node.textContent = getObjectAt( dataObj.data, onText );

				// Observer
				dataObj.observe(onText, function (value) {
					return node.textContent = getObjectAt( dataObj.data, onText ) || '';
				});

			}

			//
			// Event listener
			//
			if ( node.nodeType === 1 && node.hasAttribute( "data-wb5-on" ) ) {

				// Get the event that we need to listen to
				var onAttr = getAndRemoveAttr( node, "data-wb5-on" );

				var multipleHandler = onAttr.split( "; "),
				i, i_len = multipleHandler.length;

				for ( i = 0; i < i_len; i++ ){

					var onPart = multipleHandler[ i ].split("@"),
					eventListener = onPart[ 0 ],
					eventAction = onPart[ 1 ],
					idxFirstParentesis = eventAction.indexOf( "(" ),
					idxLastParentesis = eventAction.lastIndexOf( ")" ),
					innerExpression;



					// Get the function that need to be trigger
					var fnToBeTrigger,
					expression;

					if ( idxFirstParentesis && idxLastParentesis ) {
						fnToBeTrigger = eventAction.substring(0, idxFirstParentesis).trim();
						expression = eventAction.substring( idxFirstParentesis + 1, idxLastParentesis ).trim();
					}

					if ( !fnToBeTrigger ) {
						throw "Error, an event handler need to call a function"
					}

					// Parse the inner expression, if any
					if ( expression ) {
						expression = parseExpression( expression, dataObj.data );
					}


					// Check if it need to be trigger now
					if ( eventListener === "live" ) {
						getObjectAt( dataObj.data, fnToBeTrigger ).call( dataObj.data, expression );
					} else {

						// Store the event handler information to be attached after the fragment in on the real DOM.
						eventsToBeHook.push(
						{
							nd: node,
							evt: eventListener,
							trigger: fnToBeTrigger,
							attr: expression
						}
						);
					}

				}

			}
	},

	getAndRemoveAttr = function( el, attr ) {
		var ret = el.getAttribute( attr );
		el.removeAttribute( attr );
		return ret;
	},

	// TODO: Write a series of test for finding quoted string
	isTrue = function( condition, dt, dtParent ) {
		return !!parseExpression( condition, dt, dtParent );
	},

	parseExpression = function( exp, data, altData ){

		var regDoubleQuotes = /"([^"\\]*(\\.[^"\\]*)*)"|\'([^\'\\]*(\\.[^\'\\]*)*)\'/g; // https://stackoverflow.com/questions/249791/regex-for-quoted-string-with-escaping-quotes
		var regWordFunction = /[a-zA-Z]([^\s]+)/g;
		var regExMustache = /{{-\s?([^}]*)\s?-}}/g;

		//
		// Find double quotes string
		//
		var lstString = [];

		exp = exp.replace( regDoubleQuotes, function( a, b ) {
			var ret = "{{-" + lstString.length + "-}}";
			lstString.push( a );
			return ret;
		} );


		//
		// Find any word/function call (No space allowed and no string inside them)
		//
		exp = exp.replace( regWordFunction, function( a, b ) {

			var replacementValue,
			query = a.trim();

			// Replace internal mustache if any
			query = query.replace( regExMustache, function( a, b ) {
				return lstString[ b ];
			} );


			try {
				replacementValue = getObjectAt( data, query );
			} catch ( ex ) {
				try {
					replacementValue = getObjectAt( altData, query );
				} catch ( exx ){
					throw "Information in the DATA obj not found";
				}
			}


			if (typeof replacementValue === "object") {
				// Stringfy the value
				replacementValue = JSON.stringify( replacementValue );
			}

			if (typeof replacementValue === "string" ) {
				return "\"" + replacementValue + "\"";
			} else {
				return replacementValue
			}
		} );


		// 
		// Find string that was replaced by mustache and restore them
		//
		exp = exp.replace( regExMustache, function( a, b ) {
			return lstString[ b ];
		} );

		// Use the "new Function()" instead of eval()
		var result  = new Function( 'return ' + exp );

		return result();
	},

	processIf = function ( el ) {
		var res = { };
		var exp = getAndRemoveAttr(el, 'data-wb5-if')
		if (exp) {
			res.if = exp;
			addIfCondition( res, {
				exp: exp,
				block: el
			} );
		} else {
			if ( getAndRemoveAttr( el, 'data-wb5-else' ) != null ) {
				res.else = true;
			}
			var elseif = getAndRemoveAttr( el, 'data-wb5-elseif' )
			if ( elseif ) {
				res.elseif = elseif;
			}
		}
		return res;
	},

	addIfCondition = function (el, condition) {
		if (!el.ifConditions) {
			el.ifConditions = []
		}
		el.ifConditions.push(condition)
	},

	// @tmplId going to be replated by the Real DOM template
	renderTemplate = function( dataObj, template ) {
		
		// Prepare the template
		var clone

		var div = doc.createElement( "div" );
		div.innerHTML = template;

		clone = doc.createDocumentFragment();
		clone.appendChild( div );
		
		// Start the templating engine

		// Template cheat sheet 
		// 		Document.querySelector()
		//		It only take the first occurence
		//var cssSelectorsMapping = {
		//	"CSS selector": "Property Name in the dataObj" // Need a modifier (like TextContent, ....)
		//}

		// Empty event hook
		eventsToBeHook = [];

		walk( clone, dataObj );

		return clone;
	},

	init = function( event, data ) {
		// Start initialization
		// returns DOM object = proceed with init
		// returns undefined = do not proceed with init (e.g., already initialized)
		var elm = wb.init( event, componentName, selector )
		if ( elm ) {
			

			fetch(elm.dataset.wbData).then(
				function(response) {
					if (response.status !== 200) {
						console.log('Error. Status Code: ' +
							response.status);
						return;
					}
					// Examine the text in the response
					response.json().then(function(data) {
						var loadedComponentName = data.class;
						var dtEventObj = data.data;
						var template = templates[data.template];
						var dataObject = wb5React( dtEventObj );
						if ( !elm.id ) {
							elm.id = wb.getId();
						}

						// Check if this is a pre-rendered template for the current Page state, if so just continu otherwise render.
						var tmpl = renderTemplate( dataObject , template );

						// Register the fragment that would be inserted in the virtual Linear DOM
						// Get all children of the Fragment
						var frgChildNodes = tmpl.childNodes,
						frgChildNodes_len = frgChildNodes.length,
						i, i_cache;
						for( i = 0 ; i < frgChildNodes_len; i ++ ) {
							i_cache = frgChildNodes[ i ];

							if ( i_cache.nodeType !== 1 ) {
								continue;
							}

							var frgItemId = i_cache.id;
							if ( !frgItemId ) {
								frgItemId = wb.getId();
								i_cache.id = frgItemId;
							}
							virtualLinearDOM[ frgItemId ] = dataObject;
						}

						// The fragment would replace the current element
						var newNode = elm.parentNode.insertBefore( tmpl, elm );

						// Detach the current element - Eventually they could be completly removed
							elm.id = wb.getId();
							docFragmentSourceUI.appendChild( elm );


						// Create the event binding hook if any
						for( var i = 0; i < eventsToBeHook.length; i++) {
							var evtObj = eventsToBeHook[ i ];
						}
						$("[id='"+dataObject.data["id"]+"']").trigger( "wb-init." + loadedComponentName );
					});
				  }
			).catch(function(err) {
				console.log('Error Fetching Data', err);
			});


		}
	},

	parseFor = function( exp ) {
		var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
		var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
		var stripParensRE = /^\(|\)$/g;

		var inMatch = exp.match( forAliasRE );

		if ( !inMatch ) {
			return;
		}

		var res = {};

		res.for = inMatch[ 2 ].trim();

		var alias = inMatch[ 1 ].trim().replace( stripParensRE, '');

		var iteratorMatch = alias.match( forIteratorRE );

		if ( iteratorMatch ) {
			res.alias = alias.replace( forIteratorRE, '' );
			res.iterator1 = iteratorMatch[ 1 ].trim();
			if ( iteratorMatch[ 2 ] ) {
				res.iterator2 = iteratorMatch[ 2 ].trim();
			}
		} else {
			res.alias = alias
		}

		return res;
	},

	getObjectAt = function( dataProv, pointer ) {

		// May be consider to use JSON pointer instead ????

		pointer = pointer.trim();

		var firstCharacter = pointer.substring(0, 1),
		lastCharacter = pointer.substring(-1);

		if (firstCharacter === "'" || firstCharacter === "\"" ||
			lastCharacter === "'" || lastCharacter === "\"" ) {

			// Pointer is a string

		return pointer.substring( 1, pointer.length - 1 );
		}


		// Do we have subFunction????

		var idxOpen = pointer.indexOf( "(" ),
		idxClose = pointer.lastIndexOf( ")" ),
		attributeList = [];

		if ( idxOpen !== -1 && idxClose !== -1 && idxOpen + 1 !== idxClose ) {
			// We have an internal functin

			// Extract in between and re-process
			var newPointer = pointer.substring( 0, idxOpen ),
			attributeRaw = pointer.substring( idxOpen + 1, idxClose ),
			j, j_cache, j_len;

			attributeList = attributeRaw.split( "," );
			j_len = attributeList.length;

			for ( j = 0; j < j_len; j = j + 1 ) {
				j_cache = attributeList[ j ];


				var retValue = getObjectAt( dataProv, j_cache );

				attributeList[ j ] = retValue;

			}

			// Replace the pointer
			pointer = newPointer + "()";
		}

		var pointerParts = pointer.split( "." ),
		i_len = pointerParts.length,
		i, i_cache, fnName;

		// Get the object to be iterated
		for ( i = 0; i < i_len; i = i + 1 ) {
			i_cache = pointerParts[ i ];

			if ( !dataProv ) {
				// The object do not exist
				return undefined;
			}

			if ( i_cache.lastIndexOf( "()" ) !== -1 ) {


				// Get the function name
				fnName = i_cache.substring(0, i_cache.length - 2);

				// call the function
				if ( typeof dataProv === "string" ){

					dataProv = String.prototype[ fnName ].apply( dataProv, attributeList );
				} else {

					dataProv = dataProv[ fnName ].apply( dataProv, attributeList );
				}
			} else {

				// Get the property
				dataProv = dataProv[ i_cache ];
			}
		}

		return dataProv;
	},

	// Parse string HTML into DOM fragment
	parseHTML = function( html ) {
		var t = document.createElement('template');
		t.innerHTML = html;
		IE11templatePolyfill( t );
		return t.content.cloneNode(true);
	};


	function wb5React(dataObj) {
	  var signals = {};
	  var templates = {}; // Cached template
	  var tmplsDefault = {}; // Default template

	  observeData(dataObj);

	  return {
	    data: dataObj,
	    observe: observe,
	    notify: notify,
	    template: template,
	    tmplDefault: tmplDefault,
	    debug_signals: signals
	  };

	  function observe(property, signalHandler) {

	    if (!signals[property]) signals[property] = [];

	    signals[property].push(signalHandler);
	  }

	  function notify(signal) {
	    if (!signals[signal] || signals[signal].length < 1) return;

	    signals[signal].forEach(function (signalHandler) {
	      return signalHandler();
	    });
	  }

	  function template( name, template ) {
	  	if ( !template ) {
	  		// Getter
	  		return templates[name] || false;
	  	} else {
	  		// Setter
	  		templates[name] = template;
	  	}
	  }

	  function tmplDefault( name, template ) {
	  	if ( !template ) {
	  		// Getter
	  		return tmplsDefault[name] || false;
	  	} else {
	  		// Setter
	  		tmplsDefault[name] = template;
	  	}
	  }

	  function makeReactive(obj, key, keyPrefix) {
	    var val = obj[key];

	    if ( Array.isArray( val) ) {
	    	// Just make reactive those special properties
	    	val.wbLen = parseInt( val.length ); // Length of the array (Updated before an iteration happend on it)
	    	val.wbActive = 0; // Number of items that was identified being "True"

	    	makeReactive( val, "wbLen", key );
	    	makeReactive( val, "wbActive", key );
	    	return;
	    }

	    Object.defineProperty(obj, key, {
	      get: function get() {
	        return val;
	      },
	      set: function set(newVal) {
	        val = newVal;
	        notify( !keyPrefix ? key : keyPrefix + "." + key );
	      }
	    });
	  }

	  function observeData(obj) {
	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
	        makeReactive(obj, key);
	      }
	    }
	    // We can safely parse the DOM looking for bindings after we converted the dataObject.
	    // parseDOM(document.body, obj);
	  }

	  function syncNode(node, observable, property) {
	    node.textContent = observable[property];
	    // We remove the `Seer.` as it is now available for us in our scope.
	    observe(property, function () {
	      return node.textContent = observable[property];
	    });
	  }

	  function parseDOM(node, observable) {
	    var nodes = document.querySelectorAll('[s-text]');

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	      for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var _node = _step.value;

	        syncNode(_node, observable, _node.attributes['s-text'].value);
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	  }
	}
// Get the templates
fetch("./templates.json").then(
				function(response) {
					if (response.status !== 200) {
						console.log('Error. Status Code: ' +
							response.status);
						return;
					}
					// Examine the text in the response
					response.json().then(function(data) {
						templates = data;
					});
				  }
			).catch(function(err) {
				console.log('Error Fetching Data', err);
			});


// Bind the init event of the plugin
$document.on( "timerpoke.wb " + initEvent, selector, init );
// Add the timer poke to initialize the plugin
wb.add( selector );
} )( jQuery, window, document, wb );