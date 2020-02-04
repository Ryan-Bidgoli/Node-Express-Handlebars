var mysql = require("mysql")
var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)

} else {
    //passing login info to mysql
      connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "ryanb1998",
        database: "burgers_db"
    })
}
// connection to database to executes the tables
connection.connect(function (error) {
    if (error) {
        console.log(error)
    }
    //id to connect computer to mysql server
    console.log("connection thread id", connection.threadId)
})

//export to orm.js files
module.exports = connection