let mysql = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'livredor',
  password : 'livredor',
  database : 'tuto'
});
 
connection.connect();

module.exports = connection