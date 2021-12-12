const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');
const { models } = require('./../libs/sequelize');

class ImageService {
  constructor(){}

  async create(data){
    data.id = uuidv4();
    const newImage = await models.Image.create(data);
    return newImage;
  }

  async find(){
    const result = await models.Image.findAll();
    return result;
  }

  async findOne(id){
    const image = await models.Image.findByPk(id);
    if( !image ){
      throw boom.notFound('Image not found!');
    }
    return image;
  }

  async update(id, changes){
    const image = await this.findOne(id);
    const res = await image.update(changes);
    return res;
  }

  async delete(id){
    const image = await this.findOne(id);
    await image.destroy();
    return { id };
  }
}

module.exports = ImageService;
