const senhaCorreta = "segredo123";
let tentativas = 0;
let acesso = false;

while (tentativas < 3) {
    let senha = prompt("Digite a senha:");

    if (senha === senhaCorreta) {
        acesso = true;
        break;
    }

    tentativas++;
}

if (acesso) {
    console.log("Acesso Permitido");
} else {
    console.log("Conta Bloqueada");
}