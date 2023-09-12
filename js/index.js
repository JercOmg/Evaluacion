
function cambiarContenido() {
    const texto = document.getElementById("texto");
    texto.innerHTML = "Nuevo contenido de texto (cambiado)";
}


function cambiarColorDePagina() {
    
    document.body.style.backgroundColor = "#f0f0f0"; 


    const texto = document.getElementById("texto");
    texto.style.color = "#333";   
}

document.getElementById("cambiarContenido").addEventListener("click", cambiarContenido);
document.getElementById("cambiarColor").addEventListener("click", cambiarColorDePagina);
