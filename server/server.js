/** @format */

const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const apiRouter = require('./routes/api');

app.use(express.static(path.join(__dirname, './build')));

app.get('/', (req, res) => {
  console.log("It's working!");
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
