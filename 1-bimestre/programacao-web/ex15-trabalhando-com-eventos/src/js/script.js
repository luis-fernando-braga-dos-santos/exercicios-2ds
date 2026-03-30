const form = document.getElementById("formulario");
const inputNome = document.getElementById("nome");
const inputIdade = document.getElementById("idade");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = inputNome.value;
  const idade = inputIdade.value;
  resultado.textContent = `Olá ${nome}, você tem ${idade} anos`;
});