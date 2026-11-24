const fs = require("fs/promises")

async function alterarTelefone() {
    // 1. LER o arquivo
    const conteudo = await fs.readFile("contatos.json", "utf-8")
    const contatos = JSON.parse(conteudo)

    // 2. MUDAR o contato
    contatos[1].telefone = "7777"

    // 3. GRAVAR o arquivo
    await fs.writeFile("contatos.json", JSON.stringify(contatos, null, 2))

    console.log("Telefone alterado")
}

alterarTelefone()