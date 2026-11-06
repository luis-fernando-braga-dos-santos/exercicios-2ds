const express = require("express")
const validarVenda = require("../middlewares/validarVenda")

const router = express.Router()

const vendas = [
  { id: 1, cliente: "Ana", produto: "Dipirona", valor: 12, status: "entregue" },
  { id: 2, cliente: "Bruno", produto: "Protetor Solar", valor: 48, status: "paga" },
  { id: 3, cliente: "Carla", produto: "Termometro", valor: 65, status: "paga" }
]

router.get("/", (req, res) => {
  let resultado = [...vendas]

  const { status, valorMin } = req.query

  if (status) {
    resultado = resultado.filter(venda => venda.status === status)
  }

  if (valorMin !== undefined) {
    resultado = resultado.filter(venda => venda.valor >= Number(valorMin))
  }

  res.status(200).json(resultado)
})

router.get("/:id", (req, res, next) => {
  const id = Number(req.params.id)

  const venda = vendas.find(venda => venda.id === id)

  if (!venda) {
    const erro = new Error("Venda nao encontrado")
    erro.status = 404
    return next(erro)
  }

  res.status(200).json(venda)
})

router.post("/", validarVenda, (req, res) => {
  const { cliente, produto, valor } = req.body

  const novoId = Math.max(...vendas.map(venda => venda.id), 0) + 1

  const novaVenda = {
    id: novoId,
    cliente,
    produto,
    valor,
    status: "aberta"
  }

  vendas.push(novaVenda)

  res.status(201).json({
    mensagem: "Registro de venda criado"
  })
})

module.exports = router