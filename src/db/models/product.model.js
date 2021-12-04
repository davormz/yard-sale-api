const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE_NAME = "products";

const ProductSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING
  },
  price: {
    allowNull:false,
    type: DataTypes.FLOAT
  },
  image: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
};

class Product extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_TABLE_NAME,
      modelName: 'Product',
      timeStamps:false
    }
  }
}

module.exports = { PRODUCT_TABLE_NAME, ProductSchema, Product };
