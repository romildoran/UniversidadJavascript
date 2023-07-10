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

//uso de la funcion call para usar el metodo 'nombreCompleto' en el objeto persona2
console.log(persona1.nombreCompleto.call(persona2));

//con la funcion call tambien podemos pasar argumentos
console.log(persona1.nombreCompleto.call(persona2, 'Ing.', '5554769768'));
