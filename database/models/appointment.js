'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appointment.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:  {
      type:DataTypes.STRING,
      allowNull:false
    },
    date_appo: DataTypes.DATE,
    addi_info:  {
      type:DataTypes.STRING,
      allowNull:true
    },
  }, {
    sequelize,
    modelName: 'appointment',
    tableName: 'appointment'
  });
  return appointment;
};