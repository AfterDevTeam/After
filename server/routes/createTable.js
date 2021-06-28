const express = require('express');
const router = express.Router();

const createTableController = require('../controllers/createTableController');

router.put(
  '/userinfo',
  createTableController.userInfoCreateTable,
  createTableController.userInfoAddUnique,
  (req, res) => {
    res.status(200).send('Userinfo table Created');
  }
);

router.put(
  `/burialplan`,
  createTableController.createBurialPlanTable,
  (req, res) => {
    res.status(200).send('Burial plan Created');
  }
);

router.put(
  '/checklist',
  createTableController.createChecklistTable,
  (req, res) => {
    res.status(200).send('Checklist Created');
  }
);

router.put(
  '/service',
  createTableController.createServiceTable,
  (req, res) => {
    res.status(200).send('service Created');
  }
);

router.put('/serviceplan', (req, res) => {
  res.status(200).send('service plan Created');
});

module.exports = router;
