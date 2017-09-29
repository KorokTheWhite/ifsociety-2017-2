const mongoose = require('mongoose');
const MODEL_NAME = 'Example'

const exampleSchema = new mongoose.Schema({
    name: String
});

exampleSchema.methods.findNamedExamples = function (cb) {
    return this.model(MODEL_NAME).find({ name: this.name }, cb);
}

module.exports = mongoose.model(MODEL_NAME, exampleSchema);