const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(2).max(50);
const price = Joi.number().integer().min(1);
const price_min = Joi.number().integer().min(1);
const price_max = Joi.number().integer().min(1);

const limit = Joi.number().integer()
const offset = Joi.number().integer()

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

const querySchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: price_max.when('price_min', {
    is: Joi.exist(),
    then: Joi.required()
  })
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema, querySchema}
