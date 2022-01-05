'use strict';

var mongoose = require('mongoose'),
Note = mongoose.model('Notes');

const db = require('../../database.js');

exports.get_notes = function(req, res){
  res.send("Getting Notes....");
};

exports.new_note = function(req, res){
  var newNote = new Note(req.body);
  console.log("Here");
  console.log(newNote);

  db.database_connection.collection("notes").insertOne(newNote, function(err, res){
    if(err) throw err;
    console.log("Saved!")
  });

  res.send("Got it");

  // newNote.save(function(err, note){
  //   if(err){
  //     console.log(err);
  //     res.send(err);
  //   }
  //   res.json(note);
  // })
};
