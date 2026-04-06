const produtos = [
    { id: 1, nome: "Produto A", preco: 10.0 },
    { id: 2, nome: "Produto B", preco: 20.0 },
    { id: 3, nome: "Produto C", preco: 30.0 }
];

const produtoJSON = JSON.stringify(produtos);

console.log(produtos)
console.log("Produtos em formato JSON:");
console.log(produtoJSON);

const produtoObjeto = JSON.parse(produtoJSON);

console.log("Produtos convertidos de volta para objeto:");
console.log(produtoObjeto);