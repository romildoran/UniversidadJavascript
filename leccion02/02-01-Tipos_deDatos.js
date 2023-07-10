//Clase 5

//concatenar cadenas
let _nombre = 'Juan';
let _apellido = "Perez";
let nombreCompleto = _nombre + ' ' + _apellido;
console.log(nombreCompleto);

let nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2);

let _x = _nombre + 2 + 4;
console.log(_x);

let $x = _nombre + (2+4);
console.log($x);

var X = 2+4 + _nombre;
console.log(X);

//JavaScript se ejecuta en orden de izquierda a derecha

/* 
sintaxis para declarar variables:

# let: variables limitadas al bloque

# var: variables de alcance gobal

# const: variables con valor unico

## lista resumida de buenas prácticas para nombrar variables en JavaScript:

Utiliza nombres descriptivos: Elige nombres que reflejen claramente el propósito o contenido de la variable.

Utiliza camel case: Es común utilizar la convención de camel case para nombres de variables, donde la primera palabra comienza con minúscula y las palabras subsiguientes comienzan con mayúscula, por ejemplo: miVariable, nombreCompleto.

Evita nombres genéricos o ambiguos: Evita utilizar nombres como "data", "value" o "temp", ya que no proporcionan suficiente información sobre el propósito de la variable.

Utiliza nombres concisos pero significativos: Busca un equilibrio entre nombres demasiado largos y nombres demasiado cortos. Los nombres deben ser lo suficientemente cortos como para ser legibles y fáciles de entender, pero lo suficientemente largos como para ser descriptivos.

Evita caracteres especiales: En general, evita el uso de caracteres especiales como guiones bajos (_) o símbolos en los nombres de variables, a menos que sean necesarios.

Utiliza nombres en inglés: Aunque no es obligatorio, es una práctica común utilizar nombres en inglés para variables, ya que es el estándar en la mayoría de los entornos de desarrollo y promueve la consistencia en el código.

Evita nombres reservados: No utilices nombres que sean palabras reservadas del lenguaje JavaScript, como "function", "if", "true", etc.

Sé coherente: Mantén la coherencia en la forma en que nombras tus variables a lo largo de tu código y en tu equipo de desarrollo. Esto facilita la lectura y comprensión del código.

*/

