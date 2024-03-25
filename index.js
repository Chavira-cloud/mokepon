const express = require("express") // importar libreria express
const cors = require("cors")

const app = express() //instancia de express

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }

    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }

}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    res.send(id)
}) // get para dar un recurso

app.post("/mokepon/:jugadorId", (req,res) =>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const JugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)

    if(JugadorIndex >= 0){
        jugadores[JugadorIndex].asignarMokepon(mokepon)
    }

    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req,res) =>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || o
    const y = req.body.y || o

    const JugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)

    if(JugadorIndex >= 0){
        jugadores[JugadorIndex].actualizarPosicion(x,y)
    }

    res.end
})

app.listen(8080, () =>{
    console.log("Seridor funcionando")
})