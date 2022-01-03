const express = require('express');
const passport = require('passport');
const router =  express.Router();
const ProductService = require('./../services/product.service');
const service = new ProductService();

const { validatorHandler } = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema, querySchema } = require('./../schemas/product.schema');

router.get('/', validatorHandler(querySchema, 'query'),
  async (req, res) => {
    try{
      const products = await service.find(req.query);
      res.json(products);
    } catch (error) {
      next(error)
    }
});

// router.get('/filter', (req, res) => {
// });

router.get('/:id', validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = service.findOne(id);
      res.json(product);
    } catch (error){
      next(error);
    }
});

router.post('/', passport.authenticate('jwt', {session: false}),
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json( product );
    } catch(error){
      next(error);
    }
});

router.delete('/:id', passport.authenticate('jwt', {session: false}),
  validatorHandler(getProductSchema, 'params'),
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
