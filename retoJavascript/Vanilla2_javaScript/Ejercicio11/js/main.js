// Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
// estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
// los valores del segundo array con valores aleatorios. Después, crea un método que
// tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
// de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
// el contenido de cada array

let rellenar = (cantidad, array) => {
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 10));    
    }
    return array;
}

let multiArray = (arrayRand, arrayApunt) => {
    let arrayMult = [];
    for (let i = 0; i < arrayRand.length; i++) {
        arrayMult.push(arrayRand[i] * arrayApunt[i]);
    }
    return arrayMult;
}


let arrayRand = [];
let arrayApunt = [];

let cantidad = parseInt(prompt('Pon la cantidad:'));

arrayRand = rellenar(cantidad, arrayRand);

arrayApunt = arrayRand;

let arrayMult = multiArray(arrayRand, arrayApunt);
console.log(arrayMult);
