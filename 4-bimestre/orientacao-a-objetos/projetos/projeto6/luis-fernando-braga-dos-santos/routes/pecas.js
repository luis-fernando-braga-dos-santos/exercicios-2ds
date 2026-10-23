const express = require("express")

const router = express.Router()

const pecas = [
    { id: 1, titulo: "A Visita", genero: "drama", preco: 40, emCartaz: true },
    { id: 2, titulo: "O Noviço", genero: "comedia", preco: 35, emCartaz: true },
    { id: 3, titulo: "Hamlet", genero: "tragedia", preco: 60, emCartaz: false }
]

router.get("/", (req, res) => {
    res.status(200).json(pecas)
})

router.get("/em-cartaz", (req, res) => {
    const pecasEmCartaz = pecas.filter((peca) => peca.emCartaz === true)

    res.status(200).json(pecasEmCartaz)
})

router.get("/total", (req, res) => {
    res.status(200).json({
        total: pecas.length
    })
})

router.post("/", (req, res) => {
    res.status(201).json({
        mensagem: "Cadastro de peca realizado"
    })
})

module.exports = router