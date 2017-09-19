var fs = require('fs');
// FIle read operation in NodeJS
fs.readFile('files/node.txt', function(err, content){
    if(err) throw err;
    console.log(''+ content)
})
