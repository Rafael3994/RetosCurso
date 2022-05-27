// Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizara mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.

let factorial = (num) => {
  let factorial = num;
  for (let i = num-1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
}


let numero = parseInt(prompt('Pon un numero: '));
console.log(factorial(numero));