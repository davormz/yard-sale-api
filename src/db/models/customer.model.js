const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE_NAME } =  require('./user.model');

const CUSTOMER_TABLE_NAME = "customers";

const CustomerSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
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
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    references: {
      model: USER_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }

};

class Customer extends Model{
  static associate(models){
    this.belongsTo(models.User, {as: 'user'});
    this.hasMany(models.Address, {
      as: 'address',
      foreignKey: 'customerId'
    });
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE_NAME,
      modelName: 'Customer',
      timeStamps: false
    }
  }
}

module.exports = { CUSTOMER_TABLE_NAME, CustomerSchema, Customer };
