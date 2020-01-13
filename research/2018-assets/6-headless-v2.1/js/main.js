requirejs.config({
	paths: {
		'jquery': "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery",
		'json2html': "https://cdnjs.cloudflare.com/ajax/libs/json2html/1.2.0/json2html.min",
		'wet-boew': "https://wet-boew.github.io/wet-boew/js/wet-boew"
	},
	shim: {
		'pageBuilder' : ['json2html','jquery'],
		'wet-boew'	 : ['pageBuilder'],
		'templating' : ['wet-boew']
		}

});

require(['jquery','json2html','pageBuilder','wet-boew','templating'], function(){
});