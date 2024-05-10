
const entradas = [1.2];
let  i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(...args) {
    console.log(...args)
}

module.exports = { gets, print };