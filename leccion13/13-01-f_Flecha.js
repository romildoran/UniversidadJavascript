//sintaxis de una funcion tradicional
function miFuncion() {
    console.log('Saludos desde mi funcion');
}
miFuncion();

//funcion anonima
//se crea una variable y a esta variable se le de da como valor una funcion sin nombre
let funcionAnonima = function () {
    console.log('Saludos desde una funcion anonima');
}
funcionAnonima();

//funcion flecha
const funcionFlecha = () => {
    console.log('Saludos desde la funcion flecha');
}
funcionFlecha();


//sintaxis simplificada de la funcion flecha
const funcionFinema = () => 'Saludos desde la funcion flecha';
console.log(funcionFinema());

//
const saludar = () => {
    return 'Saludos desde la funcion flecha "saludo".';
}
console.log(saludar());

const saludar2 = () => 'Saludos desde la funcion flecha "saludar2".';
console.log(saludar2());

//funciones flecha con parametros
const regresarObjeto = () => ({ nombre: 'Juan', apellido: 'Lara' });
console.log(regresarObjeto());

const funcionCParametros = (mensaje) => mensaje;
console.log(funcionCParametros('saludos con parametros')); 

const fconParametros = (op1, op2) => op1 + op2;
console.log(fconParametros(3, 5));
//que es lo mismo que hacer la siguiente funcion:

const fconVariosParametros = (op1, op2) =>{
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
};
console.log(fconVariosParametros(3, 5));
