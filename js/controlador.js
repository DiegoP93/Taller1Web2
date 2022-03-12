/*let nombreUsuario="Juan Diego"
let estatura=1.71
let edad=18
let telefono="3154235625"
let esPaisa=false 

const APELLIDOS_USUARIO="Sanchez"

//console.log("Buenas tardes",nombreUsuario,"Su altura es:",estatura,"Su edad es:",edad)

/*console.log(`Buenas tardes ${nombreUsuario} ${APELLIDOS_USUARIO} su edad es: ${edad} su estatura es: ${estatura} su telefono es: ${telefono} Es Paisa? ${esPaisa}
`) //

let etiquetaTitulo=document.getElementById("titulo")
etiquetaTitulo.textContent="Crack"
etiquetaTitulo.classList.add("text-danger")
etiquetaTitulo.classList.add("text-center")


let etiquetaIcono=document.getElementById("icono")
etiquetaIcono.textContent="Pp93"

let etiquetaFotokratos=document.getElementById("fotokratos")
etiquetaFotokratos.src="img/fondokratos.jpg"*/

import { pintarTienda } from "./llenadoTienda.js";
pintarTienda()

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){
    console.log(event.target)
})