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
    name: {
      type: DataTypes.STRING(90),
      validate: {
        len: {
          args: [7,90],
          msg: 'nome precisa ter no minimo 7 caracteres'
        }
      }
    
    },
    cpf: {
      type: DataTypes.STRING(14),
      validate: {
        is: {
          args : /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
          msg: 'cpf invalido, use o formato xxx.xxx.xxx-xx'
        }
        
      }

    },
    birthday: {
      type: DataTypes.DATEONLY,
      validate: {
        isBefore: {
          args: '2004-01-01',
          msg: 'voce precisa ser maior que 18 anos'
        }
      }
    },
    address: {
      allowNull:false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
  
  }, {
    sequelize,
    modelName: 'Carteira',
  });
  return Carteira;
};