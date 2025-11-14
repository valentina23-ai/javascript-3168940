const infoComic = document.querySelector(".info-comic")

console.log(infoComic)

infoComic.innerHTML = `

<small>${Comic.year}</small>
<h1>${comic.nombreComic}</h1>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>

`