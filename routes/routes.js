const express = require('express');
const controller = require('../controller/controller.js');
const router = express.Router();


router.get('/test', controller.test)

router.post('/create', controller.product_create)

//router.get('/:id', controller.product_details )

router.get('/random', controller.random_details )

module.exports = router;