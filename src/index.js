const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require('cors');
const routerApi = require('./routes');
const { errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const port = process.env.PORT || 3000;
const whiteList = [];
const corsOptions = {};
app.use(express.json());
app.use(cors());
app.use(helmet());

require('./utils/auth');

app.get('/', (req, res) => {
  res.send('My Express server!');
});

routerApi(app);

app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Running on: ${port}`);
});


