var express = require("express");
var path = require("path");
var app = express();
app.set("views", path.resolve(__dirname, "views")); // Tells Express that your views will be in a folder called views
app.set("view engine", "ejs"); //Tells Express that you’re going to use the EJS templating engine
app.get("/", function (request, response) {
  response.render("index", {
    message: "Hey everyone! This is my webpage.",
  });
});
