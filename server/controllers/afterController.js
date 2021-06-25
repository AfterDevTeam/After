// const plan = require(model for plan)
// const service = require(model for service)
// const future = require(model for future)

const afterController = {};

// these are the get request for each box
// retrieve information from the database for plan
afterController.getPlan = async (req, res, next) => {
  try {
    // const planQuery = 'Select...
    // const plan = await plan.query(planQuery);
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
    // const text = 'INSERT INTO '
    // const values = [req.body....]
    // await plan.query(text,value)
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

module.exports = afterController;
