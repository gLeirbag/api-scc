const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('scc', 'root', 'eu123123', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = {sequelize}