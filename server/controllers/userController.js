//  const db = require(model for user)

const { restart } = require("nodemon");

const userController = {};

userController.getAllUsers = async (req, res, next) => {
try {
  const userQuery = 'SELECT * FROM tableName';
  const users = await //db.query(userQuery);
  res.locals = users;
  return next();
} catch (error) {
  return next (error);
}
};

userController.verifyUser = asnyc (req, res, next) => {
  try {
    const {username, password} = req.query;
    const userQuery = 'SELECT * FROM tablename WHERE username = ${username}';
    res.locals = await //db.query(userQuery);
    //console.log(res.locals)
    //compare username to what is in res.local and password, if all matches, redirect to dashboard 
  } catch (error) {
    return next (error);
  }
};

userController.createUser = async (req, res, next) => {
  try {
    const {username, password} = req.query;
    const value = [username, password];
    const queryText = 'SELECT * FROM tabletname WHERE username = value[1]'

    const userValid = await //db.query(queryText);
    if (!userValid) {
     const addText = 'INSERT INTO tablename(username, password) value($1,$2)'
      await //db.query(addText,value);
    }
    //if exist - redirect to login page
    //if not exist - add into table and redirect to dashboard
  } catch (error) {
    return next (error);
  }
};



module.exports = userController;
