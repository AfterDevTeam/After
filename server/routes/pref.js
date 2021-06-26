const express = require('express');
const router = express.Router();

const prefController = require('../controllers/prefController');

router.get('/', (req, res) => {
  res.send('This is the API/Pref Router - it works!');
});

router.put('/', prefController.initialCreateTable, (req, res) =>
  res.status(200).send('Initial Setup')
);

router.post('/store/:id', prefController.storePreferences, (req, res) =>
  res.status(200).send('Storing Preferences')
);

router.get('/fetch/:id', prefController.fetchPreferences, (req, res) =>
  res.status(200).send(res.locals.fetchedPreferences)
);



router.put(
  `/burialcreate`,
  prefController.createBurialTable,
  (req, res) => res.status(200).send("Burial Table created")
)

// When creating burialPlan, userid(/:id) should be given
router.post(
  '/burialplan',
  prefController.storeBurialPreferences,
  (req, res) => res.status(200).send("Burial Table stored")
)

module.exports = router;
