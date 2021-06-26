const plan = require('../models/afterModels.js');

const createTableController = {};

// Initial setup - only needed if we dont set up the table ahead of time
createTableController.userInfoCreateTable = (req, res, next) => {

  const initialCreateTable = {
    text: `CREATE TABLE IF NOT EXISTS userinfo (
            _id SERIAL,
            firstName varchar(50),
            lastName varchar(50),
            username varchar(250) NOT NULL,
            email varchar(1000) NOT NULL,
            password varchar(250) NOT NULL,
            user_id UUID NOT NULL DEFAULT uuid_generate_v1(),
            PRIMARY KEY (_id),
            UNIQUE (username)
            );`,
  };

  plan.query(initialCreateTable)
    .then((data) => next())
    .catch((err) => next(err));
};

//setting userID to be unique
createTableController.userInfoAddUnique = (req, res, next) => {
  const initialAddUnique = {
    text: `ALTER TABLE userinfo ADD CONSTRAINT userinfo_user_id UNIQUE (user_id);`,
  };

  plan.query(initialAddUnique)
    .then((data) => next())
    .catch((err) => next(err));
};

createTableController.createBurialPlanTable = (req, res, next) => {
  const createBurialPlanTable = {
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

  plan.query(createBurialPlanTable)
    .then((data) => next())
    .catch((err) => next(err));
};


createTableController.createServicePlanTable = (req, res, next)=>{
  
}

module.exports = createTableController;