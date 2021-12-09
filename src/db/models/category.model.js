const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE_NAME = "categories";

const CategorySchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  name: {
    allowNull:false,
    type: DataTypes.STRING,
    unique: true
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

class Category extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE_NAME,
      modelName: 'Category',
      timeStamps:false
    }
  }
}

module.exports = { CATEGORY_TABLE_NAME, CategorySchema, Category };
