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
    res.status(200).send('user signedup');
  }
);

router.post(
  '/login',
  userController.getAllUsers, userController.verifyUser,
  (req, res) => {
    res.status(200).send('user verified');
  }
);

module.exports = router;
