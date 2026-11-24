const fs = require("fs/promises")

async function mostrarPosicao() {
    const conteudo = await fs.readFile("contatos.json", "utf-8")
    const contatos = JSON.parse(conteudo)

    console.log(contatos.findIndex(c => c.id === 2))
    console.log(contatos.findIndex(c => c.id === 99))
}

mostrarPosicao()