
function iniciarSesion() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contrasena);
}

document.getElementById("login-button").addEventListener("click", iniciarSesion);
