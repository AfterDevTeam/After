const express = require('express');
const userController = require('../controllers/userController.js');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is the User Router - it works!');
});

router.post(
  '/signup',
  [userController.getAllUsers, userController.createUser],
  (req, res) => {
    res.send('user signedup');
  }
);

router.post(
  '/login',
  [userController.getAllUsers, userController.verifyUser],
  (req, res) => {
    res.send('user verified');
  }
);

module.exports = router;
