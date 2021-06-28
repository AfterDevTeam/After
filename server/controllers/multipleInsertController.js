const pgp = require('pg-promise')({
  capSQL: true, //captialize all genereated SQL
});
const db = pgp(
  'postgres://cixbhgbm:g8ed4jT6WbNDz0m-hfCTuqzIJnaFR_jq@batyr.db.elephantsql.com/cixbhgbm'
);

const multipleInsertController = {};

multipleInsertController.populateGuestList = async (req, res, next) => {
  // Identify which user
  const userid = req.params.id;

  // Test.
  const values = [
    {
      name: 'Cartman',
      pallbearer: true,
      eulogies: true,
    },
    {
      name: 'Kyle',
      pallbearer: true,
      eulogies: true,
    },
    {
      name: 'Stan',
      pallbearer: true,
      eulogies: false,
    },
    {
      name: 'Kenny',
      pallbearer: false,
      eulogies: true,
    },
    {
      name: 'Randy',
      pallbearer: true,
      eulogies: false,
    },
    {
      name: 'Butters',
      pallbearer: true,
      eulogies: false,
    },
    {
      name: 'Craig',
      pallbearer: true,
      eulogies: false,
    },
    {
      name: 'Mr.Towlie',
      pallbearer: true,
      eulogies: false,
    },
  ];

  // pg-promise specific function.
  const cs = new pgp.helpers.ColumnSet(['name', 'pallbearer', 'eulogies'], {
    table: `guestlist_${userid}`,
  });

  // Insert query for one object or an array of objects
  const query =
    pgp.helpers.insert(values, cs) + 'ON CONFLICT (name) DO NOTHING';

  await db.none(query);

  next();
};

module.exports = multipleInsertController;
