const Notificacao = require("./Notificacao")
// CRIE SUA SOLUÇÃO ABAIXO ================


const { Email, SMS, App } = require("./Notificacao")

class Factory {
    static criar(tipo, mensagem) {
        if (tipo === "email") {
            return new Email(mensagem)
        }

        if (tipo === "sms") {
            return new SMS(mensagem)
        }

        if (tipo === "app") {
            return new App(mensagem)
        }

        throw new Error("Tipo de notificação inválido")
    }
}



// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = Factory