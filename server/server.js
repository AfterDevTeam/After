/** @format */

const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportJWT = require('passport-jwt');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const apiRouter = require('./routes/api');

app.get('*', (req, res) => {
  console.log('hello');
  return res.status(200).send('hi');
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
