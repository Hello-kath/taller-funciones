function agregarNombre() {
    const nombre = document.getElementById("nombre").value;

    if (nombre === "") {
        alert("Por favor, ingresa un nombre");
        return;
    }

    const listaNombres = document.getElementById("listaNombres");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaNombres.appendChild(nuevoElemento);

    document.getElementById("nombre").value = "";
}
