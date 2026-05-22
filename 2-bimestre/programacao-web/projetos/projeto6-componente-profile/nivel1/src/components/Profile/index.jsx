import '../../styles/Profile.css';

export default function Profile({ nome, idade, profissao, foto }) {
  return (
    <div className="profile-card">
      <img src={foto} alt={nome} className="imagem" />
      <h2>{nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
    </div>
  );
}