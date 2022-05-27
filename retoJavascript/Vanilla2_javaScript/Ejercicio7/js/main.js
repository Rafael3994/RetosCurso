// Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
// a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
// parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
// devolverá ningún valor, mostrará un mensaje indicando el cambio.
//  El cambio de divisas es:
//    • 0.86 libras es un 1 €
//    • 1.28611 $ es un 1 €
//    • 129.852 yenes es un 1 €

let transformaMoneda = (euros, moneda) => {
  switch (moneda) {
      case "libras":
          console.log(`${euros} euro/s en libras son ${euros*0.86} libras`);
          break;
      case "dolares":
          console.log(`${euros} euro/s en dolares son ${euros*1.13} dolares`);
          break;
      case "yenes":
          console.log(`${euros} euro/s en yenes son ${euros*129.852} yenes`);
          break;
      default:
          console.log('La moneda introducida no esta disponible.');
          break;
  }
}

let euros = parseFloat(prompt('Pon los euros a transpasar:'));
let moneda = prompt('¿A que moneda lo quieres?').toLowerCase();

transformaMoneda(euros, moneda);