const conteudo = document.getElementById("conteudo");
var dados;
var i;

// criando a função para exibir a lista de carros dentro da div cujo id = conteudo

function criaSecao(titulo, dadosF) {
    let secao = document.createElement("div");
    secao.innerHTML = `<h2>${titulo}</h2>${dadosF}`;
    conteudo.appendChild(secao);
    console.log(secao);
}

//Loop while
const carros = ["gol", "celta", "palio", "uno"]

dados = "";
i = 0;

while (i < 4) {
    dados += `<p>${carros[i]}</p>`;
    i++;
}

console.log(dados);

criaSecao("Loop While", dados);

//Loop while melhorado
const carros2 = ["ferrari", "porsche", "lamborghini", "bugatti"]

dados = "";
i = 0;

while (i < carros2.length) {
    dados += `<p>${carros2[i]}</p>`;
    i++;
}

console.log(dados);

criaSecao("Loop While Melhorado", dados);

//Loop while invertido
const carros3 = ["argo", "creta", "corolla", "hilux"]

dados = "";
i = 0;

do {
    dados += `<p>${carros3[i]}</p>`;
    i++;
} while (i < carros3.length);

console.log(dados);

criaSecao("Loop While Invertido", dados);

//Loop for
const carros4 = ["onix", "marea", "fusca", "belina"]

dados = "";

for (i = 0; i < carros4.length; i++) {
    dados += `<p>${carros4[i]}</p>`;
}

console.log(dados);

criaSecao("Loop For", dados);

//Loop for of
const carros5 = ["jipe", "del rey", "lada", "hb20"]

dados = "";

for (let carro of carros5) {
    dados += `<p>${carro}</p>`;
}

console.log(dados);

criaSecao("Loop For Of", dados);

//Loop for in
let carro1 = {marca: "Ford", modelo: "Ka", ano: "2020"};
let carro2 = {marca: "Chevrolet", modelo: "Onix", ano: "2019"};

let carrosDicionario = [];

carrosDicionario.push(carro1);
carrosDicionario.push(carro2);

console.log(carrosDicionario);

dados = "";

for (let carro of carrosDicionario) {
    let propriedades = "";
    for (let propriedade in carro) { 
        propriedades += `<p>${propriedade}: ${carro[propriedade]}</p>`;
    }
    dados += propriedades;
}

console.log(dados);

criaSecao("Loop For In", dados);

//For each
dados = "";

const carros6 = ["fiat 147", "landau", "escort", "tempra"]

carros6.forEach(carro => {
    dados += `<p>${carro}</p>`;
});

console.log(dados);

criaSecao("For Each", dados);

