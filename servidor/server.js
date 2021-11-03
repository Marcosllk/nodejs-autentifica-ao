const express = require("express");

const userRoutes = require("./routes/usuarios.js")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))  // urlencoded permite voce adiconar caracter sem quebrar a application

app.use('/usuarios', userRoutes)

app.listen(8081, console.log('rodando'));


