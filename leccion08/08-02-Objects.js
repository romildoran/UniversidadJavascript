//otra forma de acceder a las propiedades del objeto

let persona = {
    name: 'Juan',
    lastname: 'Perez',
    email: 'jperez@mail.com',
    year: 28,
    nombreCompleto: function () {
        return this.name + ' ' + this.lastname;
    }
}

console.log(persona);
console.log(persona.nombreCompleto());

//
console.log(persona['lastname']);

// bucle for in

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

