//jshint esversion:6
const express = require("express");
var app = express();

app.use(express.static(__dirname +'public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signUp.html"); 
});

app.listen(3000, function () {
    console.log("started 3000");
});