const { Clientes } = require("../models/clientes");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function ListarUsuarios (req, res) {
    const data = await Clientes.findAll();
    return res.json({ data });
};


async function CriarUsuario (req, res) {
  const { nome, genero, idade, senha } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    await Clientes.create({ nome, genero, idade, senha: hashedPassword });

    return res.json({ mensagem: "cliente criado com sucesso" });
  } catch(error) {
    return res.json({ valor: "Erro" });
  }
}

async function AtualizarUsuario (req, res) {
  const { id } = req.params;
  const { nome, genero, idade, senha } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    await Clientes.update(
      { nome: nome, genero: genero, idade: idade, senha: hashedPassword },
      { where: { id: id } }
    );

    return res.json({ mensagem: "cliente atualizado" });
  } catch (error) {
    return res.json({ mensagem: "deu error" });
  }
}

async function DeletarUsuario (req, res) {
  const { id } = req.params;
  const { nome, genero, idade } = req.body;

  try {
    await Clientes.destroy({ where: { id: id } });

    return res.json({ mensagem: "cliente deletado" });
  } catch (error) {
    return res.json({ mensagem: "deu error" });
  }
}

// AUTH

async function AuthUsuario (req, res) {
  const { senha, hash } = res.body;
  const senhaValida = await bcrypt.compare(senha, hash);
  console.log(senhaValida);
  if (senhaValida == true) {
    return res.json({ mensagem: "A senha foi AUTH" });
  } else {
    return res.json({ mensagem: "A senha nao foi auth" });
  }
}

async function AutorizarToken (req, res) {
  const { nome, senha } = req.body;
  if (nome === "Julia" && senha === 123) {
    const id = 1;
    const token = await jwt.sign({ id, nome, senha }, "segredo");

    return res.json({ auth: true, token: token });
  } else {
    return res.json({ message: "Login Invalido" });
  }
}

async function Login (req, res) {
  // verifica se o usuario existe OK -> cliente.senha
  // verifica se a senha ta correta OK
  // gerar token OK
  
  const { usuario, senha } = req.body;

  try {
    const cliente = await VerificarUsuario(usuario);
    console.log(cliente)
    if (!usuario) {
      return res.json({ message: "Usuáriio não existe!"})
    }
    const senhaValida = await VerificarSenha(senha, cliente.senha)
    if (!senhaValida) {
      return res.json({ message: "Senha Invalida"})
    }
    const token = await GerarToken(cliente.id, cliente.nome)
    return res.json({ message:"Token gerado com sucesso", usuario, token })
  }catch (error) { 
    console.log(error)
    return res.json({ message: "erro no servidor!" })
  }
}
async function VerificarUsuario(usuario) {
    try {
      const cliente = await cliente.findOne({ where: { nome: usuario }});
      return cliente;
    }catch (error) { 
        return false;
    }
}
async function VerificarSenha(senha, senhaHash) {
  try {
    const senhaValida = await bcrypt.compare(senha, senhaHash)

    if(!senhaValida) {
      return false;
    }
    return true;
  }catch (error) {
    return (error)
  }
}

async function GerarToken (id, nome) {
  const secret = 'segredo'
  try{
    const token = await jwt.sign({ id, nome },secret)
    return token
  }catch(error) {
    return false
  }
}


module.exports = {
  ListarUsuarios,
  CriarUsuario,
  AtualizarUsuario,
  AuthUsuario,
  AutorizarToken,
  Login,
  DeletarUsuario,
};
