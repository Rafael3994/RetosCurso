// Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
// por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
// rellenar valores y otro para mostrar.

let rellenar = (array) => {
    for (let i = 0; i < 10; i++) {
        array.push(parseInt(prompt(`Pon un numero: (${i})`)));    
    }
    return array;
}

let mostrar = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(`Index: ${i}: ${array[i]}`);
    }
}


let array = [];

rellenar(array);
mostrar(array);