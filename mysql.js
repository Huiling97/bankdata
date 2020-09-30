const mysql = require("mysql"); // Import mysql package here
require("dotenv").config();

console.log(process.env);

// Specify properties for the Mysql connection
parameters = {
  host: process.env.host, 
  user: process.env.user, 
  password: process.env.password,
  database: process.env.database,
};

// Define a Mysql connection here
mysqlConnection = mysql.createConnection(parameters);

// Connect to the MySQL server
mysqlConnection.connect((error) => {
  if (error) {
    console.log(error); 
  }
  else {
    console.log("Connection was successful");
  }
});

module.exports = mysqlConnection; //allow mysql file to be exported to app.js