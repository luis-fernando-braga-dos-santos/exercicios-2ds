const Protocolo = require("./Protocolo")

const {
    SuporteBasico,
    SuportePrioritario,
    SuporteEmergencial
} = Protocolo

class Factory {
    static criar(tipo, cliente) {
        switch (tipo) {
            case "suporteBasico":
                return new SuporteBasico(cliente)

            case "suportePrioritario":
                return new SuportePrioritario(cliente)

            case "suporteEmergencial":
                return new SuporteEmergencial(cliente)

            default:
                throw new Error("Tipo de protocolo inválido")
        }
    }
}

module.exports = Factory
