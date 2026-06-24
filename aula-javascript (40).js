function classificarIMC(peso, altura) {
    let imc = peso / (altura * altura);

    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";

    return "Obesidade";
}

let peso = parseFloat(prompt("Peso:"));
let altura = parseFloat(prompt("Altura:"));

console.log(classificarIMC(peso, altura));