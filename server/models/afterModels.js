/** @format */

const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = `postgres://${process.env.Userdatabase}:${process.env.Password}@batyr.db.elephantsql.com/cixbhgbm`;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    //console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

/* Table Names:
  burialplan
  checklist
  userinfo
  service
*/
