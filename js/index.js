
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

const images = document.querySelectorAll('.carousel img');
const arrows = document.querySelectorAll('.arrow');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach(image => image.classList.remove('active'));
  images[index].classList.add('active');
}

function showNextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage(currentImageIndex);
}

function showPreviousImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage(currentImageIndex);
}

arrows.forEach(arrow => {
  arrow.addEventListener('click', event => {
    if (event.target.classList.contains('arrow-left')) {
      showPreviousImage();
    } else if (event.target.classList.contains('arrow-right')) {
      showNextImage();
    }
  });
});