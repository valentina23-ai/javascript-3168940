const info = document.querySelector(".info")

console.log(infoComic)

info.innerHTML = `

<
<h3>${comic.nombreComic}</h3>
<p>${comic.sipnosis}</p>
<p>Género:${comic.genero}</p>
<a>${comic.verAhora}</a>

`