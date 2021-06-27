/** @format */

const db = require('../models/afterModels.js');

const afterController = {};

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
    const serviceQuery = 'SELECT * FROM servicePlan';
    res.locals = await db.query(serviceQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for future
afterController.getFuture = async (req, res, next) => {
  try {
    const futureQuery = 'SELECT * FROM futurePlan';
    res.locals = await db.query(futureQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// these are the add controllers for each box
afterController.addPlan = async (req, res, next) => {
  try {
    const text =
      'INSERT INTO burialPlan (rite,funeralHome,funeralBeforeRites, funeralLocation,graveSideService,graveSideLocation,memorialService,memorialLocation) values($1,$2,$3,$4,$5,$6,$7,$8)';

    const values = [
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
    const text =
      'INSERT INTO futurePlan (guestList,participant,prayersBool,prayersRead,musicBool,musicPlayed,cateringBool,cateringService,extras) values($1,$2,$3,$4,$5,$6,$7,$8,$9)';

    const values = [
      req.body.guestList,
      req.body.participant,
      req.body.prayersBool,
      req.body.prayersRead,
      req.body.musicBool,
      req.body.musicPlayed,
      req.body.cateringBool,
      req.body.cateringService,
      req.body.extras,
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
      'INSERT INTO futurePlan (petsBool,pets,billsBool,bills,extras) values($1,$2,$3,$4,$5)';

    const values = [
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

// Initial setup - only needed if we dont set up the table ahead of time
afterController.initialCreateTable = (req, res, next) => {
  const initialCreateTable = {
    text: `CREATE TABLE IF NOT EXISTS userinfo (
            _id SERIAL,
            username varchar(50) NOT NULL,
            password varchar(250) NOT NULL,
            name varchar(250) NOT NULL,
            user_id int NOT NULL,
            PRIMARY KEY (_id),
            UNIQUE (username));`,
  };

  db.query(initialCreateTable)
    .then((data) => next())
    .catch((err) => next(err));
};

//setting userID to be unique
afterController.initialAddUnique = (req, res, next) => {
  const initialAddUnique = {
    text: `ALTER TABLE userinfo ADD CONSTRAINT userinfo_user_id UNIQUE (user_id);`,
  };

  db.query(initialAddUnique)
    .then((data) => next())
    .catch((err) => next(err));
};

afterController.registerUser = (req, res, next) => {
  // This is only for test
  // Fetch relevant information from front end later
  const username = 'HotChocoBanana';
  const password = '1234';
  const name = 'Heeho';
  const user_id = 420;

  // Inserting fetched information to the table called user.
  const registerUser = {
    text: `INSERT INTO userinfo (username, password, name, user_id) VALUES ($1, $2, $3, $4)
    ON CONFLICT DO NOTHING`,
    values: [username, password, name, user_id],
  };

  db.query(registerUser)
    .then((data) => {
      let cacheString =
        data.rowCount === 1 ? 'User Created' : 'Failed to create';
      //res.locals.registerSuccessful = data.rowCount;
      res.locals.registerSuccessful = cacheString;
      next();
    })
    .catch((err) => next(err));
};

afterController.getUserId = (req, res, next) => {
  const getUserId = 'SELECT user_id FROM userinfo';

  db.query(getUserId)
    .then((data) => {
      res.locals.userid = data.rows[0].user_id;
      next();
    })
    .catch((err) => next(err));
};

afterController.createGuestList = (req, res, next) => {
  const userid = req.params.id;
  const guestlist = {
    text: `CREATE TABLE IF NOT EXISTS guestList_${userid} (
      name varchar(250) NOT NULL,
      pallbearer BOOL default 'false',
      eulogies BOOL default 'false',
      UNIQUE (name)
    );`,
  };

  db.query(guestlist)
    .then((data) => {
      next();
    })
    .catch((err) => next(err));
};

module.exports = afterController;
