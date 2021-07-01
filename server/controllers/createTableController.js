/** @format */

const { Dns } = require('@material-ui/icons');
const db = require('../models/afterModels.js');

const createTableController = {};

// Initial setup - only needed if we dont set up the table ahead of time
createTableController.userInfoCreateTable = (req, res, next) => {
  const initialCreateTable = {
    text: `CREATE TABLE IF NOT EXISTS userinfo (
            _id SERIAL,
            firstName varchar(250),
            lastName varchar(250),
            email varchar(1000) NOT NULL,
            password varchar(250) NOT NULL,
            user_id UUID NOT NULL DEFAULT uuid_generate_v1(),
            PRIMARY KEY (_id),
            UNIQUE (email)
            );`,
  };

  db.query(initialCreateTable)
    .then((data) => next())
    .catch((err) => next(err));
};

//setting email to be unique
createTableController.userInfoAddUnique = (req, res, next) => {
  const initialAddUnique = {
    text: `ALTER TABLE userinfo ADD CONSTRAINT userinfo_user_id UNIQUE (user_id);`,
  };

  db.query(initialAddUnique)
    .then((data) => next())
    .catch((err) => next(err));
};

createTableController.createBurialPlanTable = (req, res, next) => {
  const createBurialPlanTable = {
    text: `CREATE TABLE burialPlan (
            _id UUID,
            rite varchar(250),
            funeralHome varchar(250) ,
            funeralBeforeRites boolean,
            funeralLocation varchar(500),
            gravesideService boolean,
            gravesideLocation varchar(500),
            memorialService boolean,
            memorialLocation varchar(500),
            PRIMARY KEY (_id));`,
  };

  db.query(createBurialPlanTable)
    .then((data) => next())
    .catch((err) => next(err));
};

createTableController.createChecklistTable = (req, res, next) => {
  const createChecklistTable = {
    text: `CREATE TABLE IF NOT EXISTS checklist (
            _id UUID,
            petsBool BOOLEAN DEFAULT false,
            pets VARCHAR(1000),
            billsBool BOOLEAN DEFAULT false,
            bills VARCHAR(1000),
            extras VARCHAR(1000),
            PRIMARY KEY (_id));`,
  };

  db.query(createChecklistTable)
    .then((data) => next())
    .catch((err) => next(err));
};

createTableController.createServiceTable = (req, res, next) => {
  const createServiceTable = {
    text: `CREATE TABLE IF NOT EXISTS service (
      _id UUID,
      guestlist VARCHAR,
      participants VARCHAR,
      musicBool BOOLEAN DEFAULT false,
      musicPlayed VARCHAR,
      prayersBool BOOLEAN DEFAULT false,
      prayersRead VARCHAR,
      cateringBool BOOLEAN DEFAULT false,
      cateringService VARCHAR,
      extras VARCHAR,
      PRIMARY KEY (_id)
    );`,
  };

  db.query(createServiceTable)
    .then((data) => {
      next();
    })
    .catch((err) => next(err));
};

createTableController.createSessionTable = (req, res, next) => {
  const createSessionTable = {
    text: `CREATE TABLE IF NOT EXISTS session(
      cookieid UUID,
      createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	    expiration TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP + interval '10 days',
      PRIMARY KEY (cookieid)
    )`,
  };

  db.query(createSessionTable)
    .then((data) => next())
    .catch((err) => next(err));
};

module.exports = createTableController;
