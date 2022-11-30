const { Sequelize, Model, DataTypes } = require("sequelize");
const {sequelize} = require("../database/connection");
const {Usuario} = require("./Usuario")

const Cronograma = sequelize.define("cronograma",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Cronograma.belongsTo(Usuario, { onDelete: 'CASCADE' })


module.exports = {Cronograma}
