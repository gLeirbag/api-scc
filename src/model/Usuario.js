const { Sequelize, Model, DataTypes } = require("sequelize");
const { sequelize } = require("../database/connection");

const Usuario = sequelize.define("usuario", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  apelido: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Usuario };
