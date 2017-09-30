const router = require('express').Router();
const Person = require('../schemas/person');
const createDonation = require('../factory/donationFactory');
router
  .route('/')
    .post(post)
    //.put(put);

router
  .route('/pendent')
    .get(getPendent);

router
  .route('/:id')
     .put(put)
     .get(getOne)
//     .delete(del);

function getPendent(req, res) {
  Person.find({ 'donation.state': 'Pendent' })
        .select('donation')
        .exec(function(err, donations) {
          if (err)
            res.status(500).send(err);
          else
            res.send(donations);
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

module.exports = router;