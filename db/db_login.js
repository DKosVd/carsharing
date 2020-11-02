const mysql = require("mysql2");
  
const connectionLogin = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-js-login",
  password: ""
});

module.exports = connectionLogin;