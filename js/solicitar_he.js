document.getElementById("form-he").addEventListener("submit", function(e) {
    e.preventDefault();

    const tecnico = document.getElementById("tecnico").value;
    const data = document.getElementById("data").value;
    const horas = document.getElementById("horas").value;
    const justificativa = document.getElementById("justificativa").value;

    if (!tecnico || !data || !horas || !justificativa) {
        alert("Preencha todos os campos!");
        return;
    }

    alert("Solicitação enviada com sucesso!");

    localStorage.setItem("ultimaSolicitacao", JSON.stringify({
        tecnico, data, horas, justificativa
    }));
});
