const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');
const { models } = require('./../libs/sequelize');

class OrderService {
  constructor(){}

  async create(data){
    data.id = uuidv4();
    const order = await models.Order.create(data,
      { include: ['items'] });
    return order;
  }

  async find(){
    const result = await models.Order.findAll();
    return result;
  }

  async findOne(id){
    const category = await models.Category.findByPk(id,
      { include: ['customer', 'items'] });
    if( !category ){
      throw boom.notFound('Order not found!');
    }
    return category;
  }

  async update(id, changes){
    const order = await this.findOne(id);
    const res = await order.update(changes);
    return res;
  }

  async delete(id){
    const order = await this.findOne(id);
    await order.destroy();
    return { id };
  }
}

module.exports = OrderService;
