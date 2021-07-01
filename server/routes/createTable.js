/** @format */

const express = require('express');
const router = express.Router();

const createTableController = require('../controllers/createTableController');

router.post(
  '/userinfo',
  createTableController.userInfoCreateTable,
  createTableController.userInfoAddUnique,
  (req, res) => {
    res.status(200).send('Userinfo table Created');
  }
);

router.post(
  `/burialplan`,
  createTableController.createBurialPlanTable,
  (req, res) => {
    res.status(200).send('Burial plan Created');
  }
);

router.post(
  '/checklist',
  createTableController.createChecklistTable,
  (req, res) => {
    res.status(200).send('Checklist Created');
  }
);

router.post(
  '/service',
  createTableController.createServiceTable,
  (req, res) => {
    res.status(200).send('service Created');
  }
);


module.exports = router;
