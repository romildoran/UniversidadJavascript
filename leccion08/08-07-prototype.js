//metodo prototype

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

let padre = new Persona('Junior', 'Mendez', 'juniorM@gmail.com');
//padre.telefono = '5552349';
//console.log(padre.telefono); imprime: '5552349'
console.log(padre.nombreCompleto());

let madre = new Persona('Camila', 'Higuita', 'camilaH@gmail.com');
//console.log(madre.telefono); imprime: undefined
console.log(madre.nombreCompleto());

//para agregar una nueva propiedad a ambos objetos sin manipular el construcctor es con prototype
Persona.prototype.telefono = '5558679933';
console.log(padre.telefono);
console.log(madre.telefono);