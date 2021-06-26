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
