// Server asset

const express = require("express");
const app = express()
const PORT = 3000;
const url = `http://localhost:${PORT}`;
app.use(express.static("public"))

// Import Array

const iMieiPiatti = require("./blog.js");


//Route

app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

app.all("*", (req, res) => {
    res.status(404).send("<h1> Not Found !</h1>")
})

// Server Listen

app.listen(PORT, () => {

    console.log(`Server is running on ${url}`);
})





