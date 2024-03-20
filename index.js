const express = require("express") // importar libreria express

const app = express() //instancia de express

app.get("/", (req, res) => {
    res.send("Hola ")
}) // get para dar un recurso

app.listen(8080, () =>{
    console.log("Seridor funcionando")
})