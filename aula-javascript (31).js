let custo = parseFloat(prompt("Preço de custo:"));
let margem = parseFloat(prompt("Margem de lucro (%):"));

let lucro = custo * (margem / 100);
let precoFinal = custo + lucro;

alert(`Lucro: R$ ${lucro.toFixed(2)}\nPreço final: R$ ${precoFinal.toFixed(2)}`);