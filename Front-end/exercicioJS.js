function calcularDesconto() {

    let preco = Number(document.getElementById("precolabel").value);
    console.log("Preço digitado:", preco);
    let desconto = Number(document.getElementById("descontolabel").valueAsNumber);
    console.log("Desconto digitado:", desconto);

    //Validacao
    if (preco < 0 || isNaN(preco)) {
        alert("Informe um preço válido");
        return;
    }

    if (desconto < 0 || desconto > 100 || isNaN(desconto)) {
        alert("O desconto deve estar entre 0% e 100%");
        return;
    }

    let precoComDesconto = preco * (1 - desconto / 100);
    console.log("Preço com desconto:", precoComDesconto);

    document.getElementById("resultado").innerHTML = `O valor do produto com desconto é: ${precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`;
    alert(`O valor do produto é ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}. O desconto aplicado foi de ${desconto}% gerando um valor final de ${precoComDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`);

}