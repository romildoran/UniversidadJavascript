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
        return `${this.idpersona} ${this._nombre} ${this._apellido}`;
    }
}



