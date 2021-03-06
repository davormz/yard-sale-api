const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { models } = require('./../libs/sequelize');

class CustomerService{
  constructor() {}

  async create(data){
    let newCustomer = null;
    data.id = uuidv4();
    if(data.user){
      newCustomer = await createWithUserData(data);
    } else {
      newCustomer = await models.Customer.create(data);
    }

    return newCustomer;
  }

  async createWithUserData(data){
    const hash = await bcrypt.hash(data.user.password, 5);
    const newData = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }
    const newCustomer = await models.Customer.create(newData, {
      include: ['user']
    });
    delete newCustomer.dataValues.user.dataValues.password;
    return newCustomer;
  }

  async find(){
    const result = await models.Customer.findAll({
      include: ['addresses']
    });
    return result;
  }

  async findOne(id){
    const customer = await models.Customer.findByPk(id, {
      include: ['addresses', 'orders']
    });
    if( !customer ){
      throw boom.notFound('Customer not found!');
    }
    return customer;
  }

  async update(id, changes){
    const customer = await this.findOne(id);
    const res = await customer.update(changes);
    return res;
  }

  async delete(id){
    const customer = await this.findOne(id);
    await customer.destroy();
    return { id };
  }

}

module.exports = CustomerService;
