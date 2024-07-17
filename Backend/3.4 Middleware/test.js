import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

function bandNameGenerator(req, res, next){
  console.log("Inside the Middleware");
  next();
}


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req,res, next) => {
  console.log("hi");
  next();
})

app.get("/", (req, res, next) => {
  console.log("hi");
  next();
})

app.use(bandNameGenerator);


