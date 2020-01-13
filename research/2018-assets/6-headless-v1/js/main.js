requirejs.config({
	paths: {
		'jquery': "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery",
		'json2html': "https://cdnjs.cloudflare.com/ajax/libs/json2html/1.2.0/json2html.min",
		'wet-boew': "../../wet-boew/js/wet-boew"
	},
	shim: {
		'jsonParser' : ['json2html'],
		'wet-boew'	 : ['jquery', 'jsonParser'],
		'templating' : ['wet-boew']
		}

});

require(['jquery','json2html','jsonParser','wet-boew','templating'], function(){
});