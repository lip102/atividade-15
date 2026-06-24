let A = [];
let B = [];
let C = [];

for (let i = 0; i < 5; i++) {
    A[i] = parseInt(prompt(`A[${i}]:`));
}

for (let i = 0; i < 5; i++) {
    B[i] = parseInt(prompt(`B[${i}]:`));
}

for (let i = 0; i < 5; i++) {
    C.push(A[i]);
    C.push(B[i]);
}

console.log(C);