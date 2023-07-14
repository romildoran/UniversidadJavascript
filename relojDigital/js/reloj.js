const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}: ${min}: ${sec}`;

    const meses = ['Ene', 'Feb', 'Mar', 'May', 'Junio', 'Julio', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora = (hora) => {
    if (hora < 10) {
        hora = '0' + hora;
    }
    return hora;
}
setInterval(mostrarReloj, 1000);