var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('*', function( req, res, next )  {
	if (req.xhr || req.headers.accept.indexOf('json') > -1) {
		next();
	} else {
		var error = [];
		error.status = 500;
		res.status(500).send({
			error: error,
			status: 500,
			message: 'AJAX required!',
			type: 'internal'
		});
	}
});

router.get('/getallphones', function( req, res ) {
	var telefoni = [];
	/**
	 * BEGIN TEMP
	 */
	var manufactorers = ['LG', 'Samsung', 'Sony', 'IPhone', 'Huawei'];
	var oss           = ['Android', 'Windows', 'iOS'];
	var mainImages    = [
		'lg-zero-class.jpg',
		'meizu-m2-mini.jpg',
		'sony-xperia-m5.jpg',
		'sony-xperia-z5-premium.jpg',
		'xiaomi-mi-4c.jpg',
		'lg-nexus-5x-16gb.jpg',
		''
	];
	function getRandomString(minChar, maxChar, withSpaces) {
		withSpaces = withSpaces || false;
		minChar = minChar || 0;
		maxChar = maxChar || 1;
		var possible = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
		var string = "";
		for(var i = 0; i < Math.floor(Math.random() * (Math.floor(maxChar - minChar)) + minChar); i++) {
			string += possible.charAt(Math.floor(Math.random() * possible.length));
			if(withSpaces && Math.floor(Math.random() * 5) == 2) {
				string += ' ';

				i++;
			}
		}
		return string;
	}
	function getRandomNumber(minNum, maxNum, fullNum) {
		fullNum = fullNum || false;
		minNum  = minNum  || 0;
		maxNum  = maxNum  || 1;
		return fullNum == true ? Math.floor(Math.random() * (maxNum - minNum)) + minNum : Math.random() * (maxNum - minNum) + minNum;
	}
	for(var i = 0; i < 50; i++) {
		var manufactorer     = manufactorers[Math.floor(Math.random() * manufactorers.length)];
		var name             = getRandomString(5, 10, true);
		var weight           = getRandomNumber(100, 300, true);
		var dimensions       = getRandomNumber(120,150).toFixed(1) + 'x' + getRandomNumber(50, 75).toFixed(1) + 'x' + getRandomNumber(4, 7).toFixed(1);
		var processor        = getRandomString(10, 15, true) + ' ' + getRandomNumber(1000,2000, true) + '/' + getRandomNumber(2000,3000, true) + 'MHz';
		var battery          = getRandomString(5, 10, true) + ' ' + getRandomNumber(3000, 4000, true) + 'mAh';
		var screenSize       = getRandomNumber(4, 6).toFixed(1);
		var resolution       = getRandomNumber(1000, 2000, true) + 'x' + getRandomNumber(2000, 3000, true);
		var backCameraPixel  = getRandomNumber(5, 15).toFixed(1);
		var backCameraRes    = getRandomNumber(1000, 2000, true) + 'x' + getRandomNumber(2000, 3000, true);
		var backCameraVideo  = getRandomNumber(500, 1000, true) + 'x' + getRandomNumber(1000, 1500) + ' (720p) ' + getRandomNumber(1000, 2000) + 'x' + getRandomNumber(2000, 3000) + ' (1080p)';
		var frontCameraPixel = getRandomNumber(3, 7).toFixed(1);
		var frontCameraRes   = getRandomNumber(500, 1000, true) + 'x' + getRandomNumber(1000, 1500, true);
		var frontCameraVideo = getRandomNumber(200, 500, true) + 'x' + getRandomNumber(500, 750) + ' (460p)';
		var ram              = getRandomNumber(1, 4, true) * 1024;
		var hdd              = getRandomNumber(5, 32, true) * 1024;
		var os               = oss[Math.floor(Math.random() * oss.length)];
		var version          = 'v' + getRandomNumber(1, 5).toFixed(1);
		var mainImage        = mainImages[Math.floor(Math.random() * mainImages.length)];
		if(mainImage == '')
			mainImage = 'no-photo.jpg';
		telefoni.push({
			'manufacturer': manufactorer,
			'name': name,
			'slug': manufactorer.replace(/\s/g, '-').trim().toLowerCase() + '-' + name.replace(/\s/g, '-').trim().toLowerCase(),
			'weight': weight,
			'dimensions': dimensions,
			'processor': processor,
			'battery': battery,
			'screenSize': screenSize,
			'resolution': resolution,
			'backCameraPixel': backCameraPixel,
			'backCameraRes': backCameraRes,
			'backCameraVideo': backCameraVideo,
			'frontCameraPixel': frontCameraPixel,
			'frontCameraRes': frontCameraRes,
			'frontCameraVideo': frontCameraVideo,
			'ram': ram,
			'hdd': hdd,
			'os': os,
			'version': version,
			'mainImage': mainImage
		});
	}
	/**
	 * END TEMP
	 */
	res.send(JSON.stringify(telefoni));
});

module.exports = router;