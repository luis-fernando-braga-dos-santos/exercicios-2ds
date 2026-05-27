import { useState } from "react"
import "./style.css"

function FormularioMensagem() {
  const [nome, setNome] = useState("")
  const [mensagem, setMensagem] = useState("")

  function enviarMensagem(event) {
    event.preventDefault()

    alert(`
Nome: ${nome}
Mensagem: ${mensagem}
    `)
  }

  return (
    <form className="formulario" onSubmit={enviarMensagem}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <textarea
        placeholder="Digite sua mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />

      <button type="submit">Enviar Mensagem</button>
    </form>
  )
}

export default FormularioMensagem