

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const btnAceitar = card.querySelector(".btn-aceitar");
  const btnRecusar = card.querySelector(".btn-recusar");
  const statusCircle = card.querySelector(".status-circle");
  const statusText = card.querySelector(".status-text");

  btnAceitar.addEventListener("click", () => {
    statusCircle.classList.remove("status-analise", "status-recusado");
    statusCircle.classList.add("status-aprovado");
    statusText.classList.remove("status-analise-text", "status-recusado-text");
    statusText.classList.add("status-aprovado-text");
    statusText.textContent = "Status: Aprovado";
  });

  btnRecusar.addEventListener("click", () => {
    statusCircle.classList.remove("status-analise", "status-aprovado");
    statusCircle.classList.add("status-recusado");
    statusText.classList.remove("status-analise-text", "status-aprovado-text");
    statusText.classList.add("status-recusado-text");
    statusText.textContent = "Status: Recusado";
  });
});


const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {
  const value = searchInput.value.trim();
  if (!value) return;
  alert("Pesquisar por: " + value);
});