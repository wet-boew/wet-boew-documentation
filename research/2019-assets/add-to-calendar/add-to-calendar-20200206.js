var elm = document.querySelector(".wb-addcal"),
	properties = elm.querySelectorAll("[property]"),
	i,
	i_len = properties.length,
	url = {},
	googleLink2 = "https://www.google.com/calendar/render?action=TEMPLATE";	

window.addEventListener("load", function(){
	for(i=0; i < i_len; i++){
		switch(properties[i].getAttribute("property")){
			case "name":
				if(properties[i].parentNode.getAttribute("typeof") == "Place"){
					url.place = properties[i].innerHTML;
				}else{
					url.title = properties[i].innerHTML;
					googleLink2 += "&text=" + url.title;
				}
				break;
			case "description":
				url.description = properties[i].innerHTML;
				googleLink2 += "&details=" + url.description;
				break;
			case "startDate":
				url.startDate = properties[i].getAttribute("content");
				googleLink2 += "&dates=" + url.startDate;
				break;
			case "endDate":
				url.endDate = properties[i].getAttribute("content");
				googleLink2 += "/" + url.endDate;
				break;
			case "streetAddress":
				url.streetAddress = properties[i].innerHTML;
				googleLink2 += "&location=" + url.place;
				break;
			case "addressLocality":
				url.addressLocality = properties[i].innerHTML;
				googleLink2 += "%20" + url.streetLocality;
				break;
			case "addressRegion":
				url.addressRegion = properties[i].innerHTML;
				googleLink2 += "%20" + url.streetRegion;
				break;
			case "postalCode":
				url.postalCode = properties[i].innerHTML;
				googleLink2 += "%20" + url.postalCode;
				break;
		}
	}
	
	console.log(encodeURI(googleLink2));
	
	//Set Google Calendar and ics links
	var googleLink = encodeURI("https://www.google.com/calendar/render?action=TEMPLATE&text=" + url.title + "&dates=" + url.startDate + "/" + url.endDate + "&details=" + url.description + "&location=" + url.place + "%20" + url.streetAddress + "%20" + url.addressLocality + "%20" + url.addressRegion + "%20" + url.postalCode),
	
	icsLink = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:" + url.startDate + "\nDTEND:" + url.endDate + "\nSUMMARY:" + url.title + "\nDESCRIPTION:" + url.description + "\nLOCATION:" + url.place + " " + url.streetAddress + " " + url.addressLocality + " " + url.addressRegion + " " + url.postalCode + "\nEND:VEVENT\nEND:VCALENDAR";
	
	//Create details node and set attributes
	var det = document.createElement("details"),
		sum = document.createElement("summary"),
		node = document.createTextNode("Add to calendar"),
		ul = document.createElement("ul");
		
		
		det.setAttribute("class", "max-content wb-addcal-buttons");
		ul.setAttribute("class", "list-unstyled mrgn-bttm-0 mrgn-tp-sm");
		
		elm.appendChild(det);
		sum.appendChild(node);
	
		det = elm.getElementsByTagName("details");
		det[0].appendChild(sum);
		det[0].appendChild(ul);
	
	var li, ahref, linkItem, node;
	
	for(i=0; i < 3; i++){
		if(i == 0){
			linkItem = document.createElement("a");
			spn = document.createElement("span");
			node = document.createTextNode("Google");
			linkItem.setAttribute("class", "btn btn-link btn-lg mrgn-top-lg");
			linkItem.setAttribute("href", googleLink);
			spn.setAttribute("class", "fab fa-google mrgn-rght-md");
		}else if(i == 1){
			linkItem = document.createElement("button");
			spn = document.createElement("span");
			node = document.createTextNode("Apple");
			spn.setAttribute("class", "fab fa-apple mrgn-rght-md");
			linkItem.setAttribute("class", "btn btn-link btn-lg");
			linkItem.setAttribute("data-wb-addcal-ics", icsLink);
			
		}else{
			linkItem = document.createElement("button");
			spn = document.createElement("span");
			node = document.createTextNode("Outlook");
			spn.setAttribute("class", "fa fa-calendar mrgn-rght-md");
			linkItem.setAttribute("class", "btn btn-link btn-lg");
			linkItem.setAttribute("data-wb-addcal-ics", icsLink);			
		}
		
		li = document.createElement("li");
		spn2 = document.createElement("span");
		node2 = document.createTextNode(" calendar");
		
		
		spn2.setAttribute("class", "sr-only");
		
		li.appendChild(linkItem);
		linkItem.appendChild(spn);
		linkItem.appendChild(node);
		linkItem.appendChild(spn2);
		spn2.appendChild(node2);
		det[0].getElementsByTagName("ul")[0].appendChild(li);
	}
	
	//Set click action on Apple and Other button links
	linkItem = elm.querySelectorAll(".wb-addcal-buttons button");
	i_len = linkItem.length;
	
	for(i=0; i < i_len; i++){
		linkItem[i].onclick = function(){
			wb.download( new Blob( [linkItem[0].getAttribute("data-wb-addcal-ics")] , { type: "text/calendar;charset=utf-8" } ), "evenement-gc-event.ics" );		
		}
	}
	
});
