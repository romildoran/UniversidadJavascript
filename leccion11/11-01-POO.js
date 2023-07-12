class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo,);
        this._departamento = departamento;
    }
    obtenerDetalles() {
        return `Gerente: Departamento: ${super.obtenerDetalles()}, ${this._departamento}`;
    }
}

//Polimorfismo
function imprimir(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }
    else if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo Empleado');
    }
    else if (tipo instanceof Object) {
        console.log('Es un tipo Object');
    }
}

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
//console.log(gerente1.obtenerDetalles());

let empleado1 = new Empleado('Juan', 3000);
//console.log(empleado1.obtenerDetalles());

imprimir(empleado1);
imprimir(gerente1);

