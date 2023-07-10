//una funcion es un bloque de codigo reutilizable

function miFuncion(a, b) {
    console.log('suma: ' + (a + b));
}

//sintaxis para llamar la funcion:
miFuncion(2, 3);

/* 
Hoisting:
una funcion se puede mandar a llamar antes o despues de definirla, a esto se le conoce como Hoisting.
*/

//la palabra return
function daFuncion(a, b) {
    return a + b;
}
console.log(daFuncion(2, 3));

//funciones de tipo expresion
/* 
se puede asignar una funcion a una variable y asi evitar tener que ponerle un nombre a una funcion, esta funcion se van a conocer 'de tipo expresion' o 'funciones anonimas'.
*/

let variable = function (a, b) { return a + b };

resultado = variable(1, 2);
console.log(resultado);

//función de tipo self-invoking
(function (a, b) {
    console.log('ejecutando la funcion SUMA: ' + (a + b));
})(3, 4);

//funcion como objeto
console.log(typeof miFuncion);

//una funcion tambien pueden ser objeto:

//para saber cuantos argumentos tiene una funcion se escribe arguments.length
function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}


