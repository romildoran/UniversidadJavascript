class empleado extends persona {
    static contadorEmpleados = 0;

    constructor(sueldo) {
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