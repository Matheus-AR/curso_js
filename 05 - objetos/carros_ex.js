class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distancia, preco){
        return preco * distancia * this.gastoMedioPorKm;
    }

}


const c1 = new Carro('Fiat', 'Branco', 1/15);
console.log(c1.calcularGastoDePercurso(70, 5));