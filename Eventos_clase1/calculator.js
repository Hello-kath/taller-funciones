function realizarOperacion() {
    const titulo = document.getElementById("titulo").value;
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operador = document.getElementById("operador").value;

    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                alert("Error: No se puede dividir por cero");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operador no válido");
            return;
    }

    document.getElementById("resultado").value = resultado;
}
