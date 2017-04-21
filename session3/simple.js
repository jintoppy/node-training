var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs"); 

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath)); 

app.use(logger('short'));

app.use(function(request, response, next){
    console.log('within the middleware');

    next();
});

app.get('/', function(request, response){
    console.log('inside / request ');
    //response.send("Hello world");
    response.render("index", {
        message: "Another sdfsfd",
        users: [
          {
              name: 'sdf',
              age: 10
          },
          {
              name: 'aaa',
              age: 20
          }  
        ]
    });
});
app.listen(3002, function(){
    console.log('started on 3000');
});

//response.redirect()
//response.sendFile('path')
//request.ip

