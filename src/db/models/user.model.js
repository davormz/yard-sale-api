const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE_NAME = "users";

const UserSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  email: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    allowNull:false,
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


class User extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE_NAME,
      modelName: 'User',
      timeStamps:false
    }
  }
}

module.exports = { USER_TABLE_NAME, UserSchema, User };
