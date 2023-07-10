//el uso de etiquetas no es recomendable

inicio:
for (let contador = 0; contador <= 10; contador++){
    if (contador % 2 !== 0){
        console.log(contador );
        continue inicio; //ir a la siguiente iteracion despues de cumplirce la condicion
    }else{
        console.log(contador);
    }
}
console.log('Fin ciclo "for" con la plabra "continue".');

