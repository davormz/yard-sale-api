const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid');
const { models } = require('./../libs/sequelize');

class UserService {
  constructor() {}

  async create(data){
    data.id = uuidv4();
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find(){
    const result = await models.User.findAll({
      include: ['customer']
    });
    return result;
  }

  async findOne(id){
    const user = await models.User.findByPk(id, {
      include: ['customer']
    });
    if( !user ){
      throw boom.notFound('User not found!');
    }
    return user;
  }

  async update(id, changes){
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;
  }

  async delete(id){
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
