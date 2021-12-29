'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  created:{
    type: Date,
    default: Date.now
  },
  modified:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notes', NoteSchema);
