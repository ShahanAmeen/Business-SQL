const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost", //sometimes 127.0.0.1
    user: "root",
    password: "Babakababy.3",
    port: 3306,
    database:"work_db",
    waitForConnections: true,
    connectionLimit: 10
});

connection.connect(function(){
    console.log("db connected")
});

module.exports = connection;