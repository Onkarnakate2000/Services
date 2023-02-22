var express = require('express');
var router = express.Router();
let servicesController=require('../controllers/services.controller');
let upload=require('../controllers/upload')

/* GET users listing. */
router.get('/get',servicesController.getAllservices);
router.post('/create',upload.single('img'),servicesController.createservices);
router.post('/update',upload.single('img'),servicesController.updateservices);

module.exports = router;
