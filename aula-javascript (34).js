let saldo = parseFloat(prompt("Saldo atual:"));
let saque = parseFloat(prompt("Valor do saque:"));

if (saque <= saldo) {
    saldo -= saque;
    console.log(`Saque realizado com sucesso! Novo saldo: R$ ${saldo.toFixed(2)}`);
} else {
    console.log("Saldo insuficiente");
}