/*
setTimeout(() => {
    console.log("Executando código assíncrono...");
}, 2000);

console.log("Código síncrono executado imediatamente.");
*/

console.log("Iniciando a execução...");

function buscaDadosNoServidor() {
    //CODIGO QUE BUSCA DADOS NO SERVIDOR
    return new Promise((resolve, reject) => {
        console.log("Buscando dados do servidor...");
        // Simulação de busca de dados com um atraso
        setTimeout(() => {
            let sucesso = Math.random() > 0.5; // Simula sucesso ou falha aleatoriamente
            console.log("sucesso: " + sucesso);
            if (sucesso) {
                resolve("Dados recebidos com sucesso!");
            } else {
                reject("Erro ao buscar dados do servidor.");
            }
        }, 2000); // Simula um atraso de 2 segundos
    });
}

// buscaDadosNoServidor()
//     .then((mensagem) => {
//         console.log(mensagem);
//     })
//     .catch((erro) => {
//         console.error(erro);
// //     });

// console.log("Execução finalizada.");



const minhaFuncaoAssincrona = async () => {
    try {
        const resultado = await buscaDadosNoServidor();
        console.log(resultado);
    } catch (erro) {
        console.error(erro);
    }
};

minhaFuncaoAssincrona();

console.log("Execução finalizada.");
