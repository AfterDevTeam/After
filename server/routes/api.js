const express = require('express');
const router = express.Router();

const afterController = require('../controllers/afterController');
const multipleInsertController = require('../controllers/multipleInsertController');

router.get('/', afterController.initialSetup, (req, res) =>
  res.status(200).send('working')
);

router.post('/register', afterController.registerUser, (req, res) =>
  res.status(200).json(res.locals.user)
);

router.get('/getuserid', afterController.getuserid, (req, res) =>
  res.status(200).json(res.locals.userid)
);

router.post(
  '/guestlist/:id',
  afterController.createGuestList,
  multipleInsertController.populateGuestList,
  (req, res) => res.status(200).send('working id')
);

module.exports = router;
