const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { ListarUsuarios, CriarUsuario, AtualizarUsuario, AuthUsuario, AutorizarToken, VerificaToken } = require('../controllers/usuarios.js')

const userRoutes = express.Router();

userRoutes.get("/", ListarUsuarios);

userRoutes.post("/", CriarUsuario);

userRoutes.put("/:id", AtualizarUsuario);
    

userRoutes.delete("/:id", DeletarUsuario);
  

userRoutes.post("/auth", AuthUsuario);

userRoutes.post("/token", AutorizarToken);
  

userRoutes.post("/verificacao", VerificaToken);

  

module.exports = userRoutes;