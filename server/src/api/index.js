const router = require('express').Router();

const example = require('./example');
const person = require('./person');

router.use('/example', example);
router.use('/person', person);

module.exports = router;
