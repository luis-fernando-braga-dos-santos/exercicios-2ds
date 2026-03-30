const mensagem = document.getElementById("mensagem");
const alterar = document.getElementById("alterar");

if (mensagem && alterar) {
  alterar.addEventListener("click", function () {
    mensagem.textContent = "Mensagem alterada com JavaScript";
  });
}