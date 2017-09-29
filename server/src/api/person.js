const router = require('express').Router();

router
  .route('/')
    .get(get)
    .post(post)
    .put(put)
    .delete(del);

function get(req, res) {
  res.send('Hello Leu');
}

function post(req, res) {
  res.send('Ok');
}

function put(req, res) {
  res.send('Hello Leu');
}

function del(req, res) {
  res.send('Hello Leu');
}

module.exports = router;
