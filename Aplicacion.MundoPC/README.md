# Práctica de JavaScript: Creación de Clases, Getters, Setters y toString

En esta práctica de JavaScript, hemos trabajado en la creación de diversas clases que representan diferentes dispositivos y componentes de una computadora. A través de estas clases, hemos utilizado conceptos como herencia, getters, setters y el método toString para obtener representaciones legibles de los objetos.

## Clases y Estructura del Código

Hemos definido las siguientes clases en nuestro código:

1. `DispositivoEntrada`: Es una clase base que representa un dispositivo de entrada genérico. Contiene propiedades como el tipo de entrada y la marca del dispositivo.

2. `Raton` (subclass de `DispositivoEntrada`): Representa un ratón con propiedades adicionales, como un identificador único (`idRaton`). Sobrescribe el método `toString()` para obtener una representación legible del objeto.

3. `Teclado` (subclass de `DispositivoEntrada`): Representa un teclado con propiedades adicionales, como un identificador único (`idTeclado`). También tiene su propia implementación del método `toString()`.

4. `Monitor`: Representa un monitor con propiedades como marca y tamaño. El método `toString()` se utiliza para obtener una representación en formato de cadena del objeto.

5. `Computadora`: Representa una computadora que contiene un nombre, un monitor, un ratón y un teclado. El método `toString()` se ha implementado para mostrar todos los detalles de la computadora.

6. `Orden`: Representa una orden que contiene una lista de computadoras. Se pueden agregar computadoras a la orden y luego mostrar todos los detalles de la orden.

## Uso de Getters, Setters y toString

En nuestras clases, hemos utilizado los métodos getter y setter para acceder y modificar las propiedades de los objetos de manera controlada. Esto nos permite mantener la integridad de los datos y realizar validaciones si es necesario.

También hemos sobrescrito el método `toString()` en varias clases para obtener una representación legible del objeto en forma de cadena. Esto nos permite mostrar información relevante sobre los objetos cuando los imprimimos en la consola.

## Resumen del Ejercicio

En esta práctica de JavaScript, hemos trabajado en la creación de clases para representar dispositivos de una computadora, así como en la creación de una clase `Orden` para agrupar computadoras en una orden. Hemos utilizado conceptos como herencia, getters, setters y el método `toString()` para obtener representaciones legibles de los objetos.