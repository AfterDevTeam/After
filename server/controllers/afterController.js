/** @format */

const db = require('../models/afterModels.js');
const userController = require('./userController.js');

const afterController = {};

// Install the extension uuid-oosp
afterController.installUUID = (req, res, next) => {
  const installUUID = {
    text: `CREATE extension IF NOT EXISTS "uuid-ossp"`,
  };

  db.query(installUUID)
    .then((data) => next())
    .catch((err) => next(err));
};

// these are the get request bring used in the user post controller
afterController.getPlan = async (req, res, next) => {
  if (Object.keys(res.locals.userInfo).length > 0) {
    try {
      const planQuery = 'SELECT * FROM burialPlan WHERE _id = ($1)';
      const value = [res.locals.userInfo.userId];
      const data = await db.query(planQuery, value);
      res.locals.burialPlan = data.rows[0];
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

// retrieve information from the database for service
afterController.getService = async (req, res, next) => {
  if (Object.keys(res.locals.userInfo).length > 0) {
    try {
      const serviceQuery = 'SELECT * FROM service WHERE _id = ($1)';
      const value = [res.locals.userInfo.userId];
      const data = await db.query(serviceQuery, value);
      res.locals.service = data.rows[0];
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

// retrieve information from the database for future
afterController.getFuture = async (req, res, next) => {
  if (Object.keys(res.locals.userInfo).length > 0) {
    try {
      const futureQuery = 'SELECT * FROM checklist WHERE _id = ($1)';
      const value = [res.locals.userInfo.userId];
      const data = await db.query(futureQuery, value);
      res.locals.checklist = data.rows[0];
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

// these are the add controllers for the carousel
afterController.addPlan = async (req, res, next) => {
  try {
    const text = `INSERT INTO burialPlan (_id, rite,funeralHome,funeralBeforeRites, funeralLocation,graveSideService,graveSideLocation,memorialService,memorialLocation) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9)`;

    const values = [
      req.body.userInfo.userId,
      req.body.plan.rite,
      req.body.plan.funeralHome,
      req.body.plan.funeralBeforeRites,
      req.body.plan.funeralLocation,
      req.body.plan.graveSideService,
      req.body.plan.graveSideLocation,
      req.body.plan.memorialService,
      req.body.plan.memorialLocation,
    ];
    res.locals = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addService = async (req, res, next) => {
  try {
    const text = `INSERT INTO service (_id,guestList,participants,prayersBool,prayersRead,musicBool, musicPlayed,cateringBool,cateringService,extras) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`;

    const values = [
      req.body.userInfo.userId,
      req.body.service.guestList,
      req.body.service.participants,
      req.body.service.prayersBool,
      req.body.service.prayersRead,
      req.body.service.musicBool,
      req.body.service.musicPlayed,
      req.body.service.cateringBool,
      req.body.service.cateringService,
      req.body.service.extras,
    ];
    res.locals = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addFuture = async (req, res, next) => {
  try {
    const text =
      'INSERT INTO checklist (_id, petsBool,pets,billsBool,bills,extras) values($1,$2,$3,$4,$5,$6)';
    const values = [
      req.body.userInfo.userId,
      req.body.checklist.petsBool,
      req.body.checklist.pets,
      req.body.checklist.billsBool,
      req.body.checklist.bills,
      req.body.checklist.extras,
    ];

    res.locals = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

//  delete functionality
// afterController.deletePlan = async (req, res, next) => {
//   try {
//     const userId = req.body.userInfo.userId;
//     const planQuery = `DELETE FROM burialPlan WHERE _id = $1`;
//     await db.query(planQuery, [userId]);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// };
// afterController.deleteService = async (req, res, next) => {
//   try {
//     const userId = req.body.userInfo.userId;
//     const serviceQuery = `DELETE FROM service WHERE _id = $1`;
//     await db.query(serviceQuery, [userId]);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// };
// afterController.deleteFuture = async (req, res, next) => {
//   try {
//     const userId = req.body.userInfo.userId;
//     const futureQuery = `DELETE FROM checklist WHERE _id = $1`;
//     await db.query(futureQuery, [userId]);
//     return next();
//   } catch (error) {
//     return next(error);
//   }
// };

//  update functionality for the summary page when edit is pressed
afterController.updatePlan = async (req, res, next) => {
  try {
    const values = [
      req.body.userInfo.userId,
      req.body.plan.rite,
      req.body.plan.funeralHome,
      req.body.plan.funeralBeforeRites,
      req.body.plan.funeralLocation,
      req.body.plan.graveSideService,
      req.body.plan.graveSideLocation,
      req.body.plan.memorialService,
      req.body.plan.memorialLocation,
    ];

    const planQuery =
      'UPDATE burialPlan SET rite = $2,funeralHome = $3,funeralBeforeRites = $4, funeralLocation = $5,graveSideService = $6,graveSideLocation = $7,memorialService = $8,memorialLocation = $9 WHERE _id = $1';
    await db.query(planQuery, values);
    return next();
  } catch (error) {
    return next(error);
  }
};

afterController.updateService = async (req, res, next) => {
  try {
    const values = [
      req.body.userInfo.userId,
      req.body.service.guestList,
      req.body.service.participants,
      req.body.service.prayersBool,
      req.body.service.prayersRead,
      req.body.service.musicBool,
      req.body.service.musicPlayed,
      req.body.service.cateringBool,
      req.body.service.cateringService,
      req.body.service.extras,
    ];

    const serviceQuery =
      'UPDATE service SET guestList = $2,participants = $3,prayersBool = $4,prayersRead = $5,musicBool = $6, musicPlayed = $7,cateringBool = $8,cateringService = $9,extras = $10 WHERE _id = $1';

    await db.query(serviceQuery, values);
    return next();
  } catch (error) {
    return next(error);
  }
};

afterController.updateFuture = async (req, res, next) => {
  try {
    const values = [
      req.body.userInfo.userId,
      req.body.checklist.petsBool,
      req.body.checklist.pets,
      req.body.checklist.billsBool,
      req.body.checklist.bills,
      req.body.checklist.extras,
    ];

    const futureQuery =
      'UPDATE checklist SET petsBool = $2,pets = $3,billsBool = $4,bills = $5,extras = $6 WHERE _id = $1';

    await db.query(futureQuery, values);
    return next();
  } catch (error) {
    return next(error);
  }
};

//check database for dashboard information
afterController.dashboardCheck = async (req, res, next) => {
  try {
    //set up res.locals object that will determine dashboard state
    res.locals.dashboardState = {
      burialPlan: false,
      service: false,
      futureChecklist: false,
    };
    //retrieve userID from request
    const userId = req.body.userId;
    //use userID to query all databases for data
    const planDashboardQuery = `SELECT * FROM burialPlan WHERE _id = $1`;
    const planDashboardData = await db.query(planDashboardQuery, [userId]);
    if (planDashboardData.rowCount > 0)
      res.locals.dashboardState.burialPlan = true;

    const serviceDashboardQuery = `SELECT * FROM service WHERE _id = $1`;
    const serviceDashboardQueryData = await db.query(serviceDashboardQuery, [
      userId,
    ]);
    if (serviceDashboardQueryData.rowCount > 0)
      res.locals.dashboardState.service = true;

    const checklistDashboardQuery = `SELECT * FROM checklist WHERE _id = $1`;
    const checklistDashboardQueryData = await db.query(
      checklistDashboardQuery,
      [userId]
    );
    if (checklistDashboardQueryData.rowCount > 0)
      res.locals.dashboardState.futureChecklist = true;

    return next();
  } catch (error) {
    return next(error);
  }
};

//  these are the get requests to update the summary page
afterController.getPlanSummary = async (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    try {
      // console.log(req.body);
      const planQuery = 'SELECT * FROM burialPlan WHERE _id = ($1)';
      const value = [req.body.userInfo.userId];
      const data = await db.query(planQuery, value);
      res.locals.burialPlan = data.rows[0];
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

afterController.getServiceSummary = async (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    try {
      // console.log(req.body);
      const planQuery = 'SELECT * FROM service WHERE _id = ($1)';
      const value = [req.body.userInfo.userId];
      const data = await db.query(planQuery, value);
      res.locals.service = data.rows[0];
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

afterController.getChecklistSummary = async (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    try {
      // console.log(req.body);
      const planQuery = 'SELECT * FROM checklist WHERE _id = ($1)';
      const value = [req.body.userInfo.userId];
      const data = await db.query(planQuery, value);
      res.locals.checklist = data.rows[0];
      return next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
};

module.exports = afterController;
