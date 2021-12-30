const Joi = require('joi');
const id = Joi.string().uuid();
const userId = Joi.string().uuid();
const firstName = Joi.string().min(2).max(50);
const lastName = Joi.string().min(2).max(50);
const phone = Joi.string().min(2).max(15);

const createCustomerSchema = Joi.object({
  firstName: firstName.required(),
  userId: userId.required(),
  lastName,
  phone
});

const updateCustomerSchema = Joi.object({
  firstName: firstName,
  userId: userId
});

const getCustomerSchema = Joi.object({
  id: id.required()
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
