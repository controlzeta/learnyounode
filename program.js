var http = require('http');

var url = process.argv[2];

http.get(url, function(res) {
  // console.log("Got response: " + res.statusCode);
  res.on("data", function (data){
	  console.log(data.toString("utf8"));
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});





// var path = require('path');
// var mymodule = require('./mymodule');
// var dir = process.argv[2];
// var filterExtension = process.argv[3];

// var callback = function (err, list) {
    // if (err) throw err;
    // list.forEach(function (file) {
        // console.log(file);
    // })
// }

// mymodule(dir, filterExtension, callback);

// console.log(Number(process.argv[2]) + Number(process.argv[3])+ Number(process.argv[4]));  
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
  // result += Number(process.argv[i])
// }
// console.log(result)
	
	// var path = require('path')
	// var fs = require('fs')
	// fs.readdir(process.argv[2], function (err, data) {
	  // if (err) throw err;
	  // var array = data.toString('utf8').split(',')
	 // // console.log("extension : " +process.argv[3])
	// for (var i = 0; i < array.length; i++) {
		// // console.log(path.extname(array[i]))
		// if(path.extname(array[i]) == "." + process.argv[3])
		// {
		// console.log(array[i])
		// }
	// }
	  
	   // // console.log(data.toString('utf8').split(','));
	// });

	// fs.readFile(  process.argv[2], function (err, data) {
	// if (err) throw err;
	// console.log(data.toString('utf8').split('\n').length -1);
	// });
	
	// function callback(error,data){
		// var fs = require('fs')
		// buf = new Buffer(256);

		// buf = fs.readFile(process.argv[2])

		// console.log(buf.toString())
	// }
	
	// callback();
	
	