const db = require('../models/afterModels');

const afterController = {};

// Initial setup.
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

afterController.initialAddUnique = (req, res, next) => {
  const initialAddUnique = {
    text: `ALTER TABLE userinfo ADD CONSTRAINT userinfo_user_id UNIQUE (user_id);`
  }

  db.query(initialAddUnique)
  .then(data=>next())
  .catch((err) => next(err));
}


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
      let cacheString = (data.rowCount === 1) ? 'User Created' : 'Failed to create'
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
