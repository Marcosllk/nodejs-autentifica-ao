const express = require("express");
const { Clientes } = require("./clientes");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/usuarios", async (req, res) => {
  const data = await Clientes.findAll();
  return res.json({ data })
})

app.post("/usuarios", async (req, res) => {
  const{nome, genero, idade} = req.body
  await Clientes.create({nome, genero, idade})
  return res.json({mensagem: "cliente criado com sucesso"})
})


app.put("/usuarios", (req, res) => {
  res.send();
})


app.delete("/usuarios", (req, res) => {
  res.send();
})





app.listen(8081, console.log('rodando'));