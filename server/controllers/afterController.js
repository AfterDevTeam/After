// add the database access here
// const db = require('')

const afterController = {};

// these are the get request for each box
// retrieve information from the database for plan
afterController.getPlan = async (req, res, next) => {
  try {
    // const planQuery = 'Select...
    // const plan = await db.query(planQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for service
afterController.getService = async (req, res, next) => {
  try {
    // const serviceQuery = 'Select...
    // const plan = await db.query(serviceQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// retrieve information from the database for future
afterController.getFuture = async (req, res, next) => {
  try {
    // const futureQuery = 'Select...
    // const plan = await db.query(futureQuery);
    return next();
  } catch (error) {
    return next(error);
  }
};

// these are the add controllers for each box
afterController.addPlan = async (req, res, next) => {
  try {
    // const text = 'INSERT INTO '
    // const values = [req.body....]
    // await db.query(text,value)
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addService = async (req, res, next) => {
  try {
    // const text = 'INSERT INTO '
    // const values = [req.body....]
    //  await db.query(text,value)
    next();
  } catch (error) {
    return next(error);
  }
};

afterController.addFuture = async (req, res, next) => {
  try {
    //  const text = 'INSERT INTO '
    //  const values = [req.body....]
    //  await db.query(text,value)
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = afterController;
