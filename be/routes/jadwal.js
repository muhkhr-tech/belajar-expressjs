var express = require('express');
var router = express.Router();
var controller = require('../controller/jadwal.controller')

router.get('/', controller.get);
router.post('/:dokterId', controller.create);
router.post('/:dokterId/generate', controller.generate);

module.exports = router;
