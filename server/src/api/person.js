const router = require('express').Router();
const Person = require('../schemas/person');
const createPerson = require('../factory/personFactory');

router
  .route('/')
  .get(getAllUsers)
  .post(post);

router
  .route('/:cpf')
  .get(getUserByCpf)
  .put(put)
  .delete(del);

// router
//   .route('/donation')
//   .get(getDonation)
//   .put(updateDonate)
//   .delete(delDonation);

function getAllUsers(req, res) {
  Person.find({}, function (err, person) {
    if (err) {
      res.status(400).send('Ops');
      next();
    }
    res.send(person);
  })
}

function getUserByCpf(req, res) {
  const cpf = req.params.cpf;
  Person.findByCpf(cpf, function (err, foundObject) {
    if (err) {
      console.log(err);
      res.send(500).send();
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        res.send(foundObject);
      }
    }
  })
}

function post(req, res) {
  const person = createPerson(req.body);

  if (person) {
    person.save(() => {
      res.status(201).send(person);
    });
  } else {
    res.status(400).send('Invalid object');
  }
}

function put(req, res) {
  const cpf = req.params.cpf;
  const user = {};
  const userData = req.body[0];

  Person.findOne({
    cpf: cpf
  }, function (err, foundObject) {

    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      if (!foundObject) {
        console.log(foundObject);
        res.status(404).send();
      } else {
        if (userData.name) {
          user.name = userData.name;
        }

        if (userData.email) {
          user.email = userData.email;
        }

        if (userData.address) {
          user.address = userData.address;
        }

        foundObject.save(function (err, updateObject) {
          if (err) {
            res.status(500).send();
          } else {
            res.send(updateObject);
          }
        });
      }
    }
  });
}

function del(req, res) {
  res.status(200).send();
}

module.exports = router;
