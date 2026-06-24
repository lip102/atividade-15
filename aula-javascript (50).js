let matriz = [];
let soma = 0;

for (let i = 0; i < 4; i++) {
    matriz[i] = [];

    for (let j = 0; j < 4; j++) {
        matriz[i][j] = parseInt(prompt(`Valor [${i}][${j}]:`));

        if (j === 1) {
            soma += matriz[i][j];
        }
    }
}

console.log(`Soma da segunda coluna: ${soma}`);