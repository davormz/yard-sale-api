const { Model, DataTypes, Sequelize } = require('sequelize');

const IMAGES_TABLE_NAME = "images";

const ImageSchema = {
  id: {
    allowNull:false,
    primaryKey: true,
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  location: {
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

class Image extends Model{
  static associate(){
    //models
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: IMAGES_TABLE_NAME,
      modelName: 'Image',
      timeStamps:false
    }
  }
}

module.exports = { IMAGES_TABLE_NAME, ImageSchema, Image };
