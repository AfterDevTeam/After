const plan = require('../models/afterModels.js');
// const service = require(model for service)
// const future = require(model for future)
// const db = require('../models/afterModels');

const afterController = {};


// Install the extension uuid-oosp
afterController.installUUID = (req, res, next) =>{
  const installUUID = {
    text:`CREATE extension IF NOT EXISTS "uuid-ossp"`
  }

  plan.query(installUUID)
  .then((data)=>next())
  .catch(err=>next(err))
}


// these are the get request for each box
// retrieve information from the database for plan
afterController.getPlan = async (req, res, next) => {
  try {
    const planQuery = 'SELECT * FROM burialPlan';
    res.locals = await plan.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for service
afterController.getService = async (req, res, next) => {
  try {
    // const serviceQuery = 'Select...
    // const plan = await service.query(serviceQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for future
afterController.getFuture = async (req, res, next) => {
  try {
    // const futureQuery = 'Select...
    // const plan = await future.query(futureQuery);
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
    res.locals = await plan.query(text, values);
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addService = async (req, res, next) => {
  try {
    // const text = 'INSERT INTO '
    // const values = [req.body....]
    //  await service.query(text,value)
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addFuture = async (req, res, next) => {
  try {
    //  const text = 'INSERT INTO '
    //  const values = [req.body....]
    //  await future.query(text,value)
    next();
  } catch (error) {
    return next(error);
  }
};

//  need delete functionality

//  need update functionality

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
