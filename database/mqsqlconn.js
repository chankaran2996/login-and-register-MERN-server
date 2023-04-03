import mysql from "mysql";

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'data'
  });
  
  connection.connect((err) =>  {
    if (err) {
      return console.error('error: ' + err.message);
    } 
    console.log("Mysql connected successfully");
  });

  module.exports = connection;