let miNumero = '17';

console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);

console.log(edad);
console.log(typeof edad);

if (isNaN(edad)) {
    console.log('No es un numero');
} else {
    if (edad >=18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar");
    }
}

resultado = (edad >= 18) ? 'Puede votar' : 'No puede votar';
    console.log(resultado);