var express = require('express');
var router = express.Router();
var controller = require('../controller/dokter.controller')

router.get('/', controller.get);
router.post('/', controller.create);
router.get('/:id', controller.detail);
router.put('/:id', controller.edit);
router.delete('/:id', controller.remove);

module.exports = router;
