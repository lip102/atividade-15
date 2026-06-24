let vetor = [];

for (let i = 0; i < 10; i++) {
    vetor[i] = parseInt(prompt(`Número ${i + 1}:`));
}

for (let i = 0; i < vetor.length / 2; i++) {
    let temp = vetor[i];
    vetor[i] = vetor[vetor.length - 1 - i];
    vetor[vetor.length - 1 - i] = temp;
}

console.log(vetor);