const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

const colorSelect = document.getElementById("color");

colorSelect.addEventListener("change", () => {
    pintarCuadro(colorSelect.value);
});

function pintarCuadro(color) {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);

    const x = 50;
    const y = 50;
    const ancho = 150;
    const alto = 100;

    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
    ctx.strokeRect(x, y, ancho, alto);
}

pintarCuadro("#ff0000"); // Color inicial rojo