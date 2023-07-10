## El bucle for...in
se utiliza para recorrer las propiedades de un objeto.

itera sobre cada propiedad enumerable del objeto y asigna el nombre de la propiedad a la variable especificada.Durante cada iteración, puedes acceder al valor de la propiedad utilizando la notación de corchetes (objeto[variable]).
El bucle for...in es especialmente útil cuando necesitas realizar una acción o realizar operaciones en cada una de las propiedades de un objeto, como imprimir las propiedades o realizar cálculos basados en ellas.

<Script>
const persona = {
  nombre: 'Juan',
  edad: 30,
  profesion: 'Programador'
};

for (let propiedad in persona) {
  console.log(propiedad + ': ' + persona[propiedad]);
}
</Script>

En este caso, el bucle for...in recorre todas las propiedades del objeto persona y muestra en la consola el nombre de la propiedad seguido de su valor.
Es importante tener en cuenta que el bucle for...in también recorre las propiedades heredadas del objeto a través de la cadena de prototipos. Para evitar esto, se pueden utilizar verificaciones adicionales, como hasOwnProperty(), para asegurarse de que solo se iteren las propiedades propias del objeto.

es importante tener en cuenta que Object.keys() devuelve solo las propiedades propias del objeto, mientras que for...in también recorre las propiedades heredadas a través de la cadena de prototipos.