//Variables Función IniciarJuego
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonTierra = document.getElementById('boton-tierra')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')

//Variables Función seleccionarMascotaJugador
const sectionSeleccionarMascota= document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigueya = document.getElementById('Ratigueya')
const spanMascotaJugador = document.getElementById('mascota-jugador')

//Variables Función seleccionarMascotaJugador
const spandMascotaEnemigo = document.getElementById('mascota-enemigo')

//Variables Función Combate
const spanVidasJugador= document.getElementById('vidas-jugador')
const spanVidasEnemigo= document.getElementById('vidas-enemigo')

//Variables Función CrearMensaje
const seccionMensaje= document.getElementById('resultado')
const ataquesDelJugador= document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo= document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3

/* 
document es para selecionar HTML.
getElementById es para seleccionar una etiqueta con un id.
addEventListener es para agregar eventos, adjunto a eso el nombre de la funcion.
innerHTML para insertar código HTML.
createElement para crear una etiqueta de HTML.
appendChild es para ingresar código en una etiqueta HTML padre
*/

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = []
    }
}
 
let hipodoge = new Mokepon('Hipodoge','assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo','assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya','assets/mokepons_mokepon_ratigueya_attack.png', 5)


//Objetos literales, solo almacenan información instantanea para el objecto en creación 
hipodoge.ataques.push(
    { nombre: '💧', id:'boton-agua'}, 
    { nombre: '💧', id:'boton-agua'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🌱', id:'boton-tierra'}               
        
)

capipepo.ataques.push(
    { nombre: '🌱', id:'boton-tierra'},               
    { nombre: '🌱', id:'boton-tierra'}, 
    { nombre: '🌱', id:'boton-tierra'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🔥', id:'boton-fuego'}
        
)

ratigueya.ataques.push(
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '🔥', id:'boton-fuego'}, 
    { nombre: '🔥', id:'boton-fuego'},
    { nombre: '💧', id:'boton-agua'},
    { nombre: '🌱', id:'boton-tierra'}               
        
)

mokepones.push(hipodoge, capipepo , ratigueya)

function iniciarJuego (){
    sectionSeleccionarAtaque.style.display='none'
    
    //tenmple literario
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label> 
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)  
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display='none'
    sectionSeleccionarAtaque.style.display='flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('Selecciona una mascota')
    }
    seleccionMascotaEnemigo()
}

function seleccionMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)

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
        ataqueEnemigo= 'AGUA'
    }else{
        ataqueEnemigo= 'TIERRA'
    }

    combate()
}

function combate(){
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
        crearMensajeFinal("Lo siento, Perdiste amigo :( ")   //Perdimos
    }

}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    seccionMensaje.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    botonReiniciar.style.display="block"
    
    seccionMensaje.innerHTML= resultadoFinal
    
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

}

function reiniciarJuego(){
    location.reload()
}
    
function aleatorio(min, max){
    return Math.floor(Math.random()*(max- min +1)+min)
}

window.addEventListener('load', iniciarJuego)