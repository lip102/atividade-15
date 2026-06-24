function contarPositivosMaior50(vetor) {
    let contador = 0;

    for (let num of vetor) {
        if (num > 50) {
            contador++;
        }
    }

    return contador;
}

let vetor = [];

for (let i = 0; i < 7; i++) {
    vetor.push(parseInt(prompt(`Número ${i + 1}:`)));
}

console.log(contarPositivosMaior50(vetor));