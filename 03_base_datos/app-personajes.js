import { comic } from "./bd.js";

const contenedor = document.getElementById("lista-personajes");

comic.personajes.forEach(p => {
  contenedor.innerHTML += `
    <div class="card">
        <img src="${p.img}">
        <h3>${p.nombre}</h3>
        <a href="ver-personaje.html?id=${p.id}">Ver más</a>
    </div>
  `;
});
