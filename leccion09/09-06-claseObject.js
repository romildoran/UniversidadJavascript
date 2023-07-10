
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(nombre) {
        this._apellido = apellido;
    }
    //herencia
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //toString
    toString(){
        return this.nombreCompleto();
    }
}

//las clases comienzan siempre en letra mayuscula

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

let persona1 = new Persona('Pablo', 'Gil');
console.log(persona1);

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);

//herencia
console.log(empleado1.nombreCompleto());

//metodo toString
console.log(empleado1.toString());

