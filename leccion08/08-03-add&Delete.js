//Agregar y eliminar propiedades de un objeto

let persona = {
    name: 'Juan',
    lastname: 'Perez',
    email: 'jperez@mail.com',
    year: 28,
    nombreCompleto: function () {
        return this.name + ' ' + this.lastname;
    }
}

//agregar propiedades:
persona.telefono = '5554780033';
console.log(persona);

//obtener las propiedades del objeto con Object.keys

const propiedades = Object.keys(persona);
console.log(propiedades);


//El bucle for...in se puede utilizar para recorrer todas las propiedades enumerables de un objeto
//En este caso, el bucle for...in itera sobre todas las propiedades del objeto objeto y muestra en la consola el nombre de cada propiedad.


for (let propiedad in persona) {
    console.log(propiedad);
}

//elimir una propiedad existente
delete persona.telefono;
console.log(persona);

for (let propiedad in persona) {
    console.log(propiedad);
}

