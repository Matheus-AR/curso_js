const { gets, print } = require('./funcoes-auxiliares');

const N = gets();

let maiorPar = 0;
let menorImpar = 0;
for (let i=0; i < N; i++) {
    const valor = gets();
    if (i===0) {
        maiorPar=valor;
        menorImpar=valor;
    }
    if (maiorPar < valor && (valor % 2 === 0)) {
        maiorPar = valor;
    }
    if (menorImpar > valor && (valor % 2 !== 0)) {
        menorImpar = valor;
    }
}

print('Maior número par: ', maiorPar);
print('Menor número ímpar: ', menorImpar);