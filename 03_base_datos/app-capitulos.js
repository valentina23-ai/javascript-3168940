import {comic} from "./bd.js";
lista.innerHTML=comic.capitulos.map(c=>`
<a href="ver-capitulo.html?id=${c.id}" class="item">
  <img src="${c.img}"><h3>${c.titulo}</h3>
</a>`).join("");
