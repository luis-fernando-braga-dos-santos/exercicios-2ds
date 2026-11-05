const express = require("express")
const router = express.Router()
const validarVenda = require("../middlewares/validarVenda")

let vendas = [
  { id: 1, cliente: "Ana", produto: "Dipirona", valor: 12, status: "entregue" },
  { id: 2, cliente: "Bruno", produto: "Protetor Solar", valor: 48, status: "paga" },
  { id: 3, cliente: "Carla", produto: "Termometro", valor: 65, status: "paga" }
]

router.get("/", (req, res) => {
  const { status, valorMin } = req.query
  let vendasFiltradas = [...vendas]

  if (status) {
    vendasFiltradas = vendasFiltradas.filter(
      (v) => v.status.toLowerCase() === status.toLowerCase()
    )
  }

  if (valorMin) {
    const min = Number(valorMin)
    vendasFiltradas = vendasFiltradas.filter((v) => v.valor >= min)
  }

  res.status(200).json(vendasFiltradas)
})

router.get("/:id", (req, res, next) => {
  const idBusca = Number(req.params.id)
  const vendaEncontrada = vendas.find((v) => v.id === idBusca)

  if (!vendaEncontrada) {
    const erro = new Error("Venda nao encontrado")
    erro.status = 404
    return next(erro)
  }

  res.status(200).json(vendaEncontrada)
})

router.post("/", validarVenda, (req, res) => {
  const { cliente, produto, valor } = req.body

  const maiorId = vendas.length > 0 ? Math.max(...vendas.map((v) => v.id)) : 0
  
  const novaVenda = {
    id: maiorId + 1,
    cliente,
    produto,
    valor,
    status: "aberta"
  }

  vendas.push(novaVenda)

  res.status(201).json({ mensagem: "Registro de venda criado" })
})

module.exports = router
