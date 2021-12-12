const Joi = require('joi');

const id = Joi.string().uuid();
const location = Joi.string().min(2);
const productId = Joi.string().uuid();


const createImageSchema = Joi.object({
  location: location.required(),
  productId: productId.required()
});

const updateImageSchema = Joi.object({
  location: location
});

const getImageSchema = Joi.object({
  id: id.required()
});

module.exports = { createImageSchema, updateImageSchema, getImageSchema };
