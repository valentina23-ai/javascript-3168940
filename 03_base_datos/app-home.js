import {comic} from "./bd.js";

let index=0;
const carrusel=document.getElementById("carrusel");

function render(){
    carrusel.innerHTML = comic.capitulos.map(c=>
      `<div class='slide'><img src="${c.img}"><h2>${c.titulo}</h2></div>`
    ).join("");
}
render();

setInterval(()=>{ index=(index+1)%comic.capitulos.length; 
 carrusel.style.transform=`translateX(-${index*100}%)`; },3000);
