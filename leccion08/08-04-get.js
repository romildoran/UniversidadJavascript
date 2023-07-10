//metodo get
let persona = {
    name: 'Juan',
    lastname: 'Perez',
    email: 'jperez@mail.com',
    year: 28,
    language: 'es',
    get idioma(){
        return this.language.toUpperCase();
    },
    set idioma(idioma){
        this.language = idioma.toUpperCase();
    },
    get nombreCompleto(){
        return this.name + ' ' + this.lastname;
    }
}

console.log(persona.nombreCompleto);

//metodo set
console.log(persona.idioma);
persona.idioma = 'en';

console.log(persona.idioma);

console.log(persona.language);