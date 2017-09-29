const router = require('express').Router();
const Organization = require('../schemas/organization');
const createOrganization = require('../factory/organizationFactory');

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
  var organization = createOrganization(req.body);

  if(organization)
    organization.save(() => {
      res.status(201).send(organization);
    });
  else
    res.status(400).send('Invalid object');
    
}

function put(req, res) {
  res.send('failed');
}

function del(req, res) {
  res.send('Deleted');
}

module.exports = router;
