const faker = require('faker');
const express = require('express');
const app = express();

const routerApi = require('./routes');

const port = 3000;

app.get('/', (req, res) => {
  res.send('My Express server!');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Running on: ${port}`);
});


