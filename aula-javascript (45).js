let numeros = [];
let pares = [];
let impares = [];

for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt(`Número ${i + 1}:`));

    if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
}

console.log("Original:", numeros);
console.log("Pares:", pares);
console.log("Ímpares:", impares);