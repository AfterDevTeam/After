const express = require('express');
const router = express.Router();

const afterController = require('../controllers/afterController')


router.get('/', 
    afterController.initialSetup,
    (req, res)=>res.status(200)    
)


router.get('/create',
    afterController.registerUser,
    (req, res) => res.status(200).json(res.locals.user)
)



module.exports = router;