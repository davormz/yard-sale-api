const express = require('express');
const router =  express.Router();
const productsRouter = require('./products.router');
const categoriesRouter = require('./category.router');
const imageRouter = require('./image.router');
const userRouter = require('./user.router');
const customerRouter = require('./customer.router');
const orderRouter = require('./order.router');
const authRouter = require('./auth.router');

const { checkApiKey } = require('./../middlewares/auth.handler');

function routerApi(app){
  app.all('/*', checkApiKey);
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/images', imageRouter);
  router.use('/users', userRouter);
  router.use('/customers', customerRouter);
  router.use('/orders', orderRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
