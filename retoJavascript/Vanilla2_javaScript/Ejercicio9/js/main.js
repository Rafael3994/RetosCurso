// Crea un array de números donde le indicamos por prompt el tamaño del array,
// rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
// el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
// método para rellenar el array(que tenga como parámetros los números entre los que
// tenga que generar) y otro para mostrar el contenido y la suma del array

let rellenar = (cantidad, array) => {
    for (let i = 0; i < cantidad; i++) {
        array.push(Math.floor(Math.random() * 10));    
    }
    return array;
}

let sumaArray = (array) => {
    console.log(array);
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        console.log(`Index: ${i}: ${array[i]}`);
        total += array[i];
    }
    console.log(total);
    return total;
}


let cantidad = parseInt(prompt('Pon la cantidad:'));
let array = [];

rellenar(cantidad, array);
console.log(`El total del array és:`, sumaArray(array));