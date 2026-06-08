const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:  "YOUR_PASSWORD",
    database: "studentdb"
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
    } else {
        console.log("Database Connected");
    }
});

module.exports = connection;