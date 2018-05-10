var fs = require('fs');

fs.readdir('.', 'utf-8', function(err, files) {
	console.log(files);
	fs.writeFile('./tekst.txt', files, function(err, data) {
		if (err) throw err;
	});
});


//trzeba po console log to wstawic