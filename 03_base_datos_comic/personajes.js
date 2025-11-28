//"configuracion ESmodules 2611"

import { comic } from "./bd";

const params = new URLSearchParams(window.location.search)
const id = parseInt( params.get("id"))


const miPersonaje = comic.personajes.find (p => p.id === id )

console.log("El id del personaje es", miPersonaje)