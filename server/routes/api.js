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
  res.status(200).json(res.locals);
});

router.get('/future', afterController.getFuture, (req, res) => {
  res.status(200).json(res.locals);
});

//  post routes
router.post('/plan', afterController.getUserId, afterController.addPlan, (req, res) => {
  res.status(200).send('');
});
router.post('/service', afterController.getUserId, afterController.addService, (req, res) => {
  res.status(200).send('');
});
router.post('/future', afterController.getUserId, afterController.addFuture, (req, res) => {
  res.status(200).send('');
});

router.post('/register', afterController.registerUser, (req, res) =>
  res.status(200).json(res.locals.registerSuccessful)
);

router.get('/getUserId', afterController.getUserId, (req, res) =>
  res.status(200).json(res.locals.userid)
);

router.post(
  '/guestlist/:id',
  multipleInsertController.populateGuestList,
  (req, res) => res.status(200).send('Created Guest List')
);

module.exports = router;
