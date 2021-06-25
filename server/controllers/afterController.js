const db = require('../models/afterModels');

const afterController = {};

// Initial setup.
afterController.initialSetup = (req, res, next) => {
  const initial = {
    text: `CREATE TABLE IF NOT EXISTS userinfo (
            _id SERIAL,
            username varchar(50) NOT NULL,
            password varchar(250) NOT NULL,
            name varchar(250) NOT NULL,
            user_id int NOT NULL);`,
  };

  db.query(initial)
    .then((data) => next())
    .catch((err) => next(err));
};

afterController.registerUser = (req, res, next) => {
  // This is only for test
  // Fetch relevant information from front end later
  const username = 'Codesmith';
  const password = '1234';
  const name = 'Armadillo';
  const user_id = 2;

  // Inserting fetched information to the table called user.
  const getuser = {
    text: 'INSERT INTO userinfo (username, password, name, user_id) VALUES ($1, $2, $3, $4)',
    values: [username, password, name, user_id],
  };

  db.query(getuser)
    .then((data) => next())
    .catch((err) => next(err));
};

afterController.getuserid = (req, res, next) => {
  const getuserid = 'SELECT user_id FROM userinfo';

  db.query(getuserid)
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
