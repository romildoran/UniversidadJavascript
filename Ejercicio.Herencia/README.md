# Herencia en JavaScript

En este código JavaScript, hemos trabajado con el concepto de herencia para crear diferentes clases y establecer relaciones entre ellas. A través de la herencia, podemos reutilizar y extender la funcionalidad de las clases base en las clases derivadas.

## Clases y Estructura del Código

Hemos definido las siguientes clases en nuestro código:

1. `persona`: Esta clase representa a una persona con propiedades como nombre, apellido y edad. Se ha implementado un contador estático para asignar un identificador único a cada instancia de persona.

2. `empleado` (subclass de `persona`): Representa a un empleado y hereda las propiedades y métodos de la clase `persona`. Además, incluye propiedades adicionales como un identificador único de empleado y el sueldo.

3. `cliente` (subclass de `persona`): Representa a un cliente y también hereda las propiedades y métodos de la clase `persona`. Adicionalmente, contiene un identificador único de cliente y la fecha de registro.

## Uso de la Herencia

Hemos utilizado la herencia para extender la funcionalidad de la clase base `persona` y crear las clases `empleado` y `cliente`. Al heredar de la clase `persona`, las subclases obtienen todas las propiedades y métodos de la clase base. Esto nos permite reutilizar código y evitar la duplicación.

Además, hemos sobrescrito el método `toString()` en las subclases para agregar información adicional específica de cada tipo de persona (empleado o cliente) a la representación en cadena del objeto.