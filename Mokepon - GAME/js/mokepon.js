const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('vaporeon')
const inputCapipepo = document.getElementById('bulbasaur')
const inputRatigueya = document.getElementById('scorbunny')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonFuego.addEventListener('click', ataqueFuego)
 
    botonAgua.addEventListener('click', ataqueAgua)
 
    botonTierra.addEventListener('click', ataqueTierra)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
 
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Vaporeon'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Bulbasaur'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Scorbunny'
    } else {
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Vaporeon'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Bulbasaur'
    } else {
        spanMascotaEnemigo.innerHTML = 'Scorbunny'
    }
}

function ataqueFuego() {
    ataqueJugador = '🔥 Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = '💧 Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = '🌱 Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = '🔥 Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = '💧 Agua'
    } else {
        ataqueEnemigo = '🌱 Tierra'
    }
    combate()
}

function combate() {
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("Empataste 😱")
    } else if(ataqueJugador == '🔥 Fuego' && ataqueEnemigo == '🌱 Tierra') {
        crearMensaje("Ganaste 😎")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == '💧 Agua' && ataqueEnemigo == '🌱 Tierra') {
        crearMensaje("Ganaste 🤑")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == '🌱 Tierra' && ataqueEnemigo == '💧 Agua') {
        crearMensaje("Ganaste 🤪")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste 😭")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("Oh vaya, ganaste la partida! 🏆😉")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Oh, perdiste la partida 😔')
    }
}

function crearMensaje(resultado) {  
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)