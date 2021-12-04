const faker = require('faker');
const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');

const { models } = require('./../libs/sequelize');
const { UPSERT } = require('sequelize/dist/lib/query-types');

class ProductService{

  constructor(){
    // this.products = this.generateRandomProducts(5);
  }

  async create(data){
    data.id = uuidv4();
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find(){
    const result = await models.Product.findAll();
    return result;
  }

  async findOne(id){
    const product = await models.Product.findByPk(id);
    if( !product ){
      throw boom.notFound('User not found!');
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

  generateRandomProducts(limit){
    const products = [];
    for (let index = 0; index < limit; index++){
      products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),

      })
    }
    return products;
  }

}

module.exports = ProductService;
