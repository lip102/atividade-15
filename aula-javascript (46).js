let codigos = [];

for (let i = 0; i < 8; i++) {
    codigos[i] = parseInt(prompt(`Código ${i + 1}:`));
}

let busca = parseInt(prompt("Código a remover:"));
let encontrado = false;

for (let i = 0; i < codigos.length; i++) {
    if (codigos[i] === busca) {
        codigos[i] = 0;
        encontrado = true;
    }
}

if (encontrado) {
    console.log("Produto removido.");
} else {
    console.log("Produto não existe.");
}