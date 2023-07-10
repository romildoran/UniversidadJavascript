//Ejercicio de Herencia en JavaScript

class persona {
    static contadorPersona = 0;
    constructor(nombre, apellido, edad) {
        this._idpersona = ++persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idpersona() {
        return this._idpersona;
    }
    set idpersona(idpersona) {
        this._idpersona = idpersona;
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
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `${this.idpersona} ${this._nombre} ${this._apellido} ${this.edad}`;
    }
}

class empleado extends persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    set idEmpleado(idEmpleado) {
        this._idEmpleado = idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    toString() {
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class cliente extends persona {
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

//prueba de la clase persona
let persona1 = new persona('Juan', 'Perez', 28);
console.log(persona1.toString());
let persona2 = new persona('Calor', 'Ramirez', 18);
console.log(persona2.toString());

let empleado1 = new empleado("Carla", "Gomez", 25, 5000);
console.log(empleado1.toString());
let empleado2 = new empleado("Laura", 'Quintero', 33, 7000);
console.log(empleado2.toString());

let cliente1 = new cliente("Miguel", 'Cervantes', 30, new Date());
console.log(cliente1.toString());
let cliente2 = new cliente('Maria', 'Lara', 38, new Date());
console.log(cliente2.toString());