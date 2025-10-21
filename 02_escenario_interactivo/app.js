const escenario = document.querySelector('.escenario');
const personaje = document.querySelector('.personaje');
const flores = document.querySelectorAll('.flor');
const setas = document.querySelectorAll('.seta');
const vidasDisplay = document.querySelector('.vidas');
const puntosDisplay = document.querySelector('.puntos');
const animables = document.querySelectorAll('.animable');
const botonesMagia = document.querySelectorAll('.boton-magia');
const mensajeMagico = document.getElementById('mensajeMagico');

let counter = 0

botonesMagia.forEach(boton => {
  boton.addEventListener('click', () => {
    const frase = boton.getAttribute('data-frase');
    mensajeMagico.textContent = frase;
    mensajeMagico.style.display = 'block';

    // Cerrar al hacer clic fuera
    escenario.addEventListener('click', ocultarMensaje);
  });
});

function ocultarMensaje(e) {
  if (!e.target.classList.contains('boton-magia')) {
    mensajeMagico.style.display = 'none';
    escenario.removeEventListener('click', ocultarMensaje);
  }
}

let vidas = 3;
let puntos = 0;
let x = 200;
let y = 200;


// 🌸 Coloca flores y setas en posiciones aleatorias
function posicionAleatoria(elementos) {
  elementos.forEach(e => {
    e.style.left = Math.random() * 700 + "px";
    e.style.top = Math.random() * 450 + "px";
  });
}

posicionAleatoria(flores);
posicionAleatoria(setas);

// 🚶 Movimiento del personaje con teclado
document.addEventListener('keydown', e => {
  const step = 20;
  if (e.key === 'ArrowUp') y -= step;
  if (e.key === 'ArrowDown') y += step;
  if (e.key === 'ArrowLeft') x -= step;
  if (e.key === 'ArrowRight') x += step;

  x = Math.max(0, Math.min(700, x));
  y = Math.max(0, Math.min(450, y));

  personaje.style.left = x + "px";
  personaje.style.top = y + "px";

  detectarColisiones();
});


function detectarColisiones() {
  const pjRect = personaje.getBoundingClientRect();

  flores.forEach(flor => {
    if (flor.style.display !== "none" && colision(pjRect, flor.getBoundingClientRect())) {
      flor.style.display = "none";
      puntos += 50;
      puntosDisplay.textContent = `Puntos: ${puntos}`;
    }
  });

  setas.forEach(seta => {
    if (colision(pjRect, seta.getBoundingClientRect())) {
      perderVida();
    }
  });
}

function colision(r1, r2) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

// ❤️ Manejo de vidas
function perderVida() {
  vidas--;
  vidasDisplay.textContent = "❤️".repeat(vidas);
  if (vidas <= 0) {
    alert(`💀 ¡Perdiste todas tus vidas! Puntuación final: ${puntos}`);
    window.location.reload();
  }
}

// ✨ Elementos animables arrastrables
animables.forEach(el => {
  el.addEventListener('mousedown', e => {
    let offsetX = e.offsetX;
    let offsetY = e.offsetY;

    function mover(ev) {
      el.style.left = (ev.pageX - escenario.offsetLeft - offsetX) + "px";
      el.style.top = (ev.pageY - escenario.offsetTop - offsetY) + "px";
    }

    function soltar() {
      document.removeEventListener('mousemove', mover);
      document.removeEventListener('mouseup', soltar);
    }

    document.addEventListener('mousemove', mover);
    document.addEventListener('mouseup', soltar);
  });
});


flores.forEach(flores => {

    flores.addEventListener("click", ()=> {
    item.style.filter = "grayscale(1)";
    flores.classList.add("saltar");
    counter++;
    escenario.textContent = counter
});

})

botonesMagia.forEach(boton => {
  boton.addEventListener('click', () => {
    const frase = boton.getAttribute('data-frase');
    mensajeMagico.textContent = frase;
    mensajeMagico.style.display = 'block';

    // Cerrar al hacer clic fuera
    escenario.addEventListener('click', ocultarMensaje);
  });
});

function ocultarMensaje(e) {
  if (!e.target.classList.contains('boton-magia')) {
    mensajeMagico.style.display = 'none';
    escenario.removeEventListener('click', ocultarMensaje);
  }
}