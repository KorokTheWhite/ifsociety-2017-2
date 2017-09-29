var Organization = require('../schemas/organization');

function createOrganization(obj) {
    if(isValid(obj))
      return new Organization(obj);
    
    return false;
}

function isValid(obj) {    
  return obj.name && obj.email && obj.uuid && obj.cnpj && obj.cnas;
}

module.exports = createOrganization;