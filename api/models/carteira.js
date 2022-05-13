'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carteira extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Carteira.init({
    name: DataTypes.STRING(90),
    cpf: DataTypes.STRING(14),
    birthday: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Carteira',
  });
  return Carteira;
};