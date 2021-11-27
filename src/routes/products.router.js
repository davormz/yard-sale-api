const express = require('express');
const router =  express.Router();
const ProductService = require('./../services/product.service');
const service = new ProductService();

router.get('/', (req, res) => {
  const { size } = req.query;
  const products = service.find();
  res.json(products);
});

// router.get('/filter', (req, res) => {
// });

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product =service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json( product );
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json( product );
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const message = service.delete(id, body);
  res.json( message );
})

module.exports = router;
