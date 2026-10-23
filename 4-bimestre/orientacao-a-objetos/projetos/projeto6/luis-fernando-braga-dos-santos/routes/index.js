const express = require("express")

const router = express.Router()

const pecasRouter = require("./pecas")
const espectadoresRouter = require("./espectadores")

router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API de Teatro"
    })
})

router.use("/pecas", pecasRouter)
router.use("/espectadores", espectadoresRouter)

module.exports = router