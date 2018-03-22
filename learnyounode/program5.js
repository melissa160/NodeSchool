var path = process.argv[2]
var ext = process.argv[3]
var fs = require('fs')
fs.readdir(path, function(err, list) { 
  if(err) {
    return console.log(err)
  }
  list.forEach(function(filename){
    if(filename.split('.')[1] === ext){
       console.log(filename)
    }
  })
})
