'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Shipping.belongsTo(Order/*,{foreignKey:'order_id'}*/)

      //Shipping.hasOne(Order,{foreignKey:'shipping_id', as:'orders'})
    }
  };
  Shipping.init({
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    address_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipping',
  });
  return Shipping;
};