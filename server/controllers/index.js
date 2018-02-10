var models = require('../models');
var Promise = require('bluebird');
var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var getMessagesAsync = Promise.promisify(models.messages.get);

module.exports = {
  messages: {
    get: function (req, res) {
      statusCode = 200;
      res.writeHead(statusCode, headers);

      var data;

      models.messages.get()
        .then(function(messages) {
          data = {results: messages};
          res.end(JSON.stringify(data));
        });


      // setTimeout(()=> {console.log(data);}, 1000);
      // res.end(JSON.stringify(data));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var data = '';
      // console.log('hello');
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        models.messages.post(JSON.parse(data))
          .then(function() {
            statusCode = 201;
            res.writeHead(statusCode, headers);
            res.end();
          });
      });
    // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      statusCode = 200;
      res.writeHead(statusCode, headers);

      var data;

      models.users.get()
        .then(function(users) {
          data = {results: users};
          res.end(JSON.stringify(data));
        });
    },
    post: function (req, res) {
    // TODO: post is currently inserting a hardcoded testuser,
    // need to modify models.index.js to insert the posted user to the db
      // var data = '';
      // // console.log(req);
      // req.on('data', function(chunk) {
      //   data += chunk;
      //   console.log('hello');
      // });
      // req.on('end', () => {
      var data = {username: req.body.username};
      console.log(data);
      models.users.post(data)
        .then(function() {
          statusCode = 201;
          res.writeHead(statusCode, headers);
          res.end();
        });
    }
  }
};

