
const perfil = localStorage.getItem("perfil");


if (perfil !== "encarregado") {
    alert("Acesso negado. Você não é um encarregado!");
    window.location.href = "login.html";
}
