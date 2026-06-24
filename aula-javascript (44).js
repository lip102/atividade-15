let notas = [];
let somaNotas = 0;

for (let i = 0; i < 8; i++) {
    notas[i] = parseFloat(prompt(`Nota ${i + 1}:`));
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

console.log(`Média: ${media}`);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] < media) {
        console.log(`Índice ${i}: ${notas[i]}`);
    }
}