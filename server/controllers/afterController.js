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
  const id = res.locals.userid;

  try {
    const text = `INSERT INTO burialPlan (_id, rite,funeralHome,funeralBeforeRites, funeralLocation,graveSideService,graveSideLocation,memorialService,memorialLocation) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9)`;

    const values = [
      id,
      req.body.rite,
      req.body.funeralHome,
      req.body.funeralBeforeRites,
      req.body.funeralLocation,
      req.body.graveSideService,
      req.body.graveSideLocation,
      req.body.memorialService,
      req.body.memorialLocation,
    ];
    res.locals = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addService = async (req, res, next) => {
  try {
    const text = `INSERT INTO service (guestList,participants,prayersBool,prayersRead,musicBool, musicPlayed,cateringBool,cateringService,extras) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9)`;

    const values = [
      req.body.guestList,
      req.body.participants,
      req.body.prayersBool,
      req.body.prayersRead,
      req.body.musicBool,
      req.body.musicPlayed,
      req.body.cateringBool,
      req.body.cateringService,
      req.body.extras,
    ];
    console.log('values:', values);
    res.locals = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addFuture = async (req, res, next) => {
  const id = res.locals.userid;
  try {
    const text =
      'INSERT INTO checklist (_id, petsBool,pets,billsBool,bills,extras) values($1,$2,$3,$4,$5,$6)';
    const values = [
      id,
      req.body.petsBool,
      req.body.pets,
      req.body.billsBool,
      req.body.bills,
      req.body.extras,
    ];

    res.locals = await db.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

//  need delete functionality
afterController.deletePlan = async (req, res, next) => {
  try {
    const planQuery =
      'DELETE FROM burialPlan WHERE userID = ${req.body.userID}';
    res.locals = await db.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};
//  need update functionality
afterController.updatePlan = async (req, res, next) => {
  try {
    const planQuery =
      'UPDATE burialPlan SET (column1=value1, column2=value2) WHERE userID = ${req.body.userID}';

    /*
      iterate through req.body and create the column = value template
      var set = []
      Object.keys(req.body).forEach(function(key,i) {
        set.push(key + ' = ($ + (i+1) + ')');
      })
      */
    res.locals = await db.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

afterController.getUserId = (req, res, next) => {
  //const currentUserEmail = req.body.email;
  let currentUsername = 'HotChocoBanana';

  const getUserId = `SELECT user_id FROM userinfo
  WHERE username = '${currentUsername}'
  `;

  db.query(getUserId)
    .then((data) => {
      res.locals.userid = data.rows[0].user_id;
      next();
    })
    .catch((err) => next(err));
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
