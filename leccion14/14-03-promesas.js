let miPromesa = new Promise((resolve, reject) => {
    let expresion = true;
    if (expresion) {
        resolve('Resolvio correctamente');
    }
    else {
        reject('Se produjo un error');
    }
});

miPromesa.then(valor => console.log(valor), error => console.log(error));

miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));

let promesa = new Promise((resolver)=>{
    //console.log('Inicio de la promesa');
    setTimeout(()=> resolver('Saludos con Promesa y TimeOut'), 3000);
    //console.log('Fin de la promesa');
});
//promesa.then(valor => console.log(valor));

//Async: indica que una funcion regresa una promesa
async function miFuncionconPromesa(){
    return 'Saludos con promesa y Async';
}
//miFuncionconPromesa().then(valor => console.log(valor));

// ejemplo de Async con Await
async function miFuncionconPromesaYAwait(){
    let miPromesa = new Promise(resolve => {
        resolve('Promesa con await');
    });
    console.log(await miPromesa);
}

miFuncionconPromesaYAwait();

//uso de setTimeout combinado con Async y Await
async function funcionConPromesaAwaitTimeout(){
    console.log('Inicio de la funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver('Promesa con await y timeout'), 3000);
    });
    console.log(await miPromesa);
    console.log('Fin de la funcion');
}
funcionConPromesaAwaitTimeout();