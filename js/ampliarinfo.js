export function ampliarInformacion(event){

    let producto={}
    if(event.target.classList.contains("btn")){
        producto={
            foto:event.target.parentElement.querySelector("img").src
            
        }
        console.log(producto)

        let foto=document.getElementById("fotoinfo")
        foto.src=producto.foto
        let nombre=document.getElementById("nombreinfo")
        nombre.textContent=producto.content
    }

}