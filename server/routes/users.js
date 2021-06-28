/** @format */

const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('This is the User Router - it works!');
});

router.post(
  '/signup',
  userController.getAllUsers, userController.createUser,
  (req, res) => {
    res.send('user signed up');
  }
);

router.post(
  '/login',
  userController.getAllUsers, userController.verifyUser,
  (req, res) => {
    res.status(200).send('user verified');
  }
);

router.put('/update', userController.updateUser, (req, res) =>
  res.status(200).send('User Info Updated')
);

module.exports = router;
