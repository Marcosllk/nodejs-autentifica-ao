const express = require("express");

const {
  ListarUsuarios,
  CriarUsuario,
  AtualizarUsuario,
  AuthUsuario,
  AutorizarToken,
  Login,
  DeletarUsuario
} = require("../controllers/usuarios.js");
const TokenValido = require("../middlewares/auth.js");

const userRoutes = express.Router();

userRoutes.get("/", TokenValido, ListarUsuarios);

userRoutes.post("/", CriarUsuario);

userRoutes.put("/:id", AtualizarUsuario);

userRoutes.delete("/:id", DeletarUsuario);

userRoutes.post("/auth", AuthUsuario);

userRoutes.post("/token", AutorizarToken);

userRoutes.post("/login", Login);

module.exports = userRoutes;
