const express = require('express');
const passport = require('passport');
const router =  express.Router();
const CustomerService = require('./../services/customer.service');
const service = new CustomerService();
const { validatorHandler } = require('./../middlewares/validator.handler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('./../schemas/customer.schema');

router.all('/*', passport.authenticate('jwt', {session: false}));

router.get('/',  async (req, res) => {
  const { size } = req.query;
  const customer = await service.find();
  res.json(customer);
});

router.get('/:id', validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = service.findOne(id);
      res.json(customer);
    } catch (error){
      next(error);
    }
});

router.post('/', validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const customer = await service.update(id, body);
      res.json( customer );
    } catch(error){
      next(error);
    }
});

router.delete('/:id', validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const message = await service.delete(id, body);
    res.json( message );
  } catch(error){
    next(error);
  }
});

module.exports = router;
