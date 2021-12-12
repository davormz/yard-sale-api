const express = require('express');
const router =  express.Router();
const ImageService = require('./../services/image.service');
const service = new ImageService();

const { validatorHandler } = require('./../middlewares/validator.handler');
const { createImageSchema, updateImageSchema, getImageSchema } = require('./../schemas/image.schema');

router.get('/', async (req, res) => {
  const { size } = req.query;
  const images = await service.find();
  res.json(images);
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const image = service.findOne(id);
      res.json(image);
    } catch (error){
      next(error);
    }
});

router.post('/', validatorHandler(createImageSchema, 'body'),
  async (req, res, next) => {
    try{
      const body = req.body;
      const newImage = await service.create(body);
      res.status(201).json(newImage);
    }catch(error){
      next(error);
    }
});

router.patch('/:id', validatorHandler(getImageSchema, 'params'),
  validatorHandler(updateImageSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const image = await service.update(id, body);
      res.json( image );
    } catch(error){
      next(error);
    }
});

router.delete('/:id', validatorHandler(getImageSchema, 'params'),
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

