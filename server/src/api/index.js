const router = require('express').Router();
const example = require('./example');
const organization = require('./organization');
const person = require('./person');
const donation = require('./donation');

router.use('/example', example);
router.use('/organization', organization);
router.use('/example', example);
router.use('/person', person);
router.use('/donation', donation);

module.exports = router;
