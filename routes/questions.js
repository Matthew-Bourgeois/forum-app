const express = require('express');
const router = express.Router();
const {
  getQuestionsByCategory,
  createQuestion,
  answerQuestion
} = require('../controllers/questionController');

router.get('/:categoryId', getQuestionsByCategory);
router.post('/', createQuestion);
router.put('/:id/answer', answerQuestion);

module.exports = router;
