// Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.

let arrayRandom = (arrayRand) => {
    let cantidad = parseInt(prompt('Pon la cantidad:'));
    let rangoMin = parseInt(prompt('Pon el minimo:'));
    let rangoMax = parseInt(prompt('Pon el maximo:'));

    for (let i = 0; i < cantidad; i++) {
        arrayRand.push(Math.floor(Math.random() * (rangoMax - rangoMin)) + rangoMin);
    }

    return arrayRand;
}

let numRandom = (array) => {
    let numRand = array[Math.floor(Math.random() * (array.length - 0)) + 0]
    return numRand;
}

let array = [];
array = arrayRandom(array);
console.log(array);
let num = numRandom(array);
console.log(num);