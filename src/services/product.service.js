const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');
const { Op } = require('sequelize');
const { models } = require('./../libs/sequelize');
const { UPSERT } = require('sequelize/dist/lib/query-types');

class ProductService{

  constructor(){
  }

  async create(data){
    data.id = uuidv4();
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(query){
    const options = {
      include: ['images'],
      where: {}
    };
    const { limit, offset, price, price_min, price_max } = query;
    if(limit && offset){
      options.limit = limit;
      options.offset = offset;
    }
    if(price){
      options.where.price = price;
    }
    if(price_min && price_max){
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }
    const result = await models.Product.findAll(options);
    return result;
  }

  async findOne(id){
    const product = await models.Product.findByPk(id, {
      include: ['images', 'categories']
    });
    if( !product ){
      throw boom.notFound('Product not found!');
    }
    return product;
  }

  async update(id, changes){
    const product = await this.findOne(id);
    const res = await product.update(changes);
    return res;
  }

  async delete(id){
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }

}

module.exports = ProductService;
