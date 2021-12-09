const { Model, DataTypes, Sequelize } = require('sequelize');

const ORDER_TABLE_NAME = "orders";

const OrderSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  totalPrice: {
    allowNull:false,
    type: DataTypes.FLOAT,
    field: 'total_price',
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
  }
};

class Order extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_TABLE_NAME,
      modelName: 'Order',
      timeStamps:false
    }
  }
}

module.exports = { ORDER_TABLE_NAME, OrderSchema, Order };
