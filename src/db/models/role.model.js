const { Model, DataTypes, Sequelize } = require('sequelize');

const ROLE_TABLE_NAME = "roles";

const RoleSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  name: {
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

class Role extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ROLE_TABLE_NAME,
      modelName: 'Role',
      timeStamps:false
    }
  }
}

module.exports = { ROLE_TABLE_NAME, RoleSchema, Role };
