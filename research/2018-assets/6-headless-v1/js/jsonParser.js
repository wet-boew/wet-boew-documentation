/*function createGrid(html, data, jsonGrid){
	for (let row of jsonGrid){
		html += "<div class='row'>\n";
		for (let col of row){
			html += "\t<div class='col-md-" + col.size + "'>\n";
			for (let el of col.content){
				if (Array.isArray(el)){
				    html = createGrid(html, data, el);
				}
				else{
					el = el.split("-");
					var type = el[0];
					var name = el[1];
					if (type == "comp"){
						html += "\t\t<template class=\"wb-generic-ph\" data-wb-data=\"./json/" + data.comp[name] +".json\"></template>"

					}
					else{
						html += "\t\t<" + type +">"+data.strings[type][name] + "</" + type + ">";
					}
				
				}
			}
			html += "\t</div>\n";
		}
		html+="</div>\n";
	}
	return html;
}

function main(){
	var html = "";
	var json = { "rows":[
					[ 
						{ 
							"size": "9",
							"content": ["p-para1"]
						},
						{ 
							"size": "3", 
							"content": ["comp-follow"]
						}
					],
					[
						{
							"size": "8",
							"content": [
								"comp-carousel",
								"h2-heading9",
								[
									[ 
										{
											"size": "6",
										 	"content": ["h3-heading2","p-para2"]
										 }, 
										 {
											"size": "6",
										 	"content": ["h3-heading3","p-para3"]
										 } 
									],
									[ 
										{
											"size": "6",
										 	"content": ["h3-heading4","p-para4"]
										 }, 
										 {
											"size": "6",
										 	"content": ["h3-heading5","p-para5"]
										 } 
									],
									[ 
										{
											"size": "6",
										 	"content": ["h3-heading6","p-para6"]
										 }, 
										 {
											"size": "6",
										 	"content": ["h3-heading7","p-para7"]
										 } 
									],
									[ 
										{
											"size": "6",
										 	"content": ["h3-heading8","p-para8"]
										 }
									],
									[ 
										{
											"size": "6",
										 	"content": ["a-1"]
										 }, 
										 {
											"size": "6",
										 	"content": ["a-2"]
										 } 
									]
								]
							]
						},
						{
							"size": "4",
							"content": [
									"a-3",
									"a-4",
									"comp-feeds2",
									"comp-feeds2",
									"comp-feeds2",
									"comp-linkbox"
									]
						}
					],
					[
						{
							"size": "9",
							"content": ["comp-feed"]
						}
					]
				],
			"strings": {
			"h1":{
				"heading1": "Clerk of the Privy Council",
			},
			"h2": {	
				"heading9": "Services and Information"
			},
			"h3": {
				"heading2": "Annual report",
				"heading3": "Reports and publications",
				"heading4": "Role of the Clerk",
				"heading5": "Meet the Clerk",
				"heading6": "Blueprint 2020 and public service renewal",
				"heading7": "Public service success stories",
				"heading8": "Deputy Minister champions and committees"
			},
			"p": {
				"para1": "As Head of the Federal Public Service, the Clerk of the Privy Council ensures that the Government of Canada has the policy, management and human resources capacity it needs to design and deliver high quality programs and services to and for Canadians.",
				"para2": "This report highlights the work carried out by public servants over the past year, at home and abroad, in helping to deliver on the Government’s mandate. It also outlines the priorities for the public service in the year ahead.",
				"para3": "Read different reports, publications and presentations by the Clerk, departments, agencies and third parties that are relevant, timely and offer insight into the public service.",
				"para4": "Learn more about the role of the Clerk, meet the current Clerk and those who came before.",
				"para5": "Michael Wernick was appointed Clerk of the Privy Council and Secretary to the Cabinet in January 2016.",
				"para6": "Read about what the government is doing to enable a capable and high-performing public service that embraces innovation, transformation and continuous renewal.",
				"para7": "Learn more about public service success stories and some of the many awards that recognize departments, agencies and individuals for their work and commitment to serving Canadians.",
				"para8": "List of Deputy Minister champions and the horizontal policy and management committees on which they serve."
			},
			"a":{
				"1": "a",
				"2": "a",
				"3": "a",
				"4": "a",
			}
		},
		"comp":{
			"carousel": "carousel_1",
			"feed": "feeds_1",
			"feeds2": "feeds_2",
			"follow": "follow_1",
			"linkbox": "linkbox_1"
		}
		};

	html = createGrid(html, json, json.rows);

	//document.getElementById("text").outerHTML = html;
	document.body.innerHTML += "<main class=\"container\">" + html + "</main>"
}
main()*/

