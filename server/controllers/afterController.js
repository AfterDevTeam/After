/** @format */

const db = require('../models/afterModels.js');
const userController = require('./userController.js');
// const service = require(model for service)
// const future = require(model for future)
// const db = require('../models/afterModels');

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

// these are the get request for each box
// retrieve information from the database for plan
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

// these are the add controllers for each box
afterController.addPlan = async (req, res, next) => {
  console.log('req.body in add plan ', req.body);
  //const id = res.locals.userId;

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
    console.log('values:', values);
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
afterController.deletePlan = async (req, res, next) => {
  try {
    const userId = req.body.userInfo.userId;
    const planQuery = `DELETE FROM burialPlan WHERE _id = $1`;
    await db.query(planQuery, [userId]);
    return next();
  } catch (error) {
    return next(error);
  }
};
afterController.deleteService = async (req, res, next) => {
  try {
    const userId = req.body.userInfo.userId;
    const serviceQuery = `DELETE FROM service WHERE _id = $1`;
    await db.query(serviceQuery, [userId]);
    return next();
  } catch (error) {
    return next(error);
  }
};
afterController.deleteFuture = async (req, res, next) => {
  try {
    const userId = req.body.userInfo.userId;
    const futureQuery = `DELETE FROM checklist WHERE _id = $1`;
    await db.query(futureQuery, [userId]);
    return next();
  } catch (error) {
    return next(error);
  }
};

//  need update functionality
afterController.updatePlan = async (req, res, next) => {
  try {
    const userId = req.body.userInfo.userId;
    const keyValueList = [];
    Object.keys(req.body.plan).forEach((key) =>
      keyValueList.push(`${key}='${req.body.plan[key]}'`)
    );
    //console.log('this is the keyValueList for Update function', keyValueList);
    const stringList = keyValueList.toString();

    const planQuery = `UPDATE burialPlan SET ${stringList} WHERE '_id' = $1`;
    //console.log('planQuery', planQuery);
    await db.query(planQuery, [userId]);
    return next();
  } catch (error) {
    return next(error);
  }
};

afterController.updateService = async (req, res, next) => {
  try {
    const userId = req.body.userInfo.userId;
    //console.log(req.body.service);
    const keyValueList = [];
    Object.keys(req.body.service).forEach((key) =>
      keyValueList.push(`${key}='${req.body.service[key]}'`)
    );
    //console.log('this is the keyValueList for Update function', keyValueList);
    const stringList = keyValueList.toString();

    const serviceQuery = `UPDATE service SET ${stringList} WHERE '_id' = $1`;
    //console.log('serviceQuery', serviceQuery);
    await db.query(serviceQuery, [userId]);
    return next();
  } catch (error) {
    return next(error);
  }
};
afterController.updateFuture = async (req, res, next) => {
  try {
    const userId = req.body.userInfo.userId;
    const keyValueList = [];
    Object.keys(req.body.checklist).forEach((key) =>
      keyValueList.push(`${key}='${req.body.checklist[key]}'`)
    );
    //console.log('this is the keyValueList for Update function', keyValueList);
    const stringList = keyValueList.toString();

    const futureQuery = `UPDATE checklist SET ${stringList} WHERE '_id' = $1`;
    //console.log('futureQuery', futureQuery);
    await db.query(futureQuery, [userId]);
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

afterController.getPlanSummary = async (req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    console.log('made it');
    try {
      console.log(req.body);
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
    console.log('made it');
    try {
      console.log(req.body);
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
    console.log('made it');
    try {
      console.log(req.body);
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

/*
prefController.fetchPreferences = (req, res, next) => {
  const user_id = req.params.id;

  const fetchPreferences = {
    text: `SELECT u.username, u.name, p.funeral_home AS funeral_home, 
    p.location AS funeral_location 
    FROM userinfo u INNER JOIN preference p
    ON u.user_id = p._id
    WHERE user_id = ${user_id}`,
  };

  db.query(fetchPreferences)
    .then((data) => {
      res.locals.fetchedPreferences = data.rows[0];
      next();
    })
    .catch((err) => next(err));
};
*/

module.exports = afterController;
