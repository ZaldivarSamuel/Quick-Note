var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
Note = require('./api/models/noteModel.js'),
bodyParser = require('body-parser');

const database = require('./database.js');

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/quick-note";
//
// MongoClient.connect(url, function(err, db){
//   if (err) throw err;
//   console.log("Connected to Database!");
// });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes.js');
routes(app);

app.listen(port);
console.log("API started on port: " + port);
