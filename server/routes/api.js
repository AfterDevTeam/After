/** @format */

const express = require('express');

const afterController = require('../controllers/afterController.js');
//const multipleInsertController = require('../controllers/multipleInsertController');

const router = express.Router();

router.get('/', afterController.installUUID, (req, res) => {
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
router.post('/plan', afterController.addPlan, (req, res) => {
  res.status(200).send('Successfully added to plan');
});
router.post('/service', afterController.addService, (req, res) => {
  res.status(200).send('Successfully added to service');
});
router.post('/future', afterController.addFuture, (req, res) => {
  res.status(200).send('Successfully added to future');
});
router.post('/dashboard-check', afterController.dashboardCheck, (req, res) => {
  res.status(200).send(res.locals.dashboardState);
});

router.post('/planSummary', afterController.getPlanSummary, (req, res) => {
  //console.log('res.locals in planSummary', res.locals);
  res.status(200).json(res.locals);
});

router.post(
  '/serviceSummary',
  afterController.getServiceSummary,
  (req, res) => {
    //console.log('res.locals in serviceSummary', res.locals);
    res.status(200).json(res.locals);
  }
);
router.post(
  '/checklistSummary',
  afterController.getChecklistSummary,
  (req, res) => {
    //console.log('res.locals in checklistSummary', res.locals);
    res.status(200).json(res.locals);
  }
);

// delete routes
// router.delete('/plan', afterController.deletePlan, (req, res) => {
//   res.status(200).send('Entry was deleted Successfully');
// });
// router.delete('/service', afterController.deleteService, (req, res) => {
//   res.status(200).send('Entry was deleted Successfully');
// });
// router.delete('/future', afterController.deleteFuture, (req, res) => {
//   res.status(200).send('Entry was deleted Successfully');
// });

//  update routes
router.put('/plan', afterController.updatePlan, (req, res) => {
  res.status(200).send('Update to plan was successful');
});
router.put('/service', afterController.updateService, (req, res) => {
  res.status(200).send('Update to service was successful');
});
router.put('/future', afterController.updateFuture, (req, res) => {
  res.status(200).send('Update to future was successful');
});

module.exports = router;
