'use strict'

//uso de try catch finally
try {
    let x=10;
    //miFuncion();
    throw 'Mi error';
}
catch(error){
    console.log(error);
}
finally{
    console.log('termina la revision de errores');
}

console.log('Continuamos...');

//
//
let resultado = -10;

try{
    //x=10;
if (isNaN(resultado)) throw 'No es un numero';
else if (resultado === ' ') throw 'Es una cadena vacia';
else if (resultado >= 0) throw 'Valor positivo';
else if (resultado <= 0) throw 'Valor negativo'
}
catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}
finally{
    console.log('Termina la revision de errores');
}