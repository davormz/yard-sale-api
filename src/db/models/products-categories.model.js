const { Model, DataTypes, Sequelize } = require('sequelize');
const { CATEGORY_TABLE_NAME } = require('./category.model');
const { PRODUCT_TABLE_NAME } = require('./product.model');

const PRODUCT_CATEGORY_TABLE_NAME = "products_categories";

const ProductCategorySchema = {
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
  categoryId: {
    field: 'category_id',
    allowNull: false,
    type: DataTypes.STRING,
    references: {
      model: CATEGORY_TABLE_NAME,
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

class ProdcutCategory extends Model{
  static associate(models){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCT_CATEGORY_TABLE_NAME,
      modelName: 'ProductCategory',
      timeStamps:false
    }
  }
}

module.exports = { PRODUCT_CATEGORY_TABLE_NAME, ProductCategorySchema, ProdcutCategory };
