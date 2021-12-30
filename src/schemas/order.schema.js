const Joi = require('joi');

const id = Joi.string().uuid();
const customerId = Joi.string().uuid();

const createOrderSchema = Joi.object({
  name: customerId.required()
});

const updateOrderSchema = Joi.object({
  name: customerId
});

const getOrderSchema = Joi.object({
  id: id.required()
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
