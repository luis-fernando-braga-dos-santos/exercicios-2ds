class Protocolo {
    constructor(cliente) {
        this.cliente = cliente
    }

    emitir() {
        throw new Error("Método emitir() deve ser implementado")
    }
}

class SuporteBasico extends Protocolo {
    emitir() {
        return `Protocolo de suporte básico emitido para: ${this.cliente}`
    }
}

class SuportePrioritario extends Protocolo {
    emitir() {
        return `Protocolo de suporte prioritário emitido para: ${this.cliente}`
    }
}

class SuporteEmergencial extends Protocolo {
    emitir() {
        return `Protocolo de suporte emergencial emitido para: ${this.cliente}`
    }
}

module.exports = Protocolo
module.exports.SuporteBasico = SuporteBasico
module.exports.SuportePrioritario = SuportePrioritario
module.exports.SuporteEmergencial = SuporteEmergencial
