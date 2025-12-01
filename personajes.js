import { comic } from "./bd.jd";
const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id"))

const miPersonaje = comic.personajes.find(p => p.idd === id)


//console.log("El personaje encontrado es:", miPersonaje);

const containerPersonaje = document.querySelector('.top')
console.log(containerPersonaje)
containerPersonaje.innerHTML =
`

    <section class="top"></section>
    <div class="container"></div>     
    <h2>Personajes</h2>
  
    <div class=" galery"></div>
    <div class="card">
      
      <img src="./img/shaki.jpg" alt="">
     
      <h3>Isabel_shakira</h3>
      <p>Es una niña responsable y apacionada por la musica y la danza</p>

        <div class="card">
          
      <img src="./img/lobo.webp" alt="">
     
      <h3>Lobo</h3>
      <p>Es sabio, Emite confianza y un buen guia espiritual</p>

        <div class="card">
         
      <img src="./img/grag.jpg" alt="">
     
      <h3>Oscuridad_Dragón</h3>
      <p>Es una amenaza y emite la perdida de alegria</p>


    </div>
    </section>

    `