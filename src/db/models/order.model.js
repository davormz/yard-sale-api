const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE_NAME } = require('./customer.model');
const { PRODUCT_TABLE_NAME } = require('./product.model');

const ORDER_TABLE_NAME = "orders";

const OrderSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
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
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: CUSTOMER_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    get() {
      if (this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return total + (item.price * item.OrderProduct.amount);
        }, 0);
      }
      return 0;
    }
  }
};

class Order extends Model{
  static associate(models){
    this.belongsTo(models.Customer, { as: 'customer' });
    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId'
    });

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
