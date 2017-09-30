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

router
  .route('/:cnpj/donations')
    .get(getDonations);

router 
  .route('/:cnpj/:state')
    .get(getDonationsByState);

router
  .route('/:cnpj/:donationId') // :donation is a id
    .get(getOneDonation);

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

function getDonations(req, res) {
  Organization.find(req.params.cnpj)
  .select('donation')
  .exec((err, donation) => {
    if (err) res.status(500).send();

    if (donation) res.send(donation);
  });
}

function getDonationsByState(req, res) {
  Organization.find(req.params.cnpj)
  .select({'donation': { $elemMatch: {'state': res.params.state}}})
  .exec((err, donation) => {
    if (err) res.status(500).send();

    if (donation) res.send(donation);
  })
}

function getOneDonation(req, res) {
  Organization.find(req.params.cnpj)
  .select({'donation': { $elemMatch: {'_id': req.params.donationId}}})
  .exec((err, donation) => {
    console.log(donation);
    if (err) res.status(500).send();

    if (donation) res.send(donation);
  });
}

function getDonations(req, res) {
  Organization.find(req.params.cnpj)
  .select('donation')
  .exec((err, donation) => {
    if (err) res.status(500).send();

    if (donation) res.send(donation);
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
      
    org.save((err) => {
      if (err) res.status(500).send(err);
      else 
        res.send(org);
    })
  })
}

function del(req, res) {  
  findAndValidate(req, res, (org) => {
    org.remove((err, result) => {
      if(err)
        res.status(500).send(err);
      else {
        res.send(result);
      }
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
