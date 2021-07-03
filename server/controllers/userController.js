/** @format */

const db = require('../models/afterModels.js');
const bcrypt = require('bcrypt');

const SaltFactor = 5;

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
    const userQuery = `SELECT * FROM userinfo WHERE email = $1`;
    const values = [req.body.email];
    const userValid = await db.query(userQuery, values);

    if (userValid.rows.length === 0) {
      return next();
    } else {
      const { firstname, lastname, email, password, user_id } =
        userValid.rows[0];

      if (bcrypt.compare(req.body.password, userValid.rows[0].password)) {
        res.locals.userInfo = {
          firstName: firstname,
          lastName: lastname,
          email: email,
          userId: user_id,
        };
        return next();
      } else {
        return next();
      }
    }
  } catch (error) {
    return next(error);
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email } = req.body;
    let { password } = req.body;
    const queryText = `SELECT * FROM userinfo WHERE email = '${email}'`;
    const queryResult = await db.query(queryText);

    const salt = await bcrypt.genSalt(SaltFactor);
    const hash = await bcrypt.hash(password, salt);
    password = hash;

    const value = [firstName, lastName, email, password];

    if (queryResult.rowCount === 0) {
      const addText =
        'INSERT INTO userinfo (firstName, lastName, email, password) values($1,$2,$3,$4)';
      await db.query(addText, value);
      res.send('Success');
    } else {
      res.send('User already exists');
    }
  } catch (error) {
    return next(error);
  }
};

userController.updateUser = async (req, res, next) => {
  try {
    console.log('Hello from update user');
    console.log('Req.body', req.body);
    let keyValueList = [];
    Object.keys(req.body.userInfo).forEach((key) => {
      if (key !== 'userId' || key !== showPassword)
        keyValueList.push(`${key}='${req.body.userInfo[key]}'`);
    });
    console.log('this is the keyValueList for Update function', keyValueList);
    const stringList = keyValueList.toString();

    const userQuery = `UPDATE userinfo SET ${stringList} WHERE 'user_id' = '${req.body.userInfo.userId}'`;
    console.log('userQuery', userQuery);
    await db.query(userQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = userController;
