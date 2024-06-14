'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsTo(models.User);
    }
  }
  Card.init({
    name: DataTypes.STRING,
    numero: DataTypes.STRING,
    tipoCartao: DataTypes.STRING,
    dataFechamento: DataTypes.STRING,
    dataVencimento: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};