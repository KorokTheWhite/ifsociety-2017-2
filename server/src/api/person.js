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
  findAndValidate(req, res, (user) => {
    const updateUser = req.body;
    console.log(updateUser);
    if(updateUser.name)
      user.name = updateUser.name;
    if(updateUser.address)
      user.address = updateUser.address;
    
    user.save((err) => {
      if (err) 
        res.status(500).send(err);
      else
        res.send(user);
    })
  });
}

function findAndValidate(req, res, callback) {
  Person.findOne({ cpf: req.params.cpf }, (err, user) => {
    console.log(user);    
    if(user) {
      let uuid = req.get('uuid');

      if(uuid === user.uuid[0]) {
        callback(user);

        return; 
      }        
    }    
    res.status(404).send('The user was not found in database');
  })
}

function del(req, res) {
  findAndValidate(req, res, (user) => {
    Person.remove(user, (err) => {
      if(err)
        res.status(500).send(err);
      else 
        res.send('Successfully deleted.');
    })
  });
}

module.exports = router;
