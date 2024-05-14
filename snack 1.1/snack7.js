const n= parseInt(prompt("Inserisci un numero N:"));

for (let y = 0; y < n; y++) {
    const arrayCasuale = [];

    for (let z = 0; z < 10; z++) {
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;
        arrayCasuale.push(numeroCasuale);
    }

    console.log(arrayCasuale);
}