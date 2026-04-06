const lista = document.getElementById("lista");
const input = document.getElementById("tarefa");
const botao = document.getElementById("botao");

//funcao para criar item da lista
function criarItem(tarefa) {
  const item = document.createElement("li");
  item.textContent = tarefa;
  console.log("Item criado:", item);
  return item;
}

//funcao para adicionar tarefa
function adicionarTarefa() {
  const tarefa = input.value;

  if (!tarefa.trim()) return;
  
  const item = criarItem(tarefa);
  lista.appendChild(item);
  input.value = "";
}

//evento para adicionar tarefa
botao.addEventListener("click", adicionarTarefa);

//evento para adicionar tarefa com enter
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
