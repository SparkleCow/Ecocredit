function buscar() {
    console.log('Llamada a filtrar');
    var inputTexto = quitarCaracteres(document.getElementById('input-busqueda').value.toLowerCase());
    var secciones = document.getElementsByClassName("seccion");

    for (var i = 0; i < secciones.length; i++) {
        var textoSeccion = quitarCaracteres(secciones[i].textContent.toLowerCase());
        if (textoSeccion.includes(inputTexto)) {
            secciones[i].style.display = "block";
        } else {
            secciones[i].style.display = "none";
        }
    }
}

function quitarCaracteres(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f.]/g, "");
}
