let opcao;

do {
    opcao = prompt(
        "1 - Converter Dólar\n" +
        "2 - Converter Euro\n" +
        "3 - Sair"
    );

    if (opcao === "1") {
        let reais = parseFloat(prompt("Valor em reais:"));
        console.log(`US$ ${(reais / 5).toFixed(2)}`);
    }

    if (opcao === "2") {
        let reais = parseFloat(prompt("Valor em reais:"));
        console.log(`€ ${(reais / 6).toFixed(2)}`);
    }

} while (opcao !== "3");