const Sequelize =  require('sequelize');

const sequelize = new Sequelize('CRUD', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
})
// sequelize.sync ({force: true});

module.exports = { sequelize }
