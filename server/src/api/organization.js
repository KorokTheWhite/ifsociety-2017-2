const router = require('express').Router();

router
  .route('/')
    .get(get)
    .post(post)
    .put(put)
    .delete(del);

function get(req, res) {
  res.send('Hello world');
}

function post(req, res) {
  res.send('eae men');
}

function put(req, res) {
  res.send('failed');
}

function del(req, res) {
  res.send('Deleted');
}

module.exports = router;
