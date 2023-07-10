//agregar metodos a un metodo construcctor de objetos

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Junior', 'Mendez', 'juniorM@gmail.com');
console.log(padre.nombreCompleto());

let madre = new Persona('Camila', 'Higuita', 'camilaH@gmail.com');
console.log(madre.nombreCompleto());

//formas de crear un objeto
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array;
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){ };
