const Numeropersonajes = document.querySelector('.top');

Numeropersonajes.innerHTML = '';

comic.personajes.forEach(char => {

const section = document.createElement('section');
section.classList.add('galery')
section.innerHTML `
<img src="${char.Imagen}"
<h3>${char.Nombre}</h3>
<p>${char.Descripcion}</p>
`;
Numeropersonajes.appendChild(div);

});