var t = {"<>":"main","class":"container","html":[
    {"<>":"h1","property":"name","id":"wb-cont","dir":"ltr","html":"\n    Clerk of the Privy Council"},
    {"<>":"div","html":[
        {"<>":"div","class":"row","html":[
            {"<>":"div","class":"col-md-9","html":[
                {"<>":"p","html":"As Head of the Federal Public Service, the Clerk of the Privy Council ensures that the Government of Canada has the policy, management and human resources capacity it needs to design and deliver high quality programs and services to and for Canadians."}
              ]},
            {"<>":"div","class":"col-md-3","html":[
                {"<>":"section","class":"followus mrgn-bttm-md","html":[
                    {"<>":"h2","html":"Follow:"},
                    {"<>":"ul","html":[
                        {"<>":"li","html":[
                            {"<>":"a","rel":"external","class":"facebook","href":"https://www.facebook.com/ClerkGC/","html":[
                                {"<>":"span","class":"wb-inv","html":"Facebook"}
                              ]}
                          ]},
                        {"<>":"li","html":[
                            {"<>":"a","rel":"external","class":"twitter","href":"https://twitter.com/Clerk_GC","html":[
                                {"<>":"span","class":"wb-inv","html":"Twitter"}
                              ]}
                          ]}
                      ]}
                  ]}
              ]}
          ]},
        {"<>":"div","class":"row","html":[
            {"<>":"div","class":"col-md-8","html":[
                {"<>":"template","class":"wb-generic-ph","data-wb-data":"json/carousel_1.json","html":""},
                {"<>":"h2","html":"Services and information"},
                {"<>":"div","class":"row","html":[
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"h3","class":"h5","html":[
                            {"<>":"a","href":"#","html":"Annual report"}
                          ]},
                        {"<>":"p","html":"This report highlights the work carried out by public servants over the past year, at home and abroad, in helping to deliver on the Government’s mandate. It also outlines the priorities for the public service in the year ahead. "}
                      ]},
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"h3","class":"h5","html":[
                            {"<>":"a","href":"#","html":"Reports and publications"}
                          ]},
                        {"<>":"p","html":"Read different reports, publications and presentations by the Clerk, departments, agencies and third parties that are relevant, timely and offer insight into the public service."}
                      ]}
                  ]},
                {"<>":"div","class":"row","html":[
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"h3","class":"h5","html":[
                            {"<>":"a","href":"#","html":"Role of the Clerk"}
                          ]},
                        {"<>":"p","html":"Learn more about the role of the Clerk, meet the current Clerk and those who came before. "}
                      ]},
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"h3","class":"h5","html":[
                            {"<>":"a","href":"#","html":"Meet the Clerk"}
                          ]},
                        {"<>":"p","html":"Michael Wernick was appointed Clerk of the Privy Council and Secretary to the Cabinet in January 2016."}
                      ]}
                  ]},
                {"<>":"div","class":"row","html":[
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"h3","class":"h5","html":[
                            {"<>":"strong","html":[
                                {"<>":"a","href":"#","html":"Blueprint 2020 and public service renewal"}
                              ]}
                          ]},
                        {"<>":"p","html":"Read about what the government is doing to enable a capable and high-performing public service that embraces innovation, transformation and continuous renewal."}
                      ]},
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"h3","class":"h5","html":[
                            {"<>":"a","href":"#","html":"Public service success stories"}
                          ]},
                        {"<>":"p","html":"Learn more about public service success stories and some of the many awards that recognize departments, agencies and individuals for their work and commitment to serving Canadians."}
                      ]}
                  ]},
                {"<>":"div","class":"row","html":[
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"section","class":"gc-drmt","html":[
                            {"<>":"h3","class":"h5","html":[
                                {"<>":"a","href":"#","html":"Deputy Minister champions and committees"}
                              ]},
                            {"<>":"p","html":"List of Deputy Minister champions and the horizontal policy and management committees on which they serve."}
                          ]}
                      ]},
                    {"<>":"div","class":"col-md-6","html":"\n                  "}
                  ]},
                {"<>":"div","class":"row","html":[
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"br","html":""},
                        {"<>":"a","href":"#","html":[
                            {"<>":"img","src":"../img/test/div-eng.png","alt":"Diversity and inclusion","class":"img-responsive","width":"360","height":"180","html":""}
                          ]}
                      ]},
                    {"<>":"div","class":"col-md-6","html":[
                        {"<>":"br","html":""},
                        {"<>":"a","href":"#","html":[
                            {"<>":"img","src":"../img/test/button-eng.png","alt":"Mental health in the workplace","class":"img-responsive","width":"360","height":"180","html":""}
                          ]}
                      ]}
                  ]}
              ]},
            {"<>":"div","class":"col-md-4","html":[
                {"<>":"a","href":"http://www.tpsgc-pwgsc.gc.ca/remuneration-compensation/services-paye-pay-services/systeme-paye-employes-pay-system-employees/index-eng.html","html":[
                    {"<>":"img","src":"../img/test/PPS_Button_1_ENG.png","alt":"Pay problems? Click here.","class":"img-responsive","width":"360","height":"180","html":""}
                  ]},
                {"<>":"br","html":""},
                {"<>":"a","href":"#","html":[
                    {"<>":"img","src":"../img/test/DM-Accountabilities-eng.PNG","alt":"Deputy Minister Accountabilities","class":"img-responsive","html":""}
                  ]},
                {"<>":"br","html":""},
                {"<>":"section","class":"lnkbx well","html":[
                    {"<>":"template","class":"wb-generic-ph","data-wb-data":"json/feeds_2.json","html":""}
                  ]},
                {"<>":"section","class":"lnkbx well","html":[
                    {"<>":"template","class":"wb-generic-ph","data-wb-data":"json/feeds_3.json","html":""}
                  ]},
                {"<>":"section","class":"lnkbx well","html":[
                    {"<>":"template","class":"wb-generic-ph","data-wb-data":"json/feeds_4.json","html":""}
                  ]},
                {"<>":"section","class":"lnkbx well","html":[
                    {"<>":"h2","class":"mrgn-tp-0","html":"Contact us"},
                    {"<>":"ul","html":[
                        {"<>":"li","html":[
                            {"<>":"a","href":"#","title":"Contact the Clerk of the Privy Council","html":"Contact the Clerk of the Privy Council"}
                          ]}
                      ]}
                  ]}
              ]}
          ]},
        {"<>":"div","class":"row","html":[
            {"<>":"div","class":"col-md-9","html":[
                {"<>":"template","class":"wb-generic-ph","data-wb-data":"json/feeds_1.json","html":""}
              ]},
            {"<>":"div","class":"col-md-3","html":"\n    "}
          ]}
      ]}
  ]};

  var d = [{}];
  var x = json2html.transform(d,t);
  x = "<div class=\"row\"> <div class=\"brand col-xs-8 col-sm-9 col-md-6\"> <a href=\"https://www.canada.ca/en.html\"><img src=\"../assets/sig-blk-en.svg\" alt=\"\"><span class=\"wb-inv\"> Government of Canada / <span lang=\"fr\">Gouvernement du Canada</span></span></a> </div> <section class=\"wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs\" id=\"wb-glb-mn\"> <h2>Search and menus</h2> <ul class=\"list-inline text-right chvrn\"> <li><a href=\"#mb-pnl\" title=\"Search and menus\" aria-controls=\"mb-pnl\" class=\"overlay-lnk\" role=\"button\"><span class=\"glyphicon glyphicon-search\"><span class=\"glyphicon glyphicon-th-list\"><span class=\"wb-inv\">Search and menus</span></span></span></a></li> </ul> <div id=\"mb-pnl\"></div> </section> <section id=\"wb-srch\" class=\"col-xs-6 text-right visible-md visible-lg\"> <h2>Search</h2> <form action=\"#\" method=\"post\" name=\"cse-search-box\" role=\"search\" class=\"form-inline\"> <div class=\"form-group\"> <label for=\"wb-srch-q\" class=\"wb-inv\">Search website</label> <input id=\"wb-srch-q\" list=\"wb-srch-q-ac\" class=\"wb-srch-q form-control\" name=\"q\" type=\"search\" value=\"\" size=\"27\" maxlength=\"150\" placeholder=\"Search Canada.ca\"> <datalist id=\"wb-srch-q-ac\"> </datalist> </div> <div class=\"form-group submit\"> <button type=\"submit\" id=\"wb-srch-sub\" class=\"btn btn-primary btn-small\" name=\"wb-srch-sub\"><span class=\"glyphicon-search glyphicon\"></span><span class=\"wb-inv\">Search</span></button> </div> </form> </section> </div>"+"<nav role=\"navigation\" id=\"wb-sm\" data-ajax-replace=\"./ajax/sitemenu-en.html\" data-trgt=\"mb-pnl\" class=\"wb-menu visible-md visible-lg\" typeof=\"SiteNavigationElement\"> </nav>"+ x





  document.body.innerHTML = x

