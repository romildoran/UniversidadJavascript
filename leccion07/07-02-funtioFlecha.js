//Las funciones de flecha, también conocidas como arrow functions

const sumaFuncionFlecha = (a, b) => a + b;
resultado = sumaFuncionFlecha(3, 5);
console.log(resultado);


//

let _resultado = sumarTodo(5, 4, 13, 10, 9,);
console.log(_resultado);

function sumarTodo() {
    let suma = 0;

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i]; //suma=suma + arguments[i]
    }

    return suma;
}

