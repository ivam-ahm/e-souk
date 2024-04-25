import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "esouk",
});
db.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected");
});
export default db;
