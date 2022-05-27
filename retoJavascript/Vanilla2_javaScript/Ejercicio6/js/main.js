// Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.

let countCifras = (numero) => {
  return (''+numero).length; ;
}

let numero = prompt('Pon un cifra:');

console.log(countCifras(numero));
