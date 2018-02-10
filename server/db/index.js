var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  // host: 'localhost',
  database: 'chat'
});

exports.connection = connection;

connection.connect();



// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


