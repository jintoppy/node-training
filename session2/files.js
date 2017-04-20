//Reading
var fs = require("fs");
//Async
fs.readFile('sample.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

//Sync

var data = fs.readFileSync('sample.txt');
console.log("Synchronous read: " + data.toString());


//watching files
fs.watch('sample.txt', {
  persistent: true
}, function(event, filename) {
  console.log(event + " event occurred on " + filename);
});
