function carregarConfig() {
  return {
    servico: process.env.SERVICO || "bicicletaria",
    porta: Number(process.env.PORT || 3000),
    ambiente: process.env.AMBIENTE || "desenvolvimento"
  }
}

module.exports = { carregarConfig }