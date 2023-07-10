let persona1 = {
    nombre: "Higor",
    apellido: "Muñoz",
    nombreCompleto: function(titulo, telefono){
        return titulo + ' ' + this.nombre + ' ' + this.apellido + ' '+ telefono;
    }
}

let persona2 = {
    nombre: "Gisella",
    apellido: "Suarez",
}

//uso de la funcion Apply para mandar a llamar un metodo en un objeto que no lo tiene definido
console.log(persona1.nombreCompleto('Lic.', '55568794058'));

//
let arreglo = ['Ing.', '5554769768']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));

