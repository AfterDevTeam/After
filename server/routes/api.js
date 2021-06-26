const express = require('express');

const afterController = require('../controllers/afterController.js');
const multipleInsertController = require('../controllers/multipleInsertController');

const router = express.Router();

router.get('/', (req, res) => {
  afterController.installUUID,
  res.send('This is the API Router - it works!');
});

// get routes
router.get('/plan', afterController.getPlan, (req, res) => {
  res.status(200).json(res.locals);
});

router.get('/service', afterController.getService, (req, res) => {
  res.status(200).json();
});

router.get('/future', afterController.getFuture, (req, res) => {
  res.status(200).json();
});

//  post routes
router.post('/plan', afterController.addPlan, (req, res) => {
  res.status(200).json(res.locals);
});
router.post('/service', afterController.addService, (req, res) => {
  res.status(200);
});
router.post('/future', afterController.addFuture, (req, res) => {
  res.status(200);
});

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
