// Función para redirigir al formulario de inicio de sesión
function irAFormularioInicioSesion() {
    window.location.href = "login.html"; // Cambia "login.html" por la URL de tu formulario de inicio de sesión
}

// Agregar manejador de evento al botón "Ir al formulario de inicio de sesión"
document.getElementById("irAlFormulario").addEventListener("click", irAFormularioInicioSesion);
