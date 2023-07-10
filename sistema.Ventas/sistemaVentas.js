class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto() {
        return this._idProducto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    get precio() {
        return this._precio;
    }
    set precio(precio) {
        return this._precio = precio;
    }
    toString() {
        return `idProducto: ${this._idProducto}, \n nombre: ${this._nombre}, \n precio: $ ${this._precio}`;
    }
}

let producto1 = new Producto('pantalon', 200);
let producto2 = new Producto('camisa', 100);
console.log(producto1.toString());
console.log(producto2.toString());

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    get idOrden() {
        return this._idOrden;
    }
    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        } else {
            console.log('No se pueden agregar mas productos');
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio
        }
        return totalVenta;
    }
    mostrarOrden() {
        let productosOrden = ' ';
        for (let producto of this._productos) {
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()},  Productos: ${productosOrden}`);
    }
    toString() {
        return `idOrden: ${this._idOrden}, \n productos: ${this._productos}, \n Contador Producto: ${this._contadorProductosAgregados}`;
    }
}

let producto3 = new Producto('pantalon', 200);
let producto4 = new Producto('camisa', 100);
let producto5 = new Producto('zapatos', 300);

let orden1 = new Orden();
orden1.agregarProducto(producto3);
orden1.agregarProducto(producto4);
orden1.mostrarOrden(); 

let orden2 = new Orden();
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();

console.log(orden1.toString());
console.log(orden2.toString());