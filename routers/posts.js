// imports

const express = require("express");
const router = express.Router();
const iMieiPiatti = require("../data/blog");


// **INDEX**
// All my list with filter system 

router.get("/", (req, res) => {

    const nomePiatto = req.query.titolo;
    console.log(nomePiatto);
    let piatti = {

        counter: 5,
        data: [...iMieiPiatti],
    }

    if (nomePiatto) {

        piatti.data = iMieiPiatti.filter((piatto) => piatto.titolo.toLowerCase().includes(nomePiatto.toLowerCase()))
        piatti.counter = piatti.data.length
    }
    if (piatti.data.length < 1) {
        res.status(404);
        piatti = {

            counter: 0,
            error: 404,
            message: "Non ci sono piatti per la tua ricerca",
        }

    }
    res.json(piatti)
})

//** Show**
// Single post

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);



})