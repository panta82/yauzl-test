var yauzl = require("yauzl");
var fs = require("fs");
var path = require("path");

yauzl.open(__dirname + "/test.zip", {lazyEntries: true}, function (err, zipfile) {
	if (err) throw err;
	zipfile.readEntry();
	zipfile.on("entry", function(entry) {
		console.log(entry.fileName);
		zipfile.readEntry();
	});
});