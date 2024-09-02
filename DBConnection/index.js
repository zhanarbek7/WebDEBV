import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  port: 5432
});

db.connect();

function sendQuery(){
  db.query("SELECT * FROM capitals limit 5", (err, res) => {
    if(err){
      console.error("Error executing query", err.stack);
    } else{
      const jsObjects = res.rows;
      console.log(jsObjects);
    }
  
    db.end();
  });
}


sendQuery();
