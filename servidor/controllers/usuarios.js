const { Clientes } = require("./models/clientes");

async function ListarUsuarios(req, res) {
  async (req, res) => {
    const data = await Clientes.findAll();
    return res.json({ data })
  }
}

async function CriarUsuario(req, res) {
  const { nome, genero, idade, senha } = req.body;

  try {
    const hashedPassword = await bcrypt(senha, 10);
    await Clientes.create({ nome, genero, idade, senha: hashedPassword });
  } catch {
    res, json({ valor: "qualquer coisa" });
  }
  return res.json({ mensagem: "cliente criado com sucesso" });
}

async function AtualizarUsuario (req, res) {
  const { id } = req.params;  
    const { nome, genero, idade, senha } = req.body

  try {
    const hashedPassword = await bcrypt.hash(senha, 10)
    await Clientes.update(
      { nome: nome, genero: genero, idade: idade, senha: hashedPassword }, 
      { where: { id: id } })

      return res.json({mensagem: "cliente atualizado"})
  } catch (error) {
    return res.json({mensagem: "deu error"})
  }
}

async function AuthUsuario (req, res) {
    const { senha, hash } = res.body
    const senhaValida = await bcrypt.compare(senha, hash)
    console.log(senhaValida)
    if(senhaValida == true){
      return res.json({ mensagem: "A senha foi AUTH" })
    }else {
      return res.json({ mensagem: "A senha nao foi auth"})
    } 
}

async function AutorizarToken (req, res) {
  const { nome, senha } = req.body;
  if(nome === 'Julia' && senha === 123){
  const id = 1
  const token = await jwt.sign({ id, nome, senha }, 'segredo')


  return res.json({ auth: true, token: token })
  } else {
    return res.json({message: 'Login Invalido'})
  } 

}

async function VerificaToken (res, res) {
  const { token } = req.body
  try {
    const decoded = await jwt.verify(token, 'segredo')
    return res.json({message: "Token verificado com sucesso"})
  } catch {
    return res.json({message: "token nao foi autenticado"})
  }
}

async function DeletarUsuario (req, res) {
  const { id } = req.params;
  const { nome, genero, idade } = req.body

try{
  await Clientes.destroy( 
      { where: { id: id } })
  
      return res.json({mensagem: "cliente deletado"})
} catch(error){
  return res.json({mensagem: "deu error"})
  }
}



module.exports = { ListarUsuarios, CriarUsuario, AtualizarUsuario, AuthUsuario, AutorizarToken, VerificaToken }