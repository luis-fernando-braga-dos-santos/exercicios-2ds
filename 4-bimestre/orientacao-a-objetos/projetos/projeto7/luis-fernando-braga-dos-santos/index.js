const express = require("express")
const routerVendas = require("./routes/vendas")

const app = express()

app.use(express.json())
app.use("/vendas", routerVendas)

app.use((req, res, next) => {
  const erro = new Error("Rota nao encontrada")
  erro.status = 404
  next(erro)
})

app.use((erro, req, res, next) => {
  const status = erro.status || 500
  res.status(status).json({ erro: erro.message })
})

module.exports = app



