function iniciar() {
    const carros = ["Fusca", "Civic", "Corolla", "Gol", "Onix"];
    let i = 0;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    do {
        // mostra na página
        resultado.innerHTML += `<p>${carros[i]}</p>`;

        // mostra no pop-up
        alert("Carro: " + carros[i]);

        i++;

        // se acabou a lista
        if (i >= carros.length) {
            alert("Fim da lista!");
            break;
        }

        // pergunta se quer continuar
        let continuar = confirm("Deseja ver o próximo carro?");

        if (!continuar) {
            alert("Você encerrou a execução.");
            break;
        }

    } while (true);
}