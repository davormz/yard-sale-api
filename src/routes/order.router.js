const express = require('express');
const passport = require('passport');
const router =  express.Router();
const OrderService = require('./../services/order.service');
const service = new OrderService();
const { validatorHandler } = require('./../middlewares/validator.handler');
const { createOrderSchema,updateOrderSchema, getOrderSchema } = require('./../schemas/order.schema');

router.all('/*', passport.authenticate('jwt', {session: false}));

router.get('/', async (req, res) => {
  const { size } = req.query;
  const orders = await service.find();
  res.json(orders);
});

router.get('/:id', validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = service.findOne(id);
      res.json(order);
    } catch (error){
      next(error);
    }
});

router.post('/', validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const order = await service.create(body);
      res.status(201).json(order);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const order = await service.update(id, body);
      res.json( order );
    } catch(error){
      next(error);
    }
});

router.delete('/:id', validatorHandler(getOrderSchema, 'params'),
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
