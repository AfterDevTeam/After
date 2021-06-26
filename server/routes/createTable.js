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
    res.status(200).send('Burial Table Created');
  }
);

router.put(
  '/serviceplan',
  (req, res) => {
    res.status(200).send('Burial Table Created');
  }
)

module.exports = router;
