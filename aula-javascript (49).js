let matriz = [];
let maior = -Infinity;
let linhaMaior = 0;
let colunaMaior = 0;

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseInt(prompt(`Valor [${i}][${j}]:`));

        if (matriz[i][j] > maior) {
            maior = matriz[i][j];
            linhaMaior = i;
            colunaMaior = j;
        }
    }
}

console.log(`Maior valor: ${maior}`);
console.log(`Linha: ${linhaMaior} Coluna: ${colunaMaior}`);