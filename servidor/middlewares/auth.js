async function ValidarToken  (req, res, next) {
 const { token } = req.headers;

 if(token == 'invalido') {
   return res.status(400).json({error: "Token inválido"})
 }

 next();
} 

module.exports = ValidarToken