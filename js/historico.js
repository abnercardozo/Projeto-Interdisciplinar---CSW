
const tabs = document.querySelectorAll(".tab");
const listaNegadas = document.getElementById("lista-negadas");
const listaMes = document.getElementById("lista-mes");
const pillNegadas = document.getElementById("pill-negadas");
const pillMes = document.getElementById("pill-mes");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.target;

    
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    if (target === "negadas") {
      listaNegadas.classList.remove("hide");
      listaMes.classList.add("hide");
      pillNegadas.classList.remove("hide");
      pillMes.classList.add("hide");
    } else {
      listaNegadas.classList.add("hide");
      listaMes.classList.remove("hide");
      pillNegadas.classList.add("hide");
      pillMes.classList.remove("hide");
    }
  });
});


const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-icon");

searchButton.addEventListener("click", () => {
  const value = searchInput.value.trim();
  if (!value) return;
  alert("Pesquisar por: " + value);
});