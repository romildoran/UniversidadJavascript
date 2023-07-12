function miFuncion1() {
    console.log('Funcion 1');
}

function miFuncion2() {
    console.log('funcion 2');
}

miFuncion1();
miFuncion2();

//funcion de tipo callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function suma(op1, op2, funcionCallBack) {
    let res = op1 + op2;
    funcionCallBack(`Resultado: + ${res}`);
}

suma(5, 3, imprimir);

//Llamadas asincronas con uso de setTimeout
function miFuncionCallback() {
    console.log('Saludo asincrono despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000); //despues de 3 segundos

setTimeout(function () { console.log('Saludo asincrono 2') }, 4000);

setTimeout(() => {console.log('Saludo asincrono 3')}, 5000);

