const mongoose = require('mongoose');
const MODEL_NAME = 'Organization';
const STATE = ['A', 'D', 'P'];
const organizationSchema = mongoose.Schema({
  name: String,
  email: String,
  uuid: { type: [String], index: true },
  cnpj: String,
  cnas: String,
  donation: [{
    person: Object,
    date: { type: Date, default: Date.now },
    state: { type: String, enum: STATE, default: 'P' },
    products: [{
      name: String,
      type: { type: Boolean, default: true },
      quantity: Number
    }]
  }]
});

organizationSchema.methods.findByUuid = function (cb) {
  return this.model(MODEL_NAME).find({ uuid: this.uuid }, cb);
}

organizationSchema.statics.findByCnpj = function (cnpj, cb) {
  return this.find({ cnpj: cnpj }, cb);
}

organizationSchema.methods.findByCnas = function (cb) {
  return this.model(MODEL_NAME).find({ cnas: this.cnas }, cb);
}

module.exports = mongoose.model(MODEL_NAME, organizationSchema);
