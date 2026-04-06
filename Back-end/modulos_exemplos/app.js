var pessoa = require('./commons/pessoa');

var soma = require('./commons/soma');

var imposto = require('./commons/calculo_imposto');

// samuel = pessoa();

// console.log(JSON.stringify(samuel));
// console.log(soma(10, 20));

// console.log(`Valor do imposto: ${imposto.valor(100)}`);
// console.log(`Valor com imposto: ${imposto.adicionar(100)}`);
// console.log(`Valor do taxa: ${imposto.taxa}`);

var calculadora = require('./commons/calculadora');

console.log(`Soma: ${calculadora.soma(10, 20)}`);
console.log(`Subtração: ${calculadora.subtracao(10, 20)}`);
console.log(`Multiplicação: ${calculadora.multiplicacao(10, 20)}`);
console.log(`Divisão: ${calculadora.divisao(10, 20)}`);