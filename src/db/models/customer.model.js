const { Model, DataTypes, Sequelize } = require('sequelize');

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

class Customer extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CUSTOMER_TABLE_NAME,
      modelName: 'Customer',
      timeStamps:false
    }
  }
}

module.exports = { CUSTOMER_TABLE_NAME, CustomerSchema, Customer };
