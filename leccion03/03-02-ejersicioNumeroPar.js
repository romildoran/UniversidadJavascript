let a = 10;

if (a % 2 == 0) {
    console.log('Es un numero par');
} else {
    console.log("Es un numero impar");
}

//Operador Logica and &&

let b = 5;
let c = 11;
let valMin = 0, valMax = 10;

if (b >= valMin && b <= valMax) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango");
}


if (c >= valMin && c <= valMax) {
    console.log("Dentro del rango");
} else {
    console.log("Fuera del rango");
}

//ejemplo con or ||

let vacaciones = true, diaDescanso = false;

if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al partido del hijo");
} else {
    console.log('El padre esta ocupado');
}

//Operador ternario:
//primero la condicion booleana, exprecion 1, que se ejecuta si la condicion es verdadera y la expresion 2 que se ejecuta si la condicion es falsa
var resultado = (3 > 2) ? 'verdadero' : 'falso';
console.log(resultado);

var numero = 9;
resultado = (numero % 2 == 0) ? 'Numero par' : 'Numero impar';
console.log(resultado);

numero = 110;
resultado = (numero % 2 == 0) ? 'Numero par' : 'Numero impar';
console.log(resultado);