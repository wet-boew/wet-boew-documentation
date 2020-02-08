var elm = document.querySelector(".wb-addcal"),
	properties = elm.querySelectorAll("[property]"),
	i,
	i_len = properties.length,
	url = {},
	googleLink = "https://www.google.com/calendar/render?action=TEMPLATE",
	icsLink = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT";

$(document).ready(function(){
	for(i=0; i < i_len; i++){
		switch(properties[i].getAttribute("property")){
			case "name":
				if(properties[i].parentNode.getAttribute("typeof") == "Place"){
					url.place = properties[i].innerHTML;
					googleLink += "&location=" + url.place;
					icsLink += "\nLOCATION:" + url.place;
				}else{
					url.title = properties[i].innerHTML;
					googleLink += "&text=" + url.title;
					icsLink += "\nSUMMARY:" + url.title;
				}
				break;
			case "description":
				url.description = properties[i].innerHTML;
				googleLink += "&details=" + url.description;
				icsLink += "\nDESCRIPTION:" + url.description;
				break;
			case "startDate":
				url.startDate = properties[i].getAttribute("content");
				googleLink += "&dates=" + url.startDate;
				icsLink += "\nDTSTART:" + url.startDate;
				break;
			case "endDate":
				url.endDate = properties[i].getAttribute("content");
				googleLink += "/" + url.endDate;
				icsLink += "\nDTEND:" + url.endDate;
				break;
			case "streetAddress":
				url.streetAddress = properties[i].innerHTML;
				googleLink += " " + url.streetAddress;
				icsLink += " " + url.streetAddress;
				break;
			case "addressLocality":
				url.addressLocality = properties[i].innerHTML;
				googleLink += " " + url.addressLocality;
				icsLink += " " + url.addressLocality;
				break;
			case "addressRegion":
				url.addressRegion = properties[i].innerHTML;
				googleLink += " " + url.addressRegion;
				icsLink += " " + url.addressRegion;
				break;
			case "postalCode":
				url.postalCode = properties[i].innerHTML;
				googleLink += " " + url.postalCode;
				icsLink += " " + url.postalCode;
				break;
		}
	}
	
	googleLink = encodeURI(googleLink);
	icsLink += "\nEND:VEVENT\nEND:VCALENDAR";

	//Create add details summary to the wb-addcal event and initiate the unordered list
	$('.wb-addcal').append(
		$('<details>').attr('class', 'max-content wb-addcal-buttons').append(
			$('<summary>').text('Add to calendar'),
			$('<ul>').attr('class', 'list-unstyled mrgn-bttm-0 mrgn-tp-sm')
		)
	);
	//Create and add calendar links to details summary list items
	for(i=0; i < 3; i++){
		if(i == 0){
			$('.wb-addcal-buttons ul').append(
				$('<li>').append(
					$('<a>').attr({class: 'btn btn-link btn-lg mrgn-top-lg', href: googleLink}).append(
						$('<span>').attr('class', 'fab fa-google mrgn-rght-md'),
						('Google'),
						$('<span>').attr('class', 'sr-only').text('Calendar')
					)
				)
			);
		}else if(i == 1){
			$('.wb-addcal-buttons ul').append(
				$('<li>').append(
					$('<button>').attr({class: 'btn btn-link btn-lg', 'data-wb-addcal-ics': icsLink}).append(
						$('<span>').attr('class', 'fab fa-apple mrgn-rght-md'),
						('Apple'),
						$('<span>').attr('class', 'sr-only').text('Calendar')
					)
				)
			)
		}else{
			$('.wb-addcal-buttons ul').append(
				$('<li>').append(
					$('<button>').attr({class: 'btn btn-link btn-lg', 'data-wb-addcal-ics': icsLink}).append(
						$('<span>').attr('class', 'fa fa-calendar mrgn-rght-md'),
						('Other'),
						$('<span>').attr('class', 'sr-only').text('Calendar')
					)
				)
			)
		}
		
	}

	//Set click action on Apple and Other button links
	var linkItem = elm.querySelectorAll(".wb-addcal-buttons button");
	i_len = linkItem.length;
	
	for(i=0; i < i_len; i++){
		linkItem[i].onclick = function(){
			wb.download( new Blob( [linkItem[0].getAttribute("data-wb-addcal-ics")] , { type: "text/calendar;charset=utf-8" } ), "evenement-gc-event.ics" );
		}
	}
});