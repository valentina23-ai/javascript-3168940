
const focas = document.getElementById("focas");
const blanco_y_negro = document.getElementById("blanco_y_negro");
const desenfocar = document.getElementById("desenfocar");
const zoom_y_rotar = document.getElementById("zoom_y_rotar");

let currentFilter = null;

function resetImage() {
  focas.style.filter = '';
  focas.style.transform = '';
  currentFilter = null;
}

blanco_y_negro.addEventListener('click', () => {
  if (currentFilter === 'bn') {
    resetImage();
  } else {
    resetImage();
    focas.style.filter = 'grayscale(100%)';
    currentFilter = 'bn';
  }
});

desenfocar.addEventListener('click', () => {
  if (currentFilter === 'blur') {
    resetImage();
  } else {
    resetImage();
    focas.style.filter = 'blur(4px)';
    currentFilter = 'blur';
  }
});

zoom_y_rotar.addEventListener('click', () => {
  if (currentFilter === 'zoomRotate') {
    resetImage();
  } else {
    resetImage();
    focas.style.transform = 'scale(1.2) rotate(15deg)';
    currentFilter = 'zoomRotate';
  }
});