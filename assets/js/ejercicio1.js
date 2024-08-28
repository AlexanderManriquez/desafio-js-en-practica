document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de inmediato

    // Referencias a los elementos del formulario
    const nombreInput = document.getElementById('nombre');
    const asuntoInput = document.getElementById('asunto');
    const mensajeInput = document.getElementById('mensaje');

    // Referencias a los elementos de error
    const errorNombre = document.querySelector('.errorNombre');
    const errorAsunto = document.querySelector('.errorAsunto');
    const errorMensaje = document.querySelector('.errorMensaje');
    const resultado = document.querySelector('.resultado');

    // Expresión regular para solo letras y espacios
    const regex = /^[a-zA-Z\s]+$/;

    // Variable para controlar si hay errores
    let isError = false;

    // Validación del campo "Nombre completo"
    if (regex.test(nombreInput.value)) {
        errorNombre.textContent = '';
        nombreInput.style.borderColor = '';
    } else {
        errorNombre.textContent = 'Por favor, ingrese un nombre válido (solo letras y espacios).';
        nombreInput.style.borderColor = 'red';
        isError = true;
    }
    
    // Validación del campo "Asunto"
    if (regex.test(asuntoInput.value)) {
        errorAsunto.textContent = '';
        asuntoInput.style.borderColor = '';           
    } else {
        errorAsunto.textContent = 'Por favor, ingrese un asunto válido (solo letras y espacios).';
        asuntoInput.style.borderColor = 'red';
        isError = true;
    }

    // Validación del campo "Mensaje"
    if (regex.test(mensajeInput.value)) {
        errorMensaje.textContent = '';
        mensajeInput.style.borderColor = '';
    } else {
        errorMensaje.textContent = 'Por favor, ingrese un mensaje válido (solo letras y espacios).';
        mensajeInput.style.borderColor = 'red';
        isError = true;
    }

    // Si no hay errores, mostrar mensaje de éxito
    if (!isError) {
        resultado.textContent = '¡Mensaje enviado con éxito!';
        resultado.style.color = 'green';

        // Limpiar los campos
        nombreInput.value = '';
        asuntoInput.value = '';
        mensajeInput.value = '';
    } else {
        resultado.textContent = '';
    }
});
