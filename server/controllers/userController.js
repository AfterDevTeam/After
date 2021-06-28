/** @format */

const db = require('../models/afterModels.js');

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  try {
    const userQuery = 'SELECT * FROM userinfo';
    const users = await db.query(userQuery);
    res.locals.users = users;
    return next();
  } catch (error) {
    return next(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userQuery = `SELECT * FROM userinfo WHERE email = ${email}`;
    const userValid = await db.query(userQuery);

    if (userValid) {
      if (userValid.password === password) {
        res.redirect('/dashboard');
      }
    } else {
      res.redirect('/signup');
    }
  } catch (error) {
    return next(error);
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const value = [firstName, lastName, email, password];
    const queryText = `SELECT * FROM userinfo WHERE email = ${email}`;

    const userValid = await db.query(queryText);

    if (!userValid) {
      const addText =
        'INSERT INTO userinfo (firstName, lastName, email, password) value($1,$2,$3,$4)';
      await db.query(addText, value);
      res.redirect('/dashboard');
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    return next(error);
  }
};

userController.getLoggedInUser = async (req, res, next) => {};

userController.updateUser = async (req, res, next) => {
  console.log('Hello from update user');
  console.log('Req.body', req.body);
  const queryText = `SELECT * FROM userinfo WHERE email = ${email}`;
  const updateFirstName = `ALTER USER ${firstName} RENAME TO ${req.body.firstName} `;
  const updateLastName = `ALTER USER ${lastName} RENAME TO ${req.body.lastName} `;
  const updateEmail = `ALTER USER ${email} RENAME TO ${req.body.email} `;
};

module.exports = userController;
