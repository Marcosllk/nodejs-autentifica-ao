const jwt = require('jsonwebtoken'); 

async function TokenValido (req, res, next) {
  const { token } = req.headers;
  if(!token) {
    return res.json({ message: "Token Invalido" })
  }
  const secret = "segredo"
  try {
    jwt.verify(token, secret)
    next()
  } catch (error) {
    return res.json({ message: "Token Invalido"})
  }
}

module.exports = TokenValido;