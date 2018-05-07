var fs = require('fs');

fs.readdir('.', 'utf-8', function(err, files) {
	console.log(files);
});

fs.writeFile('./teksty.txt', '$files', function(err, data) {
	if (err) throw err;
});