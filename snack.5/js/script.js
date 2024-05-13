const numeriDispari = [];

for (let x = 0; x < 6; x++) {
    const numero = parseInt(prompt("Inserisci un numero:"));

    if (numero % 2 !== 0) {
        numeriDispari.push(numero);
    }
}

console.log("Numeri dispari inseriti:", numeriDispari);