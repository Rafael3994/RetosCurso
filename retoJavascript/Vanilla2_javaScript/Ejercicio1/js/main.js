// Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido
// pedirá los valores necesarios para calcular el área. Para ello has de crear un método
// por cada figura para calcular cada área, este devolverá un número real. Muestra el
// resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

let areaCirculo = (radio) => {
    let area = (radio**2)*Math.PI;
    return `El area de un circulo de ${radio} es ${area}`;
}

let areaTriangulo = (base, altura) => {
    let area = (base*altura)/2;
    return `El area de un triangulo de base ${base} y altura ${altura} es ${area}`;
}

let areaCuadrado = (lado) => {
    let area = lado*lado;
    return `El area de un cuadrado con un lado de ${lado} es ${area}`;
}

let forma =  prompt('Pon una forma:').toLowerCase();

switch (forma) {
    case 'circulo':
        let area = parseFloat(prompt('Pon el area de un circulo:'));
        console.log(areaCirculo(area));
        break;
    case 'triangulo':
        let base = parseFloat(prompt('Pon la base de un triangulo:'));
        let altura = parseFloat(prompt('Pon la altura de un triangulo:'));
        console.log(areaTriangulo(base, altura));
        break;
    case 'cuadrado':
        let lado = parseFloat(prompt('Pon un lado de un cuadrado:'));
        console.log(areaCuadrado(lado));
        break;
    default:
        console.log('La forma introducida no esta disponible.');
        break;
}
