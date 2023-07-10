## Función de tipo self-invoking
Una función de tipo self-invoking, también conocida como función autoinvocada es una función que se ejecuta inmediatamente después de ser definida, sin necesidad de ser llamada explícitamente.

La sintaxis básica de una función autoinvocada es la siguiente:

<script>
(function() {
  // Código a ejecutar
})();
</script>

Al utilizar esta estructura, la función se define y se invoca al mismo tiempo, lo que permite ejecutar un bloque de código de manera inmediata.

## El método toString()
es una función integrada en el objeto Number de JavaScript. Sirve para convertir un valor numérico en su representación como cadena de texto.

Cuando se llama al método toString() en un número, se devuelve una cadena que representa ese número. Esto es útil cuando se necesita convertir un valor numérico en una cadena para poder manipularlo, mostrarlo en una interfaz de usuario o realizar operaciones específicas con cadenas.

<script>
const numero = 42;
const cadena = numero.toString();

console.log(cadena); // "42"
console.log(typeof cadena); // "string"
</script>

Se utiliza en casos donde se necesita trabajar con el valor numérico como una cadena o cuando se desea mostrar el número en una interfaz de usuario.

El método toString() también puede aceptar un parámetro opcional que especifica la base numérica en la que se desea representar el número. Por defecto, el método utiliza la base decimal (10), pero se puede utilizar cualquier base entre 2 y 36.

<script>
const numero = 42;
const binario = numero.toString(2); // Representación binaria

console.log(binario); // "101010"
</script>

## Las funciones de flecha
También conocidas como arrow functions en JavaScript, son una nueva forma de definir funciones en el lenguaje. Proporcionan una sintaxis más concisa y simplificada para crear funciones.
Una de las características distintivas de las arrow functions es que no tienen su propio valor this, lo cual significa que heredan el valor this del ámbito en el que se encuentran. Esto evita problemas comunes con el uso de this en las funciones tradicionales.

Además, las arrow functions tienen una sintaxis más compacta, lo que las hace ideales para funciones simples y expresiones más cortas.

## Paso por valor:

Cuando se pasa un valor por valor, se crea una copia independiente del valor original. Los cambios realizados en la copia no afectan al valor original.
Esto ocurre cuando se pasan tipos primitivos como números, cadenas, booleanos, null y undefined.
Al modificar una variable que contiene un valor primitivo dentro de una función, la modificación solo afecta a la copia local dentro de la función y no tiene impacto en la variable original fuera de la función.

## Paso por referencia:

Cuando se pasa un valor por referencia, se pasa una referencia a la ubicación en memoria del valor original. No se crea una copia independiente.
Esto ocurre cuando se pasan objetos (incluidos arrays y funciones) en JavaScript.
Al modificar un objeto dentro de una función, los cambios se reflejan tanto en la variable original como en cualquier otra referencia al mismo objeto.
Debido a que se pasa la referencia, es posible modificar las propiedades del objeto o reasignar el objeto completo dentro de la función y esos cambios serán visibles fuera de la función.