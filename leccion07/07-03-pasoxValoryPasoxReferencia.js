// paso por valor

let x = 10;

function cambiarValor(a) {
    a = 20;
    return a;
}

cambiarValor(x);
console.log(x);

// paso por referencia
const persona = {
    name: "Juan",
    lastname: "Perez"
}

function cambiarValorObjeto(p1){
    p1.name = "Carlos";
    p1.lastname = "Lara";
}

cambiarValorObjeto(persona);
console.log(persona);