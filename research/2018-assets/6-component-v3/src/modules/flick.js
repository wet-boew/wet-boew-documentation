// Flicker function

define( function() {

    function execute( selector, options ) {
		
		var allTitle = []; //global array that holds all modal titles.
		var allFooter = []; //global array that holds all modal footers.
		var allImg = []; //global array that holds all modal pictures.
		
		
		//the close button
		document.getElementById('theButton').addEventListener("click", function(event) { 
				
				console.log('close was clicked')
				document.getElementById('htmlTag').style = 	'';
				document.getElementById('theBody').classList.toggle('wb-modal');
				document.getElementById('firstDiv').classList.toggle('mfp-bg');
				document.getElementById('firstDiv').classList.toggle('mfp-ready');
				
				
			});
		
		
		function JavaScriptFetch() {

			var flickrApiPoint = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&id=148772103@N08"
		
			var script = document.createElement('script');

			script.src = flickrApiPoint;;

			document.querySelector('head').appendChild(script);
			
			console.log('Fetch has been executed');
			

		}
		
		window.jsonFlickrFeed = function (data) {

			var image = "";
			var n = 0;
			
			data.items.forEach(function (element) {
			
			allImg.push(element.description.split("img src=")[1].split(' width')[0].replace(/"/g, '')); //this takes the description and takes out all the tags and other unimportant information. Then it removes the quotes around the src.
			allTitle.push(element.title);
			allFooter.push(element.description.split('<p>')[3].split('</p>')[0]); //this takes the description and takes out all the tags and other unimportant information
			//allImg.push(element.);
			
			n += 1
			if (n == 1) {
				
				image += "<div class = 'rowTest'>";
				
			} else if (n == 9 || n == 17) {
				
				image += "</div>";
				image += "<div class = 'rowTest'>";
				
			} else if (n == 21) {
					
				image += "</div>";
					
			}
			
			image += "<div class='columnTest'> <a class='feed-flickr gl-feeds' href='#open-modal'><img id = '" + n + "' class = 'imgTest img-responsive' style='width:100%' src=\"" + element.media.m + "\"/></div></a>"; 
			

			});
				
			document.getElementById("outputDiv").innerHTML = image;
			
			console.log('Feed has been executed');

		}
			
			window.onload  = function() { 
			
			var galItems = document.querySelectorAll('#outputDiv > div > div > a > img'); 
			console.log(galItems);
			
			var footerBase = document.getElementById('theFooter').innerHTML; //original inner HTML of the footer
			
			
			
			for (var i = 0; i < galItems.length; i++) {
				
					galItems[i].addEventListener("click", function(event) { 

						document.getElementById('theBody').classList.toggle('wb-modal');
						
						//document.getElementById('firstDiv').classList.toggle('mfp-bg');
						document.getElementById('firstDiv').classList.toggle('mfp-ready');
						
						//document.getElementById('htmlTag').style = 'margin-right: 17px; overflow: hidden;'				
						
						//load in the content of the Modal
						document.getElementById('modalTitleId').innerHTML = allTitle[this.id - 1];
						document.getElementById('theFooter').innerHTML = allFooter[this.id - 1] + footerBase
						document.getElementById('theImg').src = allImg[this.id - 1];
						
						
						
						console.log(this.id);
						
					});
				}; 
			
			};
			JavaScriptFetch();
    }

    return {
        handle: execute
    };
});
