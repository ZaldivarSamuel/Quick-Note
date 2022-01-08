//Server variables
var express = require('express'),
app = express(),
port = process.env.PORT || 3000;

//Models
const Note = require('./api/models/noteModel.js');

//Database connection
const database = require('./database.js');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes.js');
routes(app);

app.listen(port);
console.log("API started on port: " + port);
