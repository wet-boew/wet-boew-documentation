//Functions

//__________The Search Bar__________


//take input and send data to server for processing





//__________The Navigation Bar__________


//When the mouse enters/exits a tab

function drop (curAction, onOff) {
	
	var menuitems = document.querySelectorAll('#wb-sm > div > div > ul > li > a')
	haveLeft = false;
	
	for (var i = 0; i < menuitems.length; i++) {
		
		menuitems[i].addEventListener(curAction,
			
		function(event) {
			
			if (onOff == 'on') {
				
				event.target.parentNode.querySelector('ul').classList.add("open");
				
			}
				
			if (onOff == 'off') {
				
				event.target.parentNode.querySelector('ul').classList.remove("open");
				
			
			}
		});
	};
};


drop("mouseenter", "on");
drop("mouseleave", "off");
	


//__________The Carousel__________


//Timer




//Left or Right Arrow Click
	//Picuture number iteration



//Play/Pause







//__________The Photo Gallery__________


function jsonFlickrApi(rsp) {
    window.rsp = rsp;
    var s = "";
    
    for (var i=0; i < rsp.photos.photo.length; i++) {
      photo = rsp.photos.photo[i];
	  
      t_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg";
		
      p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
	  
      s +=  '<a href="' + p_url + '">' + '<img alt="'+ photo.title + '"src="' + t_url + '"/>' + '</a>';
    }
    document.writeln(s);
  }

