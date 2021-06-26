/** @format */

const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { ModuleFilenameHelpers } = require('webpack');
const apiRouter = require('./routes/api.js');
const userRouter = require('./routes/users.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  console.log("It's working!");
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/api', apiRouter);
app.use('/user', userRouter);

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
