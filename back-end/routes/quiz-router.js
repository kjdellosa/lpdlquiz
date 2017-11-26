const router = require('express').Router();
const QuizController = require('../controllers/quiz-controller');

router.get('/find-all-categories', QuizController.findAllCategories);
router.get('/find-all-questions', QuizController.findAllQuestions);
router.get('/find-all-difficulties', QuizController.findAllDifficulties);
router.get('/find-all-highscores', QuizController.findAllHighscores);
router.post('/add', QuizController.add);
module.exports = router;
