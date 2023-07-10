//let contador = 0;

/* while (contador < 3){
    console.log(contador);
    contador++;
} */

/* do{
    console.log(contador);
    contador++;
}while (contador < 3);
console.log("Fin ciclo do while"); */

//cliclo for

/* for (let contador = 0; contador < 3; contador++){
    console.log(contador);
}
console.log('Fin ciclo "for".');
 */

//ciclo for con continue
for (let contador = 0; contador <= 10; contador++){
    if (contador % 2 !== 0){
        console.log(contador );
        continue; //ir a la siguiente iteracion despues de cumplirce la condicion
    }else{
        console.log(contador);
    }
}
console.log('Fin ciclo "for" con la plabra "continue".');