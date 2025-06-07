const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get all questions by category
router.get('/:categoryId', async (req, res) => {
  try {
    const questions = await Question.find({ category: req.params.categoryId });
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch questions' });
  }
});

// Create a new question
router.post('/', async (req, res) => {
  try {
    const { category, author, question } = req.body;
    const newQuestion = new Question({ category, author, question });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create question' });
  }
});

// Update a question
router.put('/:id', async (req, res) => {
  try {
    const updated = await Question.findByIdAndUpdate(
      req.params.id,
      { question: req.body.question },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update question' });
  }
});

// Delete a question
router.delete('/:id', async (req, res) => {
  try {
    await Question.findByIdAndDelete(req.params.id);
    res.json({ message: 'Question deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete question' });
  }
});

module.exports = router;
