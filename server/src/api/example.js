const router = require('express').Router();

router.get('/', function (req, res, next) {
    res.send('Example resource');
});

module.exports = router;