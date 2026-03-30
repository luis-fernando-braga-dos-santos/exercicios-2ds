const mensagem = document.getElementById("mensagem");
const botao = document.getElementById("alterar");

botao.addEventListener("click", function () {
  mensagem.textContent = "Mensagem alterada com JavaScript";
});