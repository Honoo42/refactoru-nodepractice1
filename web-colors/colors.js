var request = require('request');
var colors;
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', 
	function(error, response, webcolorsJson) {
	if (error){
		console.log('This is wrong!');
	}
	var colors;
	var colorsOnline = JSON.parse(webcolorsJson);
		for (var i = 0; i < colorsOnline.length; i++){
			if(colorsOnline[i].name.toLowerCase() === process.argv[2].toLowerCase()) {
				colors = [colorsOnline[i].rgb.r, colorsOnline[i].rgb.g,colorsOnline[i].rgb.b];
			}
		}
		if (colors) {
			console.log(colors.join(' '));
		}
		else{
			console.log("This color was not found");
		}
})