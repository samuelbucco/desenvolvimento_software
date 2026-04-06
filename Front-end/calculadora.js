function efetuaOperacao() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operador").value;
    let resultado;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Divisão por zero não é permitida.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById("resultado").innerHTML = `O resultado da operação é: ${resultado}`;
    alert(`O resultado da operação é ${resultado}`);


}