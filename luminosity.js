// var r = process.argv[2];
// var g = process.argv[3];
// var b = process.argv[4];

// console.log (r,g,b);
 // var luminosity = function(r,g,b) {
 // 	return (0.2126*r) + (0.7152*g) + (0.0722*b);
 // };

// var r = arguments[0];
// var g = arguments[1];
// var b = arguments[2];

// luminosity = {
	var luminosity = function (r,g,b) {
 	 return (0.2126*r) + (0.7152*g) + (0.0722*b);
	}

// }
 // console.log(luminosity(250,140,200));


 module.exports = luminosity;