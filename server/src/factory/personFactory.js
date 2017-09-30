const Person = require('../schemas/person');

function createNewPerson(obj) {
  if(isValid(obj))
    return new Person(obj);
  
    return false;
}

function isValid(obj) {
  console.log(obj);
  return obj.name && obj.email && obj.uuid && obj.cpf && obj.address;
}

module.exports = createNewPerson;
