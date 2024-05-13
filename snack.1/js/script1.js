const numero1 = prompt("Inserisci il primo numero:");
const numero2 = prompt("Inserisci il secondo numero:");

const numeroIntero1 = parseInt(numero1);
const numeroIntero2 = parseInt(numero2);

if (numeroIntero1 > numeroIntero2) {
    console.log("Il numero maggiore è:", numeroIntero1);
} else if (numeroIntero2 > numeroIntero1) {
    console.log("Il numero maggiore è:", numeroIntero2);
} else {
    console.log("I numeri sono uguali.");
}