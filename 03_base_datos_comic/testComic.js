const info = document.querySelector(".info")
const personajes = document.querySelector(".card-personajes")
console.log(infoComic)

info.innerHTML = `

<h3>${comic.nombreComic}</h3>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
<a>${comic.verAhora}</a>

`
console.log(comic.personajes)

comic.Personajes.forEach(char => {
    console.log(char.nombre)
    document.body.innerHTML = `<img src="${char.imagen}" width="200">`
});

