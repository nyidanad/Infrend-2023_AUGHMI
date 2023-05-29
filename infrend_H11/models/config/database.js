const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('infrend_h11', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

module.exports = sequelize;