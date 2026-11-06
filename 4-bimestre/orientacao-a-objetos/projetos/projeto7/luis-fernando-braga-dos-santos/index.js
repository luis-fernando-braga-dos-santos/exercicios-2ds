const express = require("express")
const vendasRouter = require("./routes/vendas")

const app = express()

app.use(express.json())

app.use("/vendas", vendasRouter)

app.use((req, res) => {
  res.status(404).json({
    erro: "Rota nao encontrada"
  })
})

app.use((erro, req, res, next) => {
  res.status(erro.status || 500).json({
    erro: erro.message || "Erro interno do servidor"
  })
})

module.exports = app