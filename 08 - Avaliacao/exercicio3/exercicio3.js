const { gets, print } = require('./funcoes-auxiliares');

const valorSalario = gets();
const valorBeneficios = gets();

function calcularPercentual(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {
    if (salario>=0 && salario<=1100) {
        return 5;
    } else if (salario <= 2500) {
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorSalario);

const valorImposto = calcularPercentual(valorSalario, aliquotaImposto);

const valorATransferir = valorSalario - valorImposto + valorBeneficios;

print(valorATransferir)