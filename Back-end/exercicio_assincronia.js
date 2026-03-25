//Criar uma função com promise para receber um id, esperar 2 segundos e retornar um produto
function carregarProduto(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject("Id inválido");
                return;
            }
            const produto = {
                id: id,
                nome: "Camisa " + id,
                preco: 30.0 * id
            };
            resolve(produto);            
        }, 2000);
    });
}

//usar .then e .catch para lidar com a promise
carregarProduto(1)
    .then((produto) => {
        console.log("Produto carregado:", produto);
    
        //converter o produto para JSON
        const produtoJSON = JSON.stringify(produto);
        console.log("Produto em formato JSON:", produtoJSON);

        //converter o JSON de volta para objeto
        const produtoObjeto = JSON.parse(produtoJSON);
        console.log("Produto convertido de volta para objeto:", produtoObjeto);
    })
    .catch((erro) => {
        console.error("Erro ao carregar o produto:", erro);
    });


//reescrever a função usando async/await
async function carregarProdutoAsync(id) {
    try {
        const produto = await carregarProduto(id);
        console.log("Produto carregado:", produto);
            
        //converter o produto para JSON
        const produtoJSON = JSON.stringify(produto);
        console.log("Produto em formato JSON:", produtoJSON);

        //converter o JSON de volta para objeto
        const produtoObjeto = JSON.parse(produtoJSON);
        console.log("Produto convertido de volta para objeto:", produtoObjeto);
    } catch (erro) {
        console.error("Erro ao carregar o produto:", erro);
    }
}

carregarProdutoAsync(2);