'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categoria.belongsTo(models.User);
    }
  }
  Categoria.init({
    name: DataTypes.STRING,
    iconeCategoria: DataTypes.STRING,
    colorCategoria: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Categoria',
  });
  return Categoria;
};