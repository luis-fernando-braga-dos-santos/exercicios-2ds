const fs = require("fs/promises")

const ARQUIVO = process.env.ARQUIVO_INSCRICOES || "inscricoes.json"

async function listar() {
    try {
        const conteudo = await fs.readFile(ARQUIVO, "utf-8")
        return JSON.parse(conteudo)
    } catch (erro) {
        if (erro.code === "ENOENT") {
            return []
        }
        throw erro
    }
}

async function gravar(inscricoes) {
    await fs.writeFile(ARQUIVO, JSON.stringify(inscricoes, null, 2))
}

async function salvar(inscricao) {
    const inscricoes = await listar()
    inscricoes.push(inscricao)
    await gravar(inscricoes)
    return inscricao
}

async function atualizar(id, dados) {
    const inscricoes = await listar()

    const indice = inscricoes.findIndex(i => i.id === id)

    if (indice === -1) {
        return null
    }

    inscricoes[indice] = { ...inscricoes[indice], ...dados }

    await gravar(inscricoes)

    return inscricoes[indice]
}

async function remover(id) {
    const inscricoes = await listar()

    const indice = inscricoes.findIndex(i => i.id === id)

    if (indice === -1) {
        return false
    }

    inscricoes.splice(indice, 1)

    await gravar(inscricoes)

    return true
}

module.exports = { listar, salvar, atualizar, remover }
