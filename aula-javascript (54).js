function exibirInventario(produtos, estoque) {
    for (let i = 0; i < produtos.length; i++) {
        let total = estoque[i][0] + estoque[i][1];

        console.log(
            `${produtos[i]} - Total em estoque: ${total}`
        );
    }
}

let produtos = ["Mouse", "Teclado", "Monitor", "Notebook"];

let estoque = [
    [10, 15],
    [8, 12],
    [5, 7],
    [3, 4]
];

exibirInventario(produtos, estoque);