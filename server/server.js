/** @format */

const express = require('express');
const app = express();
const path = require('path');
const { ModuleFilenameHelpers } = require('webpack');
const fs = require('fs');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const userRouter = require('./routes/user.js');
const apiRouter = require('./routes/api');

// To make my life easier
const createTableRouter = require('./routes/createTable.js');

// Handle Parsing Request Body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Route Handlers
app.use('/create', createTableRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

//  global error handler function - for use in controller to log errors
function errorHandler(err, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error has occured' },
  };
  const errorObj = Object.assign(err, defaultErr);
  console.log(errorObj.log);
  if (res.headerSent) {
    return next(err);
  }
  res.status(errorObj.status).json(errorObj.message);
}

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
