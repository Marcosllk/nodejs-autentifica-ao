const { DataTypes } = require('sequelize');
const { sequelize } = require('../db')

const address = sequelize.define("address", {
  pais: { type: DataTypes.STRING },
  estado: { type: DataTypes.STRING },
  cidade: { type: DataTypes.STRING },
  cep: { type: DataTypes.INTEGER },
  rua: { type: DataTypes.STRING },
  bairro: { type: DataTypes.STRING },
  numero: { type: DataTypes.INTEGER}
}, {
    
    createdAt: false,
  
    updatedAt: false,
});

module.exports = { address }