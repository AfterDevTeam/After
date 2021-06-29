/** @format */

const db = require('../models/afterModels.js');
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
  try {
    const planQuery = 'SELECT * FROM burialPlan';
    res.locals = await db.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for service
afterController.getService = async (req, res, next) => {
  try {
    const serviceQuery = 'SELECT * FROM serviceplan';
    res.locals = await db.query(serviceQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for future
afterController.getFuture = async (req, res, next) => {
  try {
    const futureQuery = 'SELECT * FROM checklist';
    res.locals = await db.query(futureQuery);
    return next();
  } catch (error) {
    return next(error);
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
    const planQuery = `DELETE FROM burialPlan WHERE _id = '${req.body.userInfo.userId}'`;
    await db.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};
afterController.deleteService = async (req, res, next) => {
  try {
    const serviceQuery = `DELETE FROM service WHERE _id = '${req.body.userInfo.userId}'`;
    await db.query(serviceQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};
afterController.deleteFuture = async (req, res, next) => {
  try {
    const futureQuery = `DELETE FROM checklist WHERE _id = '${req.body.userInfo.userId}'`;
    await db.query(futureQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

//  need update functionality
afterController.updatePlan = async (req, res, next) => {
  try {
    let keyValueList = [];
    Object.keys(req.body.plan).forEach((key) =>
      keyValueList.push(`${key}='${req.body.plan[key]}'`)
    );
    console.log('this is the keyValueList for Update function', keyValueList);
    const stringList = keyValueList.toString();

    const planQuery = `UPDATE burialPlan SET _id='${req.body.userInfo.userId}', ${stringList} WHERE '_id' = '${req.body.userInfo.userId}'`;
    console.log('planQuery', planQuery);
    await db.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

//check database for dashboard information
afterController.dashboardCheck = async (req, res, next) => {
  try {
    console.log('dashboardcheck middleware triggered');
    console.log(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
}

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
