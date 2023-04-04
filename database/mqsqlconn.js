import mysql from "mysql";

let connmysql = () =>{
    let connmysql = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test'
      });
      
      connmysql.connect((err) =>  {
        if (err) {
          return console.error('error: ' + err.message);
        } 
        console.log("Mysql connected successfully");
      });
}

  export default connmysql;