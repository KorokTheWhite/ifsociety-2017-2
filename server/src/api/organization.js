const router = require('express').Router();
const Organization = require('../schemas/organization');
const createOrganization = require('../factory/organizationFactory');

router
  .route('/')
    .get(getAll)
    .post(post);

router
  .route('/:cnpj')
    .get(getOne)
    .put(put)
    .delete(del);

function getAll(req, res) {
  Organization.find({}, (err, orgs) => {
    if (err)
      res.status(400).send(err);

    res.send(orgs);
  });
}

function getOne(req, res) {
  Organization.findByCnpj(req.params.cnpj, (err, org) => {
    if (err) res.status(500).send();

    if (org.length > 0) res.send(org);
    else 
      res.status(404).send('Organization not found');
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
  findAndValidate(req, res, (org) => {
    const updatedOrg = req.body[0];

    if (updatedOrg.name)
      org.name = updatedOrg.name;
    if (updatedOrg.email)
      org.email = updatedOrg.email;
      
    org.save((err) => {
      if (err) res.status(500).send(err);
      else 
        res.send(org);
    })
  })
}

function del(req, res) {  
  findAndValidate(req, res, (org) => {
    Organization.remove(org, (err) => {
      if(err)
        res.status(500).send(err);
      else
        res.send('Successfully deleted.');
    });
  });
}

function findAndValidate(req, res, callback) {
  Organization.findOne({ cnpj: req.params.cnpj }, (err, org) => {    
    if(org) {
      var uuid = req.get('uuid');

      if(uuid === org.uuid[0]) {
        callback(org);

        return; 
      }        
    }    
    res.status(404).send('The organization was not found in database');
  })
}

module.exports = router;
