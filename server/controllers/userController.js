const db = require('../models/afterModels.js');

const userController = {};

userController.getAllUsers = async (req, res, next) => {
  try {
    const userQuery = 'SELECT * FROM tableName';
    const users = await db.query(userQuery);
    res.locals = users;
    return next();
  } catch (error) {
    return next(error);
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userQuery = 'SELECT * FROM tablename WHERE email = ${email}';
    const userValid = await db.query(userQuery);

    if (userValid) {
      //compare pasword in req body to what is in userValid
      //if true - redirect to dashboard
    } else {
      res.redirect('/signup');
    }

    //compare username to what is in res.local and password, if all matches, redirect to dashboard
  } catch (error) {
    return next(error);
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const value = [email, password, firstName, lastName];
    const queryText = 'SELECT * FROM tabletname WHERE email = $1';

    const userValid = await db.query(queryText);

    if (!userValid) {
      const addText =
        'INSERT INTO tablename(firstname, lastname, email, password) value($1,$2,$3,$4)';
      await db.query(addText, value);
    } else {
      res.redirect('/signup');
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = userController;
