const mongoose = require('mongoose');
const MODEL_NAME = 'Person';
const STATE = ['A', 'D', 'P']; // A: Accept D: Dennied P: Pendent

const personSchema = new mongoose.Schema({
  name: String,
  email: String,
  uuid: { type: [String], index: true },
  cpf: String,
  address: String,
  donation: [{
    name: String,
    date: { type: Date, default: Date.now },
    state: { type: String, enum: STATE, default: 'P' },
    products: [{
      name: String,
      type: { type: Boolean, default: true }, // Is perecivel
      quantity: Number
    }]
  }]
});

personSchema.methods.findByUuid = function (cb) {
  return this.model(MODEL_NAME).find({ uuid: this.uuid }, cb);
}

personSchema.statics.findByCpf = function (cpf, cb) {
  return this.find({ cpf: cpf }, cb);
}

personSchema.methods.insertOne = function (cb) {
  return this.model(MODEL_NAME).save(cb);
}

module.exports = mongoose.model(MODEL_NAME, personSchema);
