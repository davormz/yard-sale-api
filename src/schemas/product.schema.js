const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(2).max(50);
const price = Joi.number().integer().min(1);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price
});

const getProductSchema = Joi.object({
  id: id.required()
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema}
