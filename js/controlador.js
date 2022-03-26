import { pintarTienda } from "./llenadoTienda.js";
pintarTienda()
import{ampliarInformacion} from "./ampliarinfo.js"

//objeto vacio
let producto={}

let contenedorTienda=document.getElementById("fila")
contenedorTienda.addEventListener("click",function(event){

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    producto=ampliarInformacion(event)
    if(event.target.classList.contains("btn")){
        modalinfoproducto.show()
    }
    
})
//accion de añadir al carrito

//carrito (arreglo de productos/arreglo de objetos)

let carrito=[]

let boton=document.getElementById("addalcarrito")
boton.addEventListener("click",function(event){

    //capturar cantidad del producto
    let cantidad=document.getElementById("cantidadproducto").value    
    console.log(cantidad)

    //agregar la cantidad al objeto producto

    producto.cantidad=cantidad

    //agregar el producto al carrito 

    carrito.push(producto)

    //calcula la sumatoria de cantidad

    let suma=0

    carrito.forEach(function(producto){

        suma=suma+Number(producto.cantidad)

    });
    
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma

    capsula.classList.remove("invisible")
})

let limpiarcarro= document.getElementById("limpiar")
limpiarcarro.addEventListener("click",function(event){
    carrito=[]
    let capsula= document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")
})