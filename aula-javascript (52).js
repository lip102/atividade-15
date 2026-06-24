let A = [];
let B = [];

for (let i = 0; i < 2; i++) {
    A[i] = [];

    for (let j = 0; j < 3; j++) {
        A[i][j] = parseInt(prompt(`A[${i}][${j}]:`));
    }
}

for (let i = 0; i < 3; i++) {
    B[i] = [];

    for (let j = 0; j < 2; j++) {
        B[i][j] = A[j][i];
    }
}

console.table(B);