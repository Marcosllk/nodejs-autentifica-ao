const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('./db')

const User = sequelize.define("user", {
  nome: DataTypes.STRING,
  genero: DataTypes.STRING,
  idade: DataTypes.INTEGER,
  
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();