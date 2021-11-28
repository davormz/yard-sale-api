const express = require('express');
const app = express();
const helmet = require("helmet");
const routerApi = require('./routes');
const { errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const port = 3000;
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('My Express server!');
});

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on: ${port}`);
});


