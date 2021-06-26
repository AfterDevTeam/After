const { Pool } = require('pg');

const PG_URI =
  'postgres://cixbhgbm:g8ed4jT6WbNDz0m-hfCTuqzIJnaFR_jq@batyr.db.elephantsql.com/cixbhgbm';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
