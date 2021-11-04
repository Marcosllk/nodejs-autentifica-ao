const userRoutes = require("../routes/usuarios");

async function ListarEndereços (req, res) {
  const data = await address.findAll();
  return res.json({ data })
}

async function EditarEndereços (req, res) {
  const { pais, estado, cidade, cep, rua, bairro, numero } = req.body
  await address.create({ pais, estado, cidade, cep, rua, bairro, numero })
  return res.json({ mensagem: "endereço criado com sucesso" })
}

async function  AtualizarEndereços (req, res) {
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
}

async function DeletandoEndereços (req, res) {
  const { id } = req.params;
  const { pais, estado, cidade, cep, rua, bairro, numero  } = req.body

try{
  await Clientes.destroy( 
      { where: { id: id } })
  
      return res.json({ mensagem: "endereço deletado" })
} catch(error){
  return res.json({ mensagem: "endereço não foi deletado" })
  }
}

module.exports = { ListarEndereços, EditarEndereços, AtualizarEndereços, DeletandoEndereços }