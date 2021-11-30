const express = require('express');
const router =  express.Router();
const ProductService = require('./../services/product.service');
const service = new ProductService();

const { validatorHandler } = require('./../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/product.schema');

router.get('/', (req, res) => {
  const { size } = req.query;
  const products = service.find();
  res.json(products);
});

// router.get('/filter', (req, res) => {
// });

router.get('/:id', validatorHandler(getProductSchema, 'params'),
  (req, res, next) => {
    try {
      const { id } = req.params;
      const product =service.findOne(id);
      res.json(product);
    } catch (error){
      next(error);
    }
});

router.post('/', validatorHandler(createProductSchema, 'body'),
  (req, res, next) => {
    try{
      const body = req.body;
      const newProduct = service.create(body);
      res.status(201).json(newProduct);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const product = service.update(id, body);
      res.json( product );
    } catch(error){
      next(error);
    }
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json( product );
});

router.delete('/:id', (req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const message = service.delete(id, body);
    res.json( message );
  } catch(error){
    next(error);
  }
})

module.exports = router;
