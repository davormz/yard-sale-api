const express = require('express');
const router =  express.Router();
const UserService = require('./../services/user.service');
const service = new UserService();

const { validatorHandler } = require('./../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('./../schemas/user.schema');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const user = await service.find();
  res.json(user);
});

router.get('/:id', validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = service.findOne(id);
      res.json(user);
    } catch (error){
      next(error);
    }
});

router.post('/', validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const user = await service.update(id, body);
      res.json( user );
    } catch(error){
      next(error);
    }
});

router.delete('/:id', validatorHandler(getUserSchema, 'params'),
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
