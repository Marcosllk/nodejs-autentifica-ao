const { address } = require("./models/address");
const userRoutes = require("./usuarios");

userRoutes.get("/address", async (req, res) => {
  

userRoutes.post("/address", async (req, res) => {
  const { pais, estado, cidade, cep, rua, bairro, numero } = req.body
  await address.create({ pais, estado, cidade, cep, rua, bairro, numero })
  return res.json({ mensagem: "endereço criado com sucesso" })
})

userRoutes.put("/address/:id", async (req, res) => {
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


userRoutes.delete("/address/:id", async (req, res) => {
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


