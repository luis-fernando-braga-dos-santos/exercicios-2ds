import Profile from './components/Profile';

function App() {
  return (
    <div>
      <h1>Usuários do sistema</h1>
      
      <Profile 
        nome="Ana Silva" 
        idade={28} 
        profissao="Desenvolvedora Frontend" 
        foto="unsplash.com" 
      />
      <Profile 
        nome="Luis Fernando" 
        idade={18} 
        profissao="Desenvolvedor Backend" 
        foto="unsplash.com" 
      />
      <Profile 
        nome="Mariana" 
        idade={20} 
        profissao="Designer UI/UX" 
        foto="unsplash.com" 
      />
    </div>
  );
}
