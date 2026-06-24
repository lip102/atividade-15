let matriz = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = parseFloat(prompt(`Valor [${i}][${j}]:`));
    }
}

let fator = parseFloat(prompt("Fator multiplicador:"));

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] *= fator;
    }
}

console.table(matriz);