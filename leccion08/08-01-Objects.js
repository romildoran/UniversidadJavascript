let person = {
    name: 'Juan',
    lastname: 'Perez',
    email: 'jperez@mail.com',
    year: 28
}

console.log(person.name);
console.log(person.lastname);
console.log(person.email);
console.log(person.year);

console.log(person);

//agregar metodos a los objetos
let persona = {
    name: 'Juan',
    lastname: 'Perez',
    email: 'jperez@mail.com',
    year: 28,
    nombreCompleto: function () {
        return this.name + ' ' + this.lastname;
    }
}
console.log(persona.nombreCompleto());

//creando objetos con new
let persona2 = new Object();
persona2.name = 'Ana';
persona2.lastname = 'Gil';
persona2.email = 'Agil@mail.com';
persona2.year = 25;

console.log(persona2);

