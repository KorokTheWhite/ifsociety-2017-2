const router = require('express').Router();

const example = require('./example');
const organization = require('./organization');

router.use('/example', example);
router.use('/organization', organization);

module.exports = router;