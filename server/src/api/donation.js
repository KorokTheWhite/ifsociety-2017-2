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

// router
//   .route('/:id')
//     .put(put)
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
      console.log(person);
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

module.exports = router;