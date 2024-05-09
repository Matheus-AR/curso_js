const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i=0; i<notas.length; i++){
    soma += notas[i];
}

const media = soma / notas.length;
console.log(media);
console.log(notas);
notas.pop();
console.log(notas);
notas.pop();
console.log(notas);