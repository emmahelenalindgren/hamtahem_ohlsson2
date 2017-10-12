var express = require("express");
var mongoose = require("mongoose");
var app = express();
var http = require("http");
var server = http.Server(app);
var io = require("socket.io")(server);
var pug = require('pug');
var routy = require("./routes.js");
var bodyParser = require("body-parser");


//importera fordon.json

//parsa till js

//loopa igenom skapa nytt fordonschema

//lägg till i databasen

//

app.set("view engine", "pug")
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');



/*app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app.get("/carlist", (req, res) => {
    res.render("public/carListAll.pug");
})*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routy)



app.get("*", (req, res) => {
    res.sendFile(__dirname + "/fel.html");
})


// Koppla upp mot en databas
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/carList', {
    useMongoClient: true
});



server.listen(3000, () => {
    console.log("lyssnar på 3000");
});