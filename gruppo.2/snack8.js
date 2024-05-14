const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
        numbers.forEach(numero => {
            if (numero % 2 === 0) {
                document.getElementById('verde').innerHTML += numero + ' ';
            } else {
                document.getElementById('rosso').innerHTML += numero + ' ';
            }
        });
