let inicio = parseInt(prompt("Início:"));
let fim = parseInt(prompt("Fim:"));

let soma = 0;

for (let i = inicio; i <= fim; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
    }
}

console.log(soma);