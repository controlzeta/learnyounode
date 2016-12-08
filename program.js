//console.log("Hello World")

// console.log(Number(process.argv[2]) + Number(process.argv[3])+ Number(process.argv[4]))

  
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
  // result += Number(process.argv[i])
// }

// console.log(result)
	
	var fs = require('fs')
	buf = new Buffer(256);

	buf = fs.readFileSync(process.argv[2])

	console.log(buf.toString().split('\n').length - 1)