const info = document.querySelector(".info")
const personajes = document.querySelector(".card-personajes")
console.log(infoComic)

console.log(infoComic)

infoComic.innerHTML = `

<small>${comic.year}</small>
<h3>${comic.nombreComic}</h3>
<a>${comic.verAhora}</a>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
`
console.log(comic.Personajes)

comic.Personajes.forEach(char => {
    const div = document.createElement("div")
    div.classList.add("personaje")
    div.innerHTML = `
        <img src="${char.imagen}" alt="">
        <p>${char.nombre}</p>
        <p>${char.descripcion}</p>
    `
    
    cardPersonajes.appendChild(div)
});
