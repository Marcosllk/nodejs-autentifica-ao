const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./db')

const Clientes = sequelize.define("clientes", {
  nome: { type: DataTypes.STRING },
  idade: { type: DataTypes.INTEGER },
  genero: { type: DataTypes.STRING },
}, {
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});

(async () => {
  await sequelize.sync({ force: true });
})();


module.exports = { Clientes }