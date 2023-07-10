# Actividad: Sistema de Ventas

Este repositorio contiene el código correspondiente a la actividad propuesta en el curso "Universidad JavaScript - De Cero a Experto JavaScript!" impartido por el instructor Ing. Ubaldo Acosta en Udemy. 

## Descripción

El código proporcionado consiste en la implementación de las clases `Producto` y `Orden`. A continuación, se describen brevemente cada una de ellas:

### Clase `Producto`

La clase `Producto` representa un producto y tiene las siguientes características:

- Propiedades:
  - `_idProducto`: identificador único del producto.
  - `_nombre`: nombre del producto.
  - `_precio`: precio del producto.

- Métodos:
  - `get idProducto()`: devuelve el identificador del producto.
  - `get nombre()`: devuelve el nombre del producto.
  - `set nombre(nombre)`: establece el nombre del producto.
  - `get precio()`: devuelve el precio del producto.
  - `set precio(precio)`: establece el precio del producto.
  - `toString()`: devuelve una representación en cadena del producto.

### Clase `Orden`

La clase `Orden` representa una orden de compra y tiene las siguientes características:

- Propiedades:
  - `_idOrden`: identificador único de la orden.
  - `_productos`: arreglo que contiene los productos de la orden.
  - `_contadorProductosAgregados`: contador de productos agregados a la orden.

- Métodos:
  - `get idOrden()`: devuelve el identificador de la orden.
  - `agregarProducto(producto)`: agrega un producto a la orden si no se ha alcanzado el límite máximo.
  - `calcularTotal()`: calcula el total de la orden sumando los precios de los productos.
  - `mostrarOrden()`: muestra la información de la orden, incluyendo los productos y el total.
  - `toString()`: devuelve una representación en cadena de la orden.

## Uso

El código proporcionado crea instancias de la clase `Producto` y la clase `Orden` para simular el registro de productos y la generación de órdenes de compra. Puedes modificar el código existente o agregar más productos y órdenes según sea necesario.

Para ejecutar el código, simplemente ejecuta el archivo en un entorno de ejecución de JavaScript compatible, como Node.js o ejecútalo en un navegador.

## Recursos

Para obtener más información sobre el curso "Universidad JavaScript - De Cero a Experto JavaScript!" y acceder a su contenido completo, puedes visitar el siguiente enlace:

[Universidad JavaScript - De Cero a Experto JavaScript!](https://www.udemy.com/course/universidad-javascript-angular-react-vue-typescript-html-css-bootstrap/#instructor-1)
