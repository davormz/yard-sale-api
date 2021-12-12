const express = require('express');
const router =  express.Router();
const productsRouter = require('./products.router');
const categoriesRouter = require('./category.router');
const imageRouter = require('./image.router');
const userRouter = require('./user.router');
const customerRouter = require('./customer.router');

function routerApi(app){
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/images', imageRouter);
  router.use('/users', userRouter);
  router.use('/customers', customerRouter);
}

module.exports = routerApi;
