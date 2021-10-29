const { DataTypes } = require('sequelize');   //DATATYPES = TIPOS DE DADOS, TEM QUE IMPORTAR
const { sequelize } = require('./db')

const User = sequelize.define("user", {     // CRIANDO UMA NOVA TABELA COM O NOME 'USER'
  nome: DataTypes.STRING,
  genero: DataTypes.STRING,
  idade: DataTypes.INTEGER,
  
});
