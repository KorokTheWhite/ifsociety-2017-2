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
  Organization.find({}, '', (err, orgs) => {
    if (err)
      res.status(400).send(err);
    
    res.send(orgs);
  });
}

function post(req, res) {
  const organization = createOrganization(req.body);

  if (organization)
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
  Organization.findOneAndRemove({ cnpj: req.body.cnpj }, (err, org) => {
    if (err)
      res.status(400).send(err);

    if(org)
      res.status(204).send();

    res.status(404).send('The organization was not found in database');
  })
}

module.exports = router;
