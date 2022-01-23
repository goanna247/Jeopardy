const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  points: { type: Number, required: true },
  question: { type: String, required: true },
  catagory: { type: String, required: true },
  session: { type: Number, required: true }, 
}, {
  timestamps: false,
});

const Question = mongoose.model('question', questionSchema);

module.exports = Question;