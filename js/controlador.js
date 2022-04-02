import { pintarTienda } from "./llenadoTienda.js";
pintarTienda()
import{ampliarInformacion} from "./ampliarinfo.js";

import{pintarCarrito} from "./pintarCarrito.js"
pintarCarrito()

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

    //capturar cantidad del producto/solo se aplica para sacar informacion de los formularios
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


    })
    
    pintarCarrito(suma);

    let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))
    
   
})

let limpiarcarro= document.getElementById("limpiar")
limpiarcarro.addEventListener("click",function(event){
    carrito=[]
    let capsula= document.getElementById("capsula")
    capsula.textContent=0
    capsula.classList.add("invisible")
})

//abrircarrito
let abrircarrito=document.getElementById("abrirCarrito")
abrircarrito.addEventListener("click",function(event){

    let contenedor=document.getElementById("contenedorventa")
    

    let modalventa = new bootstrap.Modal(document.getElementById('abrircarrito'))

    //borrar el contenino html de una seccion

    contenedor.innerHTML=""

    //recorrer el carrito para pintar los productos en la factura

   

    carrito.forEach(function(producto){

        //traversing
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("cold-12","col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12","col-md-8")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=producto.foto

        //padres e hijos  
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        contenedor.appendChild(fila)
        
    })


        modalventa.show()
 
})