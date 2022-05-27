function mayor_menor_igual (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} és más grande que ${num2}`);
    } else if (num1 < num2) {
        console.log(`${num1} és más pequenyo que ${num2}`);
    } else {
        console.log(`${num1} és igual que ${num2}`);
    }
}

function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
}

function areaCirculo (radio) {
    if (Number.parseFloat(radio)) {
        let area = Math.PI * (radio*radio);
        return 'El area es:' + area;
    } else {
        return 'No es un numero';
    }
}

function isResto2 (num) {
    if (num % 2 == 0) {
        return `${num} es resto de 2.`;
    } else {
        return `${num} no es resto de 2.`;
    }
}

function calculaIVA (precio, iva=Number.parseFloat(0.21)) {
    let precioParse = Number.parseFloat(precio);
    let precioIVA = Number.parseFloat(iva * precioParse);
    return 'El total es:' + Number.parseFloat(precioIVA) + Number.parseFloat(precioParse);
}

function while_1_100 () {
    let index = 1;
    while (index <= 100) {
        console.log(index);
        index++;
    }
}

function for_1_100 () {
    for (let index = 1; index <= 100; index++) {
        console.log(index);
    }
}

function divisibles_1_100 () {
    for (let index = 1; index <= 100; index++) {
        if (index % 2 == 0 || index % 3 == 0) {
            console.log(index);
        }
    }
}

function sumaVentas () {
    let cantidad = prompt('Pon la cantidad de productos:');
    let ventas = [];
    let total = 0;
    for (let i = 0; i < cantidad; i++) {
        let precio = parseInt(prompt(`Precio del producto ${i}`));
        ventas.push(precio);
    }
    // console.log(ventas);
    for (let i = 0; i < ventas.length; i++) {
        total += ventas[i];
    }

    return `El total de ${ventas} es: \n${total}`;
}

function isTrabajo (dia) {
    switch (dia) {
        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
            console.log("Hoy trabajas.");
            break;
        case "Sabado":
        case "Domingo":
            console.log("Hoy descansas.");
            break;
        default:
            console.log("Mal dato introducido.");
            break;
    }
}

function comprobarPass () {
    let password = "password";

    for (let intentos = 1; intentos <= 3; intentos++) {
        let inputPass = prompt(`Ingresa la contraseña (int.${intentos})`);
        if (inputPass === password) {
            return 'Contraseña correcta.';
        }
    }
    return 'No tienes más intentos';
}

function CalculadoraInversa (num1, num2, op) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (op) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1+num2}`);    
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1-num2}`);    
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1*num2}`);    
            break;
        case '/':
            console.log(`${num1} / ${num2} = ${num1/num2}`);    
            break;
        case '^':
            console.log(`${num1} ^ ${num2} = ${num1**num2}`);    
            break;
        case '%':
            console.log(`${num1} % ${num2} = ${num1%num2}`);    
            break;
        default:
            console.log('Pusiste algo mal.');
            break;
    }
}