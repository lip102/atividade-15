let notas = [];
let medias = [];

for (let i = 0; i < 4; i++) {
    notas[i] = [];
    let soma = 0;

    for (let j = 0; j < 3; j++) {
        notas[i][j] = parseFloat(
            prompt(`Equipe ${i + 1} - Trimestre ${j + 1}:`)
        );

        soma += notas[i][j];
    }

    medias[i] = soma / 3;
}

for (let i = 0; i < medias.length; i++) {
    console.log(`Equipe ${i + 1}: ${medias[i].toFixed(2)}`);
}