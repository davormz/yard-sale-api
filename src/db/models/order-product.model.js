const { Model, DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE_NAME } = require('./order.model');
const { PRODUCT_TABLE_NAME } = require('./product.model');

const ORDER_PRODUCT_TABLE_NAME = "orders_products";

const OrderProductSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  amount: {
    allowNull:false,
    type: DataTypes.INTEGER
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  },
  orderId: {
    field: 'order_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: ORDER_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  productId: {
    field: 'product_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: PRODUCT_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};


class OrderProduct extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_PRODUCT_TABLE_NAME,
      modelName: 'OrderProduct',
      timeStamps:false
    }
  }
}

module.exports = { ORDER_PRODUCT_TABLE_NAME, OrderProductSchema, OrderProduct };
