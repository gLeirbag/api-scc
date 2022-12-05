const { Sequelize, Model, DataTypes } = require("sequelize");
const {sequelize} = require("../database/connection");
const {Cronograma} = require("./Cronograma")

const Atividade = sequelize.define("atividade",{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horarioInicial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horarioFinal: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


Atividade.belongsTo(Cronograma,  { onDelete: 'CASCADE' })

module.exports = {Atividade}
