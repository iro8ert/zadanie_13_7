var fs = require('fs');
var StatMode = require('stat-mode');

fs.readFile('./tekst.txt', 'utf-8',  function(err, data) {
	console.log(data)
});

fs.appendFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err){
	if (err) throw err;
	console.log('Zapisano!');
});

fs.stat('./cat.jpg', function(err, stats) {
	var statMode = new StatMode(stats);
	console.log(statMode.toString());
});