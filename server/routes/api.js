const express = require('express');

const afterController = require('../controllers/afterController.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This Works');
});

// get routes
router.get('/plan', afterController.getPlan, (req, res) => {
  res.status(200).json();
});

router.get('/service', afterController.getService, (req, res) => {
  res.status(200).json();
});

router.get('/future', afterController.getFuture, (req, res) => {
  res.status(200).json();
});

//  post routes
router.post('/plan', afterController.addPlan, (req, res) => {
  res.status(200);
});
router.post('/service', afterController.addService, (req, res) => {
  res.status(200);
});
router.post('/future', afterController.addFuture, (req, res) => {
  res.status(200);
});

module.exports = router;
