const express = require("express")

const router = express.Router()

const espectadores = [
    { id: 1, nome: "Ana", tipo: "meia" },
    { id: 2, nome: "Bruno", tipo: "inteira" }
]

router.get("/", (req, res) => {
    res.status(200).json(espectadores)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: espectadores.length
    })
})

module.exports = router