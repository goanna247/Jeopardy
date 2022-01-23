const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  session: { type: Number, required: true },
}, {
  timestamps: false,
});

const User = mongoose.model('users', userSchema);

module.exports = User;