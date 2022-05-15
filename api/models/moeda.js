'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class moeda extends Model {
    
    static associate(models) {
      // define association here
    }
  }                   
  moeda.init({
    coin: DataTypes.STRING(50),
    fullname: DataTypes.STRING(50),
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'moeda',
  });
  return moeda;
};