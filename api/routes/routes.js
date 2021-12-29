'use strict';

module.exports = function(app){

  var controller = require('../controllers/controller.js');

  app.route('/notes')
    .get(controller.get_notes);
};
