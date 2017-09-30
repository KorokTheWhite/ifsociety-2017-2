const router = require('express').Router();
const Person = require('../schemas/person');
const createDonation = require('../factory/donationFactory');
router
  .route('/')
    .post(post)

router
  .route('/pendent/:cpf')
    .get(getPendent);

router
  .route('/accepted/:cpf')
    .get(getAccepted);

router
  .route('/expired/:cpf')
    .get(getExpired);

router
  .route('/completed/:cpf')
    .get(getCompleted);

router
  .route('/incompleted/:cpf')
    .get(getIncompleted);

router
  .route('/cancelled/:cpf')
    .get(getCancelled);

router
  .route('/:id')
     .put(put)
     .get(getOne)
     .delete(del);

function getPendent(req, res) {
  getDonation(req, res, 'Pendent');
}

function getAccepted(req, res) {
  getDonation(req, res, 'Accepted');
}

function getExpired(req, res) {
  getDonation(req, res, 'Expired');
}

function getCompleted(req, res) {
  getDonation(req, res, 'Completed');
}

function getIncompleted(req, res) {
  getDonation(req, res, 'Incompleted');
}

function getCancelled(req, res) {
  getDonation(req, res, 'Cancelled');
}

function getDonation(req, res, param) {

  Person.findOne({ 'cpf': req.params.cpf })
    .select('donation')
    .exec(function(err, donations) {
      if (err)
        res.status(500).send(err);
      else{
        if(donations)
          res.send(donations
          .donation
          .filter((d) => d.state === param));
        else
            res.status(400).send();
      }                
  });   
}

function getOne(req, res) {
  Person.find({ 'donation._id': req.params.id })
        .select('donation')
        .exec(function(err, donation) {
          if(!err){
            if(donation)
              res.send(donation);
            else 
              res.status(404).send('not found');
          } else
            res.status(500).send(err);        
        })
}

function post(req, res) {
  let donation = createDonation(req.body);

  if (donation) {
    let uuid = req.get('uuid');
    Person.findByUuid(uuid, (err, person) => {
      if (err) {
        req.status(500).send(err);
        return;
      }
      else if (person.donation){
        person.donation.push(donation);

      }
      else {
        person.donation = [];
        person.donation.push(donation);
      }

      person.save((err) => {
        if (err) 
          res.status(500).send(err);
        else
          res.send(person);
      });
      
    })
  }
  else 
    res.status(400).send('Invalid parameters');  

} 


function put(req, res) {
  let uuid = req.get('uuid');
  Person.findByUuid(uuid, (err, person) => {
    if (!err) {
      Person.find({ 'donation._id': req.params.id })
            .update({ 'donation._id': req.params.id }, { 
              '$set': 
              {
                'donation.$.name': req.body.name,
                'donation.$.state': req.body.state,
                'donation.$.products': req.body.products
              } 
            }, (err, person) => {
              if (!err)
                res.send(person);
              else
                res.send(err);
            })
    }
  })
}

function del (req, res) {
  let uuid = req.get('uuid');
  Person.findByUuid(uuid, (err, person) => {
    if (person) {
      
      if (person.uuid[0] === uuid) 
        Person.find({ 'donation._id': req.params.id})
              .update({ 'donation._id': req.params.id }, {
                '$set': { 'donation.$.state': 'Cancelled' }
              }, (err, person) => {
                if(!err)
                  res.send(person);
                else
                  res.send(err);
              })
    }
  })

}

module.exports = router;
