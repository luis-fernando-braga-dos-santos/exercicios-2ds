const antigo = { id: 2, nome: "Bruno", telefone: "8888" }

const dados = { telefone: "5555" }

const novo = { ...antigo, ...dados }

console.log(novo)