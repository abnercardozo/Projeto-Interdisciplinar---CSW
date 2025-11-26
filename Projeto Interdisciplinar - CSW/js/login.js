function login() {
    const matricula = document.getElementById("matricula").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (matricula === "" || senha === "") {
        alert("Preencha a matrícula e a senha!");
        return;
    }

    if (matricula === "gerente" && senha === "123456") {
        window.location.href = "dashboard_gestor.html";
        return;
    }

    if (matricula === "encarregado" && senha === "654321") {
        window.location.href = "status_encarregado.html";
        return;
    }

    if (matricula === "tecnico" && senha === "162534") {
        window.location.href = "dashboard_tecnico.html";
        return;
    }

    alert("Usuário ou senha incorretos!");
}
