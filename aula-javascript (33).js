let a = parseFloat(prompt("Lado 1:"));
let b = parseFloat(prompt("Lado 2:"));
let c = parseFloat(prompt("Lado 3:"));

if (a === b && b === c) {
    console.log("Equilátero");
} else if (a === b || a === c || b === c) {
    console.log("Isósceles");
} else {
    console.log("Escaleno");
}