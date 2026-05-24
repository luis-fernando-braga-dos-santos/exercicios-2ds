import Profile from "./components/Profile"


function App() {
  return (
    <div>

      <h1>Usuários do sistema</h1>

      <Profile
        nome="Ana Silva"
        idade={28}
        profissao="Desenvolvedora Frontend"
        foto="https://randomuser.me/api/portraits/women/1.jpg"
      />

      <Profile
        nome="Luis Fernando"
        idade={18}
        profissao="Desenvolvedor Backend"
        foto="https://randomuser.me/api/portraits/men/2.jpg"
      />

      <Profile
        nome="Mariana"
        idade={20}
        profissao="Designer UI/UX"
        foto="https://randomuser.me/api/portraits/women/3.jpg"
      />

    </div>
  )
}

export default App