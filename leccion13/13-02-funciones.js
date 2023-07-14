function suma(pNumero, sNumero) {
    const resultado = pNumero + sNumero;
    
    if (resultado >= 100 && resultado <= 130) {
        console.log('operación realizada');
    } else {
        console.log("cantidad excedida");
    }

    return resultado;

}

console.log(suma(14, 77)); 