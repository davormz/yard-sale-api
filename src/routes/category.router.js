const express = require('express');
const router =  express.Router();
const CategoryService = require('./../services/category.service');
const service = new CategoryService();

const { validatorHandler } = require('./../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('./../schemas/category.schema');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id', validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = service.findOne(id);
      res.json(category);
    } catch (error){
      next(error);
    }
});

router.post('/', validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newCategory = await service.create(body);
      res.status(201).json(newCategory);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json( category );
    } catch(error){
      next(error);
    }
});

router.delete('/:id', validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const message = await service.delete(id, body);
    res.json( message );
  } catch(error){
    next(error);
  }
})

module.exports = router;
