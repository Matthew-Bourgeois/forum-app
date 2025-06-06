const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  author: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Question', questionSchema);

