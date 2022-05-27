// Crea un array de números de un tamaño pasado por prompt, el array contendrá
// números aleatorios primos entre los números deseados, por último, nos indicar cual
// es el mayor de todos. Haz un método para comprobar que el número aleatorio es
// primo, puedes hacer todos los métodos que necesites.



let isPrimo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
    }
    return true;
}

let rellenarConPrimos = (catidad, array) => {
    for (let i = 0; i < cantidad; i++) {
        let num = Math.floor(Math.random() * 100)
        if (isPrimo(num)) {
            array.push(num);
        } else {
            i--;
        }
    }
    return array;
}

let mayor = (array) => {
    return Math.max(...array);
}

let cantidad = parseInt(prompt('Pon la cantidad: '));
let array = [];

array = rellenarConPrimos(cantidad, array);
console.log(array);
let numMay = mayor(array);
console.log(numMay);
