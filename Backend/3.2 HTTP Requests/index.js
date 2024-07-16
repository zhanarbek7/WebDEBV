import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
    res.send("<h1> Hello World </h1>");
});

app.get("/about", (req, res) =>{
    res.send("<h1>About me</h1> <p> My name is Zhanarbek </p>");
});

app.get("/contacts", (req, res) => {
    res.send("<h1> My contacts </h1> <p>773-777-7777<p>");
} )

app.listen(3000, () => {
    console.log("Server has started!")
});