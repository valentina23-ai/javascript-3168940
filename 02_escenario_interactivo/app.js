const escenarios = document.querySelectorAll('.escenario');
const flechaIzq = document.querySelector('.flecha-izq');
const flechaDer = document.querySelector('.flecha-der');
const mensajeMagico = document.getElementById('mensajeMagico');
const barraMagica = document.getElementById('barraMagica');

let escenarioActual = 0;
let x = 200, y = 200;
let vidas = 3;
let puntos = 0;

// Frases únicas por escenario
const frasesPorEscenario = [
  [
    { img: "casita.png", texto: "La casita de las hadas guarda los sueños más dulces 🏡" },
    { img: "hoja.png", texto: "Las hojas del bosque murmuran secretos mágicos 🍃" },
    { img: "luz.png", texto: "Las luciérnagas iluminan los caminos del corazón ✨" },
    { img: "luna.png", texto: "La luna guía a las hadas bajo su brillo plateado 🌙" }
  ],
  [
    { img: "concha.png", texto: "Las sirenas cantan cuando las olas acarician la luna 🌊" },
    { img: "perla.png", texto: "Cada perla guarda un deseo cumplido 🐚" },
    { img: "estrella1.png", texto: "Las estrellas de mar son joyas del océano 🌟" },
    { img: "cofre.png", texto: "Los cofres del mar esconden tesoros de amor 💖" }
  ],
  [
    { img: "estrella4.png", texto: "Las estrellas doradas conceden los sueños más puros ✨" },
    { img: "estrella2.png", texto: "Un cometa es una promesa que cruza el cielo 💫" },
    { img: "nube.png", texto: "Las nubes guardan risas de ángeles ☁️" },
    { img: "luz2.png", texto: "El brillo del cielo recuerda el poder de la esperanza 🌠" }
  ]
];

function mostrarEscenario(index) {
  escenarios.forEach(e => e.classList.remove('activo'));
  escenarios[index].classList.add('activo');
  actualizarBarraMagica(index);
}

function actualizarBarraMagica(index) {
  barraMagica.innerHTML = "";
  frasesPorEscenario[index].forEach(obj => {
    const img = document.createElement('img');
    img.src = obj.img;
    img.classList.add('boton-magia');
    img.setAttribute('data-frase', obj.texto);
    barraMagica.appendChild(img);
  });
  activarBotonesMagia();
}

function activarBotonesMagia() {
  const botones = document.querySelectorAll('.boton-magia');
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      mensajeMagico.textContent = boton.getAttribute('data-frase');
      mensajeMagico.style.display = 'block';
      escenarios[escenarioActual].addEventListener('click', ocultarMensaje);
    });
  });
}

function ocultarMensaje(e) {
  if (!e.target.classList.contains('boton-magia')) {
    mensajeMagico.style.display = 'none';
    escenarios[escenarioActual].removeEventListener('click', ocultarMensaje);
  }
}

function moverPersonaje(e) {
  const escenario = escenarios[escenarioActual];
  const personaje = escenario.querySelector('.personaje');
  const atrapar = escenario.querySelectorAll('.atrapar');
  const enemigo = escenario.querySelectorAll('.enemigo');
  const vidasDisplay = escenario.querySelector('.vidas');
  const puntosDisplay = escenario.querySelector('.puntos');
  const step = 20;

  if (e.key === 'ArrowUp') y -= step;
  if (e.key === 'ArrowDown') y += step;
  if (e.key === 'ArrowLeft') x -= step;
  if (e.key === 'ArrowRight') x += step;

  x = Math.max(0, Math.min(700, x));
  y = Math.max(0, Math.min(450, y));

  personaje.style.left = x + "px";
  personaje.style.top = y + "px";

  detectarColisiones(personaje,atrapar, enemigo, vidasDisplay, puntosDisplay);
}

function detectarColisiones(personaje, atrapar, enemigo, vidasDisplay, puntosDisplay) {
  const pjRect = personaje.getBoundingClientRect();

  atrapar.forEach(atrapar=> {
    if (atrapar.style.display !== "none" && colision(pjRect, atrapar.getBoundingClientRect())) {
      atrapar.style.display = "none";
      puntos += 50;
      puntosDisplay.textContent = `Puntos: ${puntos}`;
    }
  });

  enemigo.forEach( enemigo=> {
    if (colision(pjRect, enemigo.getBoundingClientRect())) {
      perderVida(vidasDisplay);
    }
  });
}

function colision(r1, r2) {
  return !(r2.left > r1.right ||
           r2.right < r1.left ||
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}

function perderVida(vidasDisplay) {
  vidas--;
  vidasDisplay.textContent = "❤️".repeat(vidas);
  if (vidas <= 0) {
    alert(`💀 ¡Perdiste todas tus vidas! Puntuación final: ${puntos}`);
    window.location.reload();
  }
}

// Navegación entre escenarios
flechaIzq.addEventListener('click', () => {
  escenarioActual = (escenarioActual - 1 + escenarios.length) % escenarios.length;
  mostrarEscenario(escenarioActual);
});
flechaDer.addEventListener('click', () => {
  escenarioActual = (escenarioActual + 1) % escenarios.length;
  mostrarEscenario(escenarioActual);
});


document.addEventListener('keydown', moverPersonaje);

// Inicialización
mostrarEscenario(0);


function dispersarElementos() {
  escenarios.forEach(escenario => {
    const elementos = escenario.querySelectorAll('.atrapar, .enemigo, .animable');
    elementos.forEach(el => {
      const randomX = Math.random() * 650; // dentro del ancho
      const randomY = Math.random() * 400; // dentro del alto
      el.style.left = `${randomX}px`;
      el.style.top = `${randomY}px`;
    });
  });
}

function animarElementos() {
  escenarios.forEach(escenario => {
    const animables = escenario.querySelectorAll('.animable');
    animables.forEach((el, i) => {
      const tipo = i % 3; 
      if (tipo === 0) flotarSuave(el);
      if (tipo === 1) girarSuave(el);
      if (tipo === 2) moverLento(el);
    });
  });
}

function flotarSuave(el) {
  let dir = 1;
  setInterval(() => {
    const top = parseFloat(el.style.top) || 0;
    el.style.top = top + dir * 1 + "px";
    if (top < 50 || top > 420) dir *= -1;
  }, 80);
}

function girarSuave(el) {
  let rot = 0;
  setInterval(() => {
    rot += 2;
    el.style.transform = `rotate(${rot}deg)`;
  }, 100);
}

function moverLento(el) {
  let dirX = 1, dirY = 1;
  setInterval(() => {
    let x = parseFloat(el.style.left) || 0;
    let y = parseFloat(el.style.top) || 0;
    x += dirX * 1.5;
    y += dirY * 1.5;
    if (x < 0 || x > 680) dirX *= -1;
    if (y < 0 || y > 430) dirY *= -1;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  }, 60);
}

// Ejecutar cuando inicia el juego
window.addEventListener("load", () => {
  dispersarElementos();
  animarElementos();
});
