const Question = require('../models/Question');

// Get all questions for a category
exports.getQuestionsByCategory = async (req, res) => {
  try {
    const questions = await Question.find({ category: req.params.categoryId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Post a new question
exports.createQuestion = async (req, res) => {
  try {
    const { category, author, question } = req.body;
    const newQuestion = new Question({ category, author, question });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Add or update answer
exports.answerQuestion = async (req, res) => {
  try {
    const { answer } = req.body;
    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      { answer },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
