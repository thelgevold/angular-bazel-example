const express = require("express");
const mustache = require("mustache-express");
const request = require('request');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine("html", mustache());
app.set("view engine", "html");

app.get("/cars", (req, res) => {
    const url = `http://localhost:8080/cars`;
    request.get({url, json: true}, (err, response, body) => {
      if (err) {
        res.json('There was an error fetching cars');
      } else {
        res.json(body);
      } 
    });
}); 

app.get("/", (req, res) => {
  res.render("index.html", {cdn:'http://localhost:5432'});
});

app.listen(7777, () => console.log("Example app started"));
