var elm = document.querySelector(".wb-addcal"),
	properties = elm.querySelectorAll("[property]"),
	i,
	i_len = properties.length,
	googleLink = "",
	icsLink = "",
	eventData = {},
	place;

$(document).ready(function(){
	
	//Read and prepare event data to avoid empty properties	
	for(i=0; i < i_len; i++){
		switch(properties[i].getAttribute("property")){
			case "location":
				googleLink += "&location=";
				icsLink += "\nLOCATION:";
				place = true;
				break;
			case "name":
				if($(properties[i]).parentsUntil((".wb-addcal"), "[typeof=Place]").length){
					eventData.place = properties[i].innerHTML;
					googleLink += eventData.place;
					icsLink += eventData.place;
				}else{
					eventData.title = properties[i].innerHTML;
					googleLink += "&text=" + eventData.title;
					icsLink += "\nSUMMARY:" + eventData.title;
				}
				break;
			case "description":
				eventData.description = properties[i].innerText;
				googleLink += "&details=" + eventData.description;
				icsLink += "\nDESCRIPTION:" + eventData.description;
				break;
			case "startDate":
				eventData.startDate = properties[i].getAttribute("content");
				googleLink += "&dates=" + eventData.startDate;
				icsLink += "\nDTSTART:" + eventData.startDate;
				break;
			case "endDate":
				eventData.endDate = properties[i].getAttribute("content");
				googleLink += "/" + eventData.endDate;
				icsLink += "\nDTEND:" + eventData.endDate;
				break;
			case "streetAddress":
				eventData.streetAddress = properties[i].innerText;
				googleLink += " " + eventData.streetAddress;
				icsLink += " " + eventData.streetAddress;
				break;
			case "addressLocality":
				eventData.addressLocality = properties[i].innerText;
				googleLink += " " + eventData.addressLocality;
				icsLink += " " + eventData.addressLocality;
				break;
			case "addressRegion":
				eventData.addressRegion = properties[i].innerText;
				googleLink += " " + eventData.addressRegion;
				icsLink += " " + eventData.addressRegion;
				break;
			case "postalCode":
				eventData.postalCode = properties[i].innerText;
				googleLink += " " + eventData.postalCode;
				icsLink += " " + eventData.postalCode;
				break;
		}
	}
	
	if(!place){
		place = elm.querySelector(".wb-addcal-location").innerText;
		googleLink += "&location=" + place;
		icsLink += "\nLOCATION:" + place;
	}
	
	googleLink = encodeURI("https://www.google.com/calendar/render?action=TEMPLATE" + googleLink);
	icsLink = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT" + icsLink + "\nEND:VEVENT\nEND:VCALENDAR";
	
	//Create add details summary to the wb-addcal event and initiate the unordered list
	$('.wb-addcal').append("<details class='max-content wb-addcal-buttons'><summary>Add to calendar</summary><ul class='list-unstyled mrgn-bttm-0 mrgn-tp-sm'><li><a class='btn btn-link btn-lg mrgn-top-lg' href='" + googleLink + "'><span class='fab fa-google mrgn-rght-md'></span>Google<span class='sr-only'>Calendar</span></a></li><li><button class='btn btn-link btn-lg' data-wb-addcal-ics='" + icsLink + "'><span class='fab fa-apple mrgn-rght-md'></span>Apple<span class='sr-only'>Calendar</span></button></li><li><button class='btn btn-link btn-lg' data-wb-addcal-ics='" + icsLink + "'><span class='fa fa-calendar mrgn-rght-md'></span>Other<span class='sr-only'>Calendar</span></button></li>");
	
	//Set click action on Apple and Other button links
	var linkItem = elm.querySelectorAll(".wb-addcal-buttons button");
	i_len = linkItem.length;
	
	for(i=0; i < i_len; i++){
		linkItem[i].onclick = function(){
			wb.download( new Blob( [this.getAttribute("data-wb-addcal-ics")] , { type: "text/calendar;charset=utf-8" } ), "evenement-gc-event.ics" );
		}
	}
});