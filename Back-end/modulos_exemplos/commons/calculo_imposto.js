var taxa = 0.10;

exports.valor = function (valor) {
    return valor * taxa;
}

exports.adicionar = function (valor) {
    return valor + (valor * taxa);
}