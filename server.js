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

app.get("/bacheca", (req, res) => {


    const nomePiatto = req.query.titolo;
    console.log(nomePiatto);
    let piatti = {

        counter: 5,
        data: [...iMieiPiatti],
    }

    if (nomePiatto) {

        piatti.counter = 1
        piatti.data = iMieiPiatti.find((piatto) => piatto.titolo.toLowerCase() === nomePiatto.toLowerCase())
        counter = 1;

    }
    if (!piatti.data) {


        piatti = {

            counter: 0,
            error: "Piatto non trovato"

        }
    }

    res.json(piatti)

})


app.all("*", (req, res) => {
    res.status(404).send("<h1> Not Found !</h1>")
})

// Server Listen

app.listen(PORT, () => {

    console.log(`Server is running on ${url}`);
})





