'use strict';

var mongoose = require('mongoose'),
Note = mongoose.model('Notes');

const db = require('../../database.js');

/*
Get request to recieve all of the notes
*/
exports.get_notes = function(req, res){
  res.send("Getting Notes....");
};

/*
POST request to create a new note.
Request passes in the values for the note
*/
exports.new_note = function(req, res){
  var newNote = new Note(req.body);
  console.log("Here");
  console.log(newNote);

  db.database_connection.collection("notes").insertOne(newNote, function(err, res){
    if(err) throw err;
    console.log("Saved!")
  });

  res.send("Got it");

};
