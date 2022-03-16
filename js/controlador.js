import { pintarTienda } from "./llenadoTienda.js";
pintarTienda()
import{ampliarInformacion} from "./ampliarinfo.js"

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    ampliarInformacion(event)
    modalinfoproducto.show()
})