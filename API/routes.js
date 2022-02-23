const express = require('express')
const router = express.Router();
const controller = require('./controller');

//create new advie
router.post('/', controller.createadvice)
//get all advices
router.get('/', controller.getadvice)

module.exports = router;


