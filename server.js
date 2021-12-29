var express = require('express'),
app = express(),
port = process.env.PORT || 3000;


var routes = require('./api/routes/routes.js');
routes(app);


app.listen(port);

console.log("API started on port: " + port);
