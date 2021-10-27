const Sequelize =  require('sequelize');

const sequelize = new Sequelize('CRUD', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = { sequelize }
