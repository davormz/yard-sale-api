const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');
const { models } = require('./../libs/sequelize');

class CategoryService {
  constructor(){

  }

  async create(data){
    data.id = uuidv4();
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find(){
    const result = await models.Category.findAll();
    return result;
  }

  async findOne(id){
    const category = await models.Category.findByPk(id, { include: ['products'] });
    if( !category ){
      throw boom.notFound('Category not found!');
    }
    return category;
  }

  async update(id, changes){
    const category = await this.findOne(id);
    const res = await category.update(changes);
    return res;
  }

  async delete(id){
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoryService;
