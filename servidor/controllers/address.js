const userRoutes = require("../routes/usuarios");

userRoutes("/") ListarEndereços async function  (req, res) {
  const data = await address.findAll();
  return res.json({ data })
}
