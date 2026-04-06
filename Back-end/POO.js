class Veiculo {
    constructor(marca, modelo, ano, qtdPortas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.qtdPortas = qtdPortas;
    }

    exibirInformacoes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Quantidade de Portas: ${this.qtdPortas}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, qtdPortas) {
        super(marca, modelo, ano, qtdPortas);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    exibirInformacoes() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}`);
    }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2020, 4);
meuCarro.exibirInformacoes();

const minhaMoto = new Moto('Honda', 'CB500', 2019, 300);
minhaMoto.exibirInformacoes();