const faker = require('faker');
const express = require('express');
const router =  express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 20;
  const products = generateRandomProducts(limit);

  res.json(products);
});

// router.get('/filter', (req, res) => {
// });

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
      id: id,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
});

function generateRandomProducts(limit){
  const products = [];
  for (let index = 0; index < limit; index++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),

    })
  }
  return products;
}

module.exports = router;
