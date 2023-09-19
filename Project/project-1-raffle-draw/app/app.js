require('dotenv').config('../.env');

const express= require('express');
const app = express();
const middleware = require('./middleware');
const {errorHandler,notFoundHandler} = require('./error')
app.use(middleware);
app.use(require('./route'));


app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;