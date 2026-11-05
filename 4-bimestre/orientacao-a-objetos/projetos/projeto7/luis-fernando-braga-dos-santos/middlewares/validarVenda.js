function validarVenda(req, res, next) {
  const { cliente, produto, valor } = req.body

  if (cliente === undefined || cliente === null || cliente === "") {
    return res.status(400).json({ erro: "O campo cliente e obrigatorio" })
  }

  if (produto === undefined || produto === null || produto === "") {
    return res.status(400).json({ erro: "O campo produto e obrigatorio" })
  }

  if (typeof valor !== "number") {
    return res.status(400).json({ erro: "O campo valor deve ser um numero" })
  }

  if (valor <= 0) {
    return res.status(400).json({ erro: "O campo valor deve ser maior que zero" })
  }

  next()
}

module.exports = validarVenda
