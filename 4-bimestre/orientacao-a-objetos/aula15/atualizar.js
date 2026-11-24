const fs = require("fs/promises")

async function atualizar(id, dados) {
    // 1. LER o arquivo
    const conteudo = await fs.readFile("contatos.json", "utf-8")
    const contatos = JSON.parse(conteudo)

    // 2. MUDAR o contato
    const indice = contatos.findIndex(c => c.id === id)

    if (indice === -1) {
        return null
    }

    contatos[indice] = { ...contatos[indice], ...dados }

    // 3. GRAVAR o arquivo
    await fs.writeFile("contatos.json", JSON.stringify(contatos, null, 2))

    return contatos[indice]
}

async function testar() {
    console.log(await atualizar(1, { telefone: "1234" }))
    console.log(await atualizar(99, { telefone: "0000" }))
}

testar()