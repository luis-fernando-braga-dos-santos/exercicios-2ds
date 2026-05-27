import Card from "./components/Card";
import FormularioMensagem from "./components/FormularioMensagem";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card>
        <h1>Legends Arena</h1>

        <h2>⚔️ Guerreiro Supremo</h2>

        <p>Nível: 99</p>
        <p>Classe: Tank</p>
        <p>HP: 5000</p>

        <div className="acoes">
          <button>Atacar</button>
          <button>Defender</button>
          <button>Magia</button>
        </div>

        <h3>Formulário de Mensagem</h3>

        <FormularioMensagem />
      </Card>
    </div>
  );
}

export default App;