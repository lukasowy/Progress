var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciceSchema = new Schema({
  title: String,
  rips: [
    {
      rip: Number,
      data: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

var Exercice = mongoose.model('Exercice', exerciceSchema);

module.exports = Exercice;
