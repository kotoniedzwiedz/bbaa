const mongoose = require('mongoose');

const Sex = {
  MALE: 'male',
  FEMALE: 'female',
  UNKNOWN: 'unknown'
}

const userSchema = mongoose.Schema({
  name: {type: String, require: true},
  surname: {type: String, require: true},
  sex: {type: Sex, require: true}
});

module.exports = mongoose.model('User', userSchema);
