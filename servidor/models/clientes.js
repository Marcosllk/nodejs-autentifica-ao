const { DataTypes } = require('sequelize');
const { sequelize } = require('../db')

const Clientes = sequelize.define("clientes", {
  nome: { type: DataTypes.STRING },
  idade: { type: DataTypes.INTEGER },
  genero: { type: DataTypes.STRING },
  senha: { type: DataTypes.STRING },
}, {
    
    createdAt: false,
  
    updatedAt: false,
});
 
module.exports = { Clientes }