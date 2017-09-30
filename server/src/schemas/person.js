const mongoose = require('mongoose');
const MODEL_NAME = 'Person';
const STATE = ['Accepted', 'Expired', 'Pendent', 'Completed', 'Incompleted'];

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  uuid: { type: [String], index: true },
  cpf: String,
  address: {
    street: String,
    number: String,
    neighborhood: String,
    city: String,
    state: String
  },
  donation: [{
    id: Number,
    name: String,
    date: { type: Date, default: Date.now },
    state: { type: String, enum: STATE, default: 'Pendent' },
    products: [{
      name: String,
      isPerecible: { type: Boolean, default: true },
      quantity: Number
    }]
  }]
});

personSchema.statics.findByUuid = function (uuid, cb) {
  return this.findOne({ uuid: uuid }, cb);
}

personSchema.statics.findByCpf = function (cpf, cb) {
  return this.find({ cpf: cpf }, cb);
}

personSchema.methods.insertOne = function (cb) {
  return this.model(MODEL_NAME).save(cb);
}

module.exports = mongoose.model(MODEL_NAME, personSchema);
