console.log("routes_connection");
//**********RESTful routes for users**********
// var mongoose = require('mongoose');
var Users = require("./../controllers/users.js");
var Carpools = require("./../controllers/carpools.js");

module.exports = (function(app) {
  app.get('/users', Users.index);
  // app.get('/users/new', Users.new);
  // app.get('/users/:id', Users.show);
  // app.get('/users/:id/edit', Users.edit);
  app.post('/login', Users.create);
  app.post("/carpool", Carpools.create);
  // app.put('/users/:id', Users.update);
  app.put('/users/:id', Users.update);
  // app.delete('/users/:id', Users.delete);
});
//**********END routes for users**************
