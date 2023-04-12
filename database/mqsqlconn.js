import mysql from "mysql";

// let connmysql = () =>{
    let connmysql = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'data'
      });
      
      connmysql.connect((err) =>  {
        if (err) {
          return console.error('error: ' + err.message);
        } 
        // console.log(connmysql)
        console.log("Mysql connected successfully");
      });
// }

  export default connmysql;