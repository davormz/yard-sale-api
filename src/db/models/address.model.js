const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE_NAME } = require('./customer.model');

const ADDRESS_TABLE_NAME = "addresses";

const AddressSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  type: {
    allowNull:false,
    type: DataTypes.STRING,
    defaultValue: 'shipping'
  },
  street: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  city: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  state: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  zip: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  country: {
    allowNull:false,
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
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    references: {
      model: CUSTOMER_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

class Address extends Model{
  static associate(models){
    this.belongsTo(models.Customer, {as: 'customer'});
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ADDRESS_TABLE_NAME,
      modelName: 'Address',
      timeStamps: false
    }
  }
}

module.exports = { ADDRESS_TABLE_NAME, AddressSchema, Address };
