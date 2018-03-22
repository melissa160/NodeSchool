var path = process.argv[2]
var fs = require('fs')

var buffer = fs.readFile(path, 'utf8', function(err, data) { 
  if(err) {
    return console.log(err)
  }
  var linesArray = data.split('\n')
  console.log(linesArray.length-1)
})
