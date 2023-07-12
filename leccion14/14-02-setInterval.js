let Reloj = ()  => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(Reloj, 1000);//se va a llamar cada segundo

