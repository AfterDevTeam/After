const express = require('express');
const router = express.Router();

const afterController = require('../controllers/afterController');
const multipleInsertController = require('../controllers/multipleInsertController');

router.put(
  '/',
  afterController.initialCreateTable,
  afterController.initialAddUnique,
  (req, res) => res.status(200).send('Initial Setup done')
);

router.post('/register', afterController.registerUser, (req, res) =>
  res.status(200).json(res.locals.registerSuccessful)
);

router.get('/getUserId', afterController.getUserId, (req, res) =>
  res.status(200).json(res.locals.userid)
);

router.post(
  '/guestlist/:id',
  afterController.createGuestList,
  multipleInsertController.populateGuestList,
  (req, res) => res.status(200).send('Created Guest List')
);

module.exports = router;
