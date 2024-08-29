
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    // Referencias a los elementos del formulario
    const nombreInput = document.getElementById('nombre');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');

    // Referencias a los elementos de error
    const errorNombre = document.querySelector('.errorNombre');
    const errorAsunto = document.querySelector('.errorAsunto');
    const errorMensaje = document.querySelector('.errorMensaje');
    const resultado = document.querySelector('.resultado');

    // Expresión regular para permitir solo letras y espacios (\s)
    const regex = /^[a-zA-Z\s]+$/;

    // Variable para controlar si hay errores
    let isError = false;

    // Validación del campo "Nombre completo"
    if (regex.test(nombreInput.value)) {
        errorNombre.textContent = '';
    } else {
        errorNombre.textContent = 'El nombre es requerido';
        isError = true;
    }
    
    // Validación del campo "Asunto"
    if (regex.test(asuntoInput.value)) {
        errorAsunto.textContent = '';         
    } else {
        errorAsunto.textContent = 'El apellido es requerido';
        isError = true;
    }

    // Validación del campo "Mensaje"
    if (regex.test(mensajeInput.value)) {
        errorMensaje.textContent = '';
    } else {
        errorMensaje.textContent = 'El mensaje es requerido';
        isError = true;
    }

    // Si no hay errores, mostrar mensaje de éxito
    if (isError) {
        resultado.textContent = '';
    } else {
        resultado.textContent = 'Mensaje enviado con éxito!!!';
        resultado.style.color = 'green';
        // Limpiar los campos
        nombreInput.value = '';
        asuntoInput.value = '';
        mensajeInput.value = '';
    }
});
