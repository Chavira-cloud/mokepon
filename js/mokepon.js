let ataqueJugador
let ataqueEnemigo   
let vidasJugador=3
let vidasEnemigo=3   

/* 

document es para selecionar HTML.
getElementById es para seleccionar una etiqueta con un id.
addEventListener es para agregar eventos, adjunto a eso el nombre de la funcion.
innerHTML para insertar código HTML.
createElement para crear una etiqueta de HTML.
appendChild es para ingresar código en una etiqueta HTML padre

*/
function iniciarJuego (){
    let sectionSeleccionarAtaque= document.getElementById('ataques')
    sectionSeleccionarAtaque.style.display='none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador= document.getElementById('btn-mascota') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    let botonFuego = document.getElementById('btn-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('btn-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('btn-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

    let botonReiniciar= document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
  
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota= document.getElementById('mascotas')
    sectionSeleccionarMascota.style.display='none'
    
    let sectionSeleccionarAtaque= document.getElementById('ataques')
    sectionSeleccionarAtaque.style.display='flex    '

    let hipodoge = document.getElementById('hipodoge')
    let capipepo = document.getElementById('capipepo')
    let ratigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(hipodoge.checked){
        spanMascotaJugador.innerHTML ="Hipodoge"
    } else if (capipepo.checked){
        spanMascotaJugador.innerHTML ="Capipepo"
    }else if (ratigueya.checked){
        spanMascotaJugador.innerHTML ="Ratigueya"
    }else{
        alert("NO SELECCIONASTE UNA MASCOTA")
    }

    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spandMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatorio == 1){
        spandMascotaEnemigo.innerHTML ="Hipodoge"
    }else if(mascotaAleatorio == 2){
        spandMascotaEnemigo.innerHTML ="Capipepo"
    }else if(mascotaAleatorio == 3){
        spandMascotaEnemigo.innerHTML ="Ratigueya"
    }

}

function ataqueFuego(){
    ataqueJugador ='FUEGO'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo() 
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatoria = aleatorio(1,3)

    if(ataqueAleatoria == 1){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatoria == 2){
        ataqueEnemigo= 'Agua'
    }else{
        ataqueEnemigo= 'Tierra'
    }

    combate()
}

function combate(){
    let spanVidasJugador= document.getElementById('vidas-jugador')
    let spanVidasEnemigo= document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("EMPATE")
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA')||(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || 
    (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo   
    } else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador   
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
       crearMensajeFinal("FELICITACIONES! :) ") //Ganamos
    }else if(vidasJugador == 0){
        crearMensajeFinal("Lo siento, Perdiste amigo :(")   //Perdimos
    }

}

function crearMensaje(resultado){
    let seccionMensaje= document.getElementById('resultado')
    let ataquesDelJugador= document.getElementById('ataquesDelJugador')
    let ataquesDelEnemigo= document.getElementById('ataquesDelEnemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo,innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    let seccionMensaje= document.getElementById('resultado')
    let botonReiniciar= document.getElementById('reiniciar')
    botonReiniciar.style.display="block"
    
    seccionMensaje.innerHTML= resultadoFinal
    
    
    let botonFuego = document.getElementById('btn-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('btn-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('btn-tierra')
    botonTierra.disabled = true

}

function reiniciarJuego(){
    location.reload()
}
    
function aleatorio(min, max){
    return Math.floor(Math.random()*(max- min +1)+min)
}

window.addEventListener('load', iniciarJuego)