const express = require("express");
const { Clientes } = require("./clientes");
const { address } = require("./address");

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/usuarios", async (req, res) => {
  const data = await Clientes.findAll();
  return res.json({ data })
})

app.post("/usuarios", async (req, res) => {
  const { nome, genero, idade } = req.body
  console.log(nome, genero, idade)
  await Clientes.create({nome, genero, idade})
  return res.json({mensagem: "cliente criado com sucesso"})
})

app.put("/usuarios/:id", async (req, res) => {
    const { id } = req.params;  // 1
    const { nome, genero, idade } = req.body
    /*
{
	"nome": "daniel",
	"genero": "indefinada",
	"idade": 65
}
    */
  try {
    await Clientes.update(
      { nome: nome, genero: genero, idade: idade }, 
      { where: { id: id } })

      return res.json({mensagem: "cliente atualizado"})
  } catch (error) {
    return res.json({mensagem: "deu error"})
  }
})


app.delete("/usuarios/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, genero, idade } = req.body

try{
  await Clientes.destroy( 
      { where: { id: id } })
  
      return res.json({mensagem: "cliente deletado"})
} catch(error){
  return res.json({mensagem: "deu error"})
  }
})


app.get("/address", async (req, res) => {
  const data = await address.findAll();
  return res.json({ data })
})

app.post("/address", async (req, res) => {
  const { pais, estado, cidade, cep, rua, bairro, numero } = req.body
  await address.create({ pais, estado, cidade, cep, rua, bairro, numero })
  return res.json({ mensagem: "endereço criado com sucesso" })
})

app.put("/address/:id", async (req, res) => {
    const { id } = req.params;  // 1
    const { pais, estado, cidade, cep, rua, bairro, numero } = req.body

  try {
    await address.update(
      { pais: pais, estado: estado, cidade: cidade, cep: cep, rua: rua, bairro: bairro, numero:numero }, 
      { where: { id: id } })

      return res.json({mensagem: "endereço atualizado"})
  } catch (error) {
    return res.json({mensagem: "endereço não foi atualizado" })
  }
})


app.delete("/address/:id", async (req, res) => {
  const { id } = req.params;
  const { pais, estado, cidade, cep, rua, bairro, numero  } = req.body

try{
  await Clientes.destroy( 
      { where: { id: id } })
  
      return res.json({ mensagem: "endereço deletado" })
} catch(error){
  return res.json({ mensagem: "endereço não foi deletado" })
  }
})


app.listen(8081, console.log('rodando'));


