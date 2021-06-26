const db = require('../models/afterModels');

const prefController = {};

prefController.initialCreateTable = (req, res, next) => {
  const initialCreateTable = {
    text: `CREATE TABLE preference (
            _id INT,
            funeral_Home varchar(250),
            location varchar(250),
            types varchar(250),
            PRIMARY KEY (_id))`,
  };

  db.query(initialCreateTable)
    .then((data) => next())
    .catch((err) => next(err));
};

prefController.createBurialTable = (req, res, next) => {
  const createBurialTable = {
    text: `CREATE TABLE burialPlan (
            _id SERIAL,
            rite varchar(250),
            funeralHome varchar(250) ,
            funeralBeforeRites boolean,
            funeralLocation varchar(500),
            gravesideService boolean,
            gravesideLocation varchar(500),
            memorialService boolean,
            memorialLocation varchar(500),
            user_id INT,
            PRIMARY KEY (_id),
            UNIQUE (user_id));`,
  };

  db.query(createBurialTable)
    .then((data) => next())
    .catch((err) => next(err));
};

prefController.storeBurialPreferences = (req, res, next) => {
  const rite = 'Casket';
  const funeral_service_bool = true;
  const funeral_service_location = 'myhome';
  const graveside_service_bool = false;
  const graveside_service_location = '';
  const memorial_service_bool = false;
  const memorial_service_location = '';
  const user_id = 3;

  const storeBurialPreferences = {
    text: `INSERT INTO burialPlan (rite, funeral_service_bool, funeral_service_location,
        graveside_service_bool, graveside_service_location, memorial_service_bool, memorial_service_location, user_id  
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) ON CONFLICT (user_id) DO NOTHING`,
    values: [
      rite,
      funeral_service_bool,
      funeral_service_location,
      graveside_service_bool,
      graveside_service_location,
      memorial_service_bool,
      memorial_service_location,
      user_id,
    ],
  };

  db.query(storeBurialPreferences)
  .then((data)=>{
    next();
  })
  .catch(err=>next(err));
};

prefController.storePreferences = (req, res, next) => {
  const user_id = req.params.id;

  const funueral_Home = 'Cabin';
  const location = 'Mars';
  const types = 'Cremate';

  const storePreferences = {
    text: `INSERT INTO preference (_id, funeral_Home, location, types)
           VALUES ($1, $2, $3, $4)`,
    values: [user_id, funueral_Home, location, types],
  };

  db.query(storePreferences)
    .then((data) => next())
    .catch((err) => next(err));
};

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

module.exports = prefController;
