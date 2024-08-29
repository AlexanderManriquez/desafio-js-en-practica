function sumar () {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    document.getElementById("resultado").textContent = valor1 + valor2;
}

function restar () {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    let resultado = valor1 - valor2;
    if (resultado >= 0) {
        document.getElementById("resultado").textContent = resultado;
    } else {
        document.getElementById("resultado").textContent = 0;
    }
}