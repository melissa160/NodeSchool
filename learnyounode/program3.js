var path = process.argv[2]
var fs = require('fs')

var buffer = fs.readFileSync(path).toString()
var linesArray = buffer.split('\n')

console.log(linesArray.length-1)

