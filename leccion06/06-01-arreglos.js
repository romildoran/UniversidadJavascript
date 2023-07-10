//arreglos

//sintaxis clasica
let autos = new Array('BMW', 'VOLVO', 'RENAULT', 'AUDI');

//sintaxis nueva, actualmente no se recomienda usar la sintaxis clasica
const auto = ['BMW', 'VOLVO', 'RENAULT', 'AUDI'];
console.log(auto);

console.log(auto[0]);
console.log(auto[2]);

for (let i = 0; i < auto.length; i++) {
    console.log(i + ': ' + auto[i]);
}

auto[1] = 'CITROEN';
console.log(auto[1]);

auto.push('VOLVO');
console.log(auto);

console.log(auto.length);
auto[auto.length]='FERRARI';
console.log(auto);

//La siguiente sintaxis tiene un error de logica ya que se esta dejando un espacio vacio malgastando memoria
auto[7]='PEUGEOT';
console.log(auto);

console.log(typeof auto);
//para averiguar si la variable con la que estamos trabajando es un arreglo o no usamos la siguiente sintaxis:
console.log(Array.isArray(auto));
//esta linea de codigo no arroja valor 'true' lo que nos dice que es un arreglo

//Esta linea de codigo nos dice si el objeto es una instancia de cierto tipo
console.log(auto instanceof Array);