function verificaAprovacao() {
    let nota = document.getElementById("nota").value;
    console.log("Nota digitada:", nota);
    if (nota >= 7) {
        document.getElementById("resultado").innerHTML = "Aluno(a) Aprovado(a)";
        alert("Aluno(a) Aprovado(a)");
    } else {
        document.getElementById("resultado").innerHTML = "Aluno(a) Reprovado(a)";
        alert("Aluno(a) Reprovado(a)");
    }
}