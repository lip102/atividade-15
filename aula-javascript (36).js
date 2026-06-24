let numero = parseInt(prompt("Digite um número positivo:"));
let contador = 0;

while (numero > 0) {
    numero = Math.floor(numero / 10);
    contador++;
}

console.log(`Quantidade de dígitos: ${contador}`);