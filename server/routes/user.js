/** @format */

const express = require('express');
const afterController = require('../controllers/afterController.js');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('This is the User Router - it works!');
});

router.post('/signup', userController.createUser, (req, res) => {
  res.send('user signed up');
});

router.post(
  '/login',
  userController.verifyUser,
  afterController.getPlan,
  afterController.getService,
  afterController.getFuture,
  (req, res) => {
    res.status(200).send(res.locals || JSON.stringify('Failed to login'));
  }
);

router.put('/update', userController.updateUser, (req, res) =>
  res.status(200).send('User Info Updated')
);

module.exports = router;
