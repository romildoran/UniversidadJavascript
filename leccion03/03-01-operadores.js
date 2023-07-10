let a = 3, b = 2, c = 1, d = 4;
var z = a + b;
console.log('El resultado de la suma es: ' + z);

z = a - b;
console.log("El resultado de la resta es: " + z);

z = a * b;
console.log("El resultado de la multiplicacion es: " + z);

z = a / b;
console.log("El resultado de la division es: " + z);

z = a % b;
console.log("El resultado de la operacion modulo o residuo es: " + z);

z = a ** b;
console.log("El resultado del operador exponente es: " + z);

//operadores de incremento y decremento:

//incremento
//pre-incremento (el operador va antes de la variable)
let e = 2;
y = ++e;
console.log(e);
console.log(y);

//post-incremento (el operador va despues de la variable)
y = e++;
console.log(e);
console.log(y);

//Decremento
//pre-decremento
y = --e;
console.log(e);
console.log(y);

//post-decremento
y = e--;
console.log(e);
console.log(y);

//Presedencia de operadores
//las operaciones en JS se hacen de izquierda a derecha

z = a * b + c;
console.log(z);

z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);

//operadores de asignacion:
let f = 3;

f += 3; // es igual a f que vale 1 + 3 = 4
console.log(f);

f -= 2;
console.log(f);

f *= 2;
console.log(f);

f /= 2;
console.log(f);

f %= 2;
console.log(f);

//Operadores de comparacion:
let g = 3, h = 2, m = "3";

//operador de asignacion:

//revisa el valor sin importar el tipo
z = g == h;
console.log(z);

z = g == m;
console.log(z);

//revisa tanto el valor como el tipo
z = g === h;
console.log(z);

z = g === m;
console.log(z);

//invierte el resultado de verdadero como falso y no tiene en cuenta el tipo de dato
z = g != h;
console.log(z);

z = g != m;
console.log(z);

//invierte el resultado de verdadero como falso y toma en cuenta el tipo de dato
z = g !== h;
console.log(z);

z = g !== m;
console.log(z);

//Operadores menor que y mayor que
z = a < b;
console.log(z);

z = a > b;
console.log(z);

z = a <= b;
console.log(z);

z = a >= b;
console.log(z);

