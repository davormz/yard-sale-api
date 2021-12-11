const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE_NAME } = require('./user.model');
const { ROLE_TABLE_NAME } = require('./role.model');

const USER_ROLE_TABLE_NAME = "users_roles";

const UserRoleSchema = {
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
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: USER_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  roleId: {
    field: 'role_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: ROLE_TABLE_NAME,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
};

class UserRole extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_ROLE_TABLE_NAME,
      modelName: 'UserRole',
      timeStamps:false
    }
  }
}

module.exports = { USER_ROLE_TABLE_NAME, UserRoleSchema, UserRole };
