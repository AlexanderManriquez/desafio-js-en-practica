//Elementos que capturan el evento click
let clickRojo = document.getElementById("btn-1");
clickRojo.addEventListener("click", cambiarColor);

let clickNaranjo = document.getElementById("btn-2");
clickNaranjo.addEventListener("click", cambiarColor);

let clickAmarillo = document.getElementById("btn-3");
clickAmarillo.addEventListener("click", cambiarColor);

let clickVerde = document.getElementById("btn-4");
clickVerde.addEventListener("click", cambiarColor);

let clickAguamarina = document.getElementById("btn-5");
clickAguamarina.addEventListener("click", cambiarColor);

let clickRosado = document.getElementById("btn-6");
clickRosado.addEventListener("click", cambiarColor);


//Función para cambiar el color, según el botón que clickee el usuario
function cambiarColor(event) {
    if (event.target == document.getElementById("btn-1")) {
        document.getElementById("caja").style.backgroundColor = "#e53e3e";
    } else if (event.target == document.getElementById("btn-2")) {
        document.getElementById("caja").style.backgroundColor = "#dd6b20";
    } else if (event.target == document.getElementById("btn-3")) {
        document.getElementById("caja").style.backgroundColor = "#faf089";
    } else if (event.target == document.getElementById("btn-4")) {
        document.getElementById("caja").style.backgroundColor = "#48bb78";
    } else if (event.target == document.getElementById("btn-5")) {
        document.getElementById("caja").style.backgroundColor = "#81e6d9";
    } else if (event.target == document.getElementById("btn-6")) {
        document.getElementById("caja").style.backgroundColor = "#d53f8c";
    } 
}
