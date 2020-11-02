const mysql = require("mysql2");
  
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "auto",
  password: ""
})

module.exports = connection;