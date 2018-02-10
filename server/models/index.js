var db = require('../db');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function () {
  
      return new Promise(function(resolve, reject) {
        db.connection.query('SELECT * FROM MESSAGES', function(err, results) {
          if (err) {
            reject(err); 
          } else { resolve(results); }
        });
      });    
  
      //   db.connection.query('SELECT * FROM MESSAGES', function(err, results, fields) {
      //   if (err) { 
      //     callback(err, null); 
      //   } else { callback(null, results); }
      // });
    }, // a function which produces all the messages
    post: function (message) {
      return new Promise(function(resolve, reject) {
        db.connection.query('INSERT INTO messages (text, user_id, room_id) values ("i am hungry", 1, 1)', function(err) {
          if (err) { 
            reject(err); 
          } else { resolve(); }
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      return new Promise(function(resolve, reject) {
        db.connection.query('SELECT * FROM USERS', function(err, results) {
          if (err) {
            reject(err); 
          } else { resolve(results); }
        });
      });   
    },
    post: function () {
      return new Promise(function(resolve, reject) {
        db.connection.query('INSERT INTO users (username) values ("testuser")', function(err) {
          if (err) { 
            reject(err); 
          } else { resolve(); }
        });
      });
    }
  }
};

