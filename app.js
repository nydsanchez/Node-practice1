/*var express = require("express");
var http = require("http");
var app = express(); //instead of app = http.createServer((req, res)=>{res.send('...') res.end(clg(''))})

app.use(function (request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

app.use(function (request, response, next) {
  var minute = new Date().getMinutes();
  if (minute % 2 === 0) {
    next();
  } else {
    response.statusCode = 403;
    response.end("Not authorized.");
  }
});


app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});


app.use(function (request, response) {
  response.end('Secret info: the password is "swordfish"!');
});

http.createServer(app).listen(3000);*/

// USING MORGAN AUTHENTICATION

var express = require("express");
var logger = require("morgan");
var http = require("http");

var app = express();

app.use(logger("short"));
app.use((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

http.createServer(app).listen(3000);
