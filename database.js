var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/quick-note";
var database_connection;

//Connect to database
MongoClient.connect(url, function(err, db){
  if (err) throw err;
  databaseConnection = db;
  console.log("Connected to Database!");
});

module.exports.database_connection = database_connection;
