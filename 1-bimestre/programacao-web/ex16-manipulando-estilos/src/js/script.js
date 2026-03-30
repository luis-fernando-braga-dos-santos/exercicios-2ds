const texto = document.getElementById("texto");
const botao = document.getElementById("mudarEstilo");

botao.addEventListener("click", function() {
  texto.style.color = "blue";
  texto.style.fontSize = "24px";
  texto.classList.add("destaque");
});