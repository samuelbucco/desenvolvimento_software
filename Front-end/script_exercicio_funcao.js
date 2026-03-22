let pizza = document.getElementById("pizza");

document
  .getElementById("pedido")
  .addEventListener("keypress", function (event) {
    switch (event.key) {
      case "1":
        alert("Pizza de calabresa!");
        pizza.innerHTML = "Pizza de calabresa!";
        break;
      case "2":
        alert("Pizza de quatro queijos!");
        pizza.innerHTML = "Pizza de quatro queijos!";
        break;
      case "3":
        alert("Pizza de frango com catupiry!");
        pizza.innerHTML = "Pizza de frango com catupiry!";
        break;
      case "4":
        alert("Pizza de brigadeiro!");
        pizza.innerHTML = "Pizza de brigadeiro!";
        break;
      default:
        alert("Pedido não encontrado.");
    }
    event.target.value = "";
  });
