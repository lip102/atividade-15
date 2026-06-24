function calcularMediaPonderada(n1, n2, p1, p2) {
    return (n1 * p1 + n2 * p2) / (p1 + p2);
}

let n1 = parseFloat(prompt("Nota 1:"));
let n2 = parseFloat(prompt("Nota 2:"));
let p1 = parseFloat(prompt("Peso 1:"));
let p2 = parseFloat(prompt("Peso 2:"));

console.log(calcularMediaPonderada(n1, n2, p1, p2));