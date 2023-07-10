//funcion construcctor

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Junior', 'Mendez', 'juniorM@gmail.com');
console.log(padre);

let madre = new Persona('Camila', 'Higuita', 'camilaH@gmail.com');
console.log(madre);

//agregar metodos a un metodo construcctor de objetos
