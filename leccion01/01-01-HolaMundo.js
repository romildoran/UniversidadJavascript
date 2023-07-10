//Tipo de dato cadena:
let nombre = 'Ubaldo';
console.log(nombre);

//Tipo de dato numerico:
let numero = 1000;
console.log(numero);

//Tipo de dato objeto:
let objeto = {
    nombre: "Juan",
    apellido: "Perez",
    telefono: "5554443322",
}
console.log(objeto);

//Tipo de dato boolean:
let bandera = true;
console.log(typeof bandera);

//Tipo de dato funcion:
function miFuncion() {

}
console.log(miFuncion);

//Tipo de dato symbol:
let simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo de dato clase, que tambien es una funcion:
class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(persona);

//Tipo de dato undefined:
let x;
console.log(typeof x);

//Tipo de dato Null (ausencia de valor):
var y = null;
console.log(y);

//Tipo de datos Arry:
let autos = ['BMW', "AUDI", "VOLVO", "RENAULT",];
console.log(autos);

//variables sin valores
var z = '';
console.log(z);
console.log(typeof z);

