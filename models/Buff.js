var mongoose = require('mongoose');

var BuffSchema = new mongoose.Schema({
  name: String,
  guild: String,
  Date: String,
  Time: String
});

module.exports = mongoose.model('Buff', BuffSchema);
