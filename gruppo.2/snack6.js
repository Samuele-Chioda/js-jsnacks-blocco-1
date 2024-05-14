const numeri = [5, 10, 25, 40, 50, 12, 66, 45, 99, 12];
let sommaDispari = 0;

for (let x = 1; x < numeri.length; x += 2) {
    sommaDispari += numeri[x];
}

console.log("La somma dei numeri dispari è:", sommaDispari);
