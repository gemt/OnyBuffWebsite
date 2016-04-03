var mongoose = require('mongoose');

var BuffSchema = new mongoose.Schema({
  name: {
	  type:String,
	unique:true,
	},
  guild: String,
  date: String,
  time: String
});

module.exports = mongoose.model('Buff', BuffSchema);
