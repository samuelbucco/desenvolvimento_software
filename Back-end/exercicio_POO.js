class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}`);
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, garantia) {
        super(nome, preco);
        this.garantia = garantia;
    }

    exibirInformacoes() {
        console.log(`Nome: ${this.nome}, Preço: ${this.preco}, Garantia: ${this.garantia}`);
    }
}

const meuProduto = new Produto('Camiseta', 29.99);

meuProduto.exibirInformacoes();

const meuEletronico = new Eletronico('Smartphone', 1999.99, '2 anos');

meuEletronico.exibirInformacoes();