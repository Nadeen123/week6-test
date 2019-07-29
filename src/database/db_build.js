const fs = require("fs");

const dbConnection = require("./db_connection");

//sql is a string of the byild script
const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

//for getting data the below takes the sql string and callback
//if error it will throw the error
//if successful the table will created
dbConnection.query(sql, (err, res) => {
  if (err) throw err;
  console.log("Super hereos table created with result:", res);
});
