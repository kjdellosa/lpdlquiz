const router = require('express').Router();
const QuizController = require('../controllers/quiz-controller');

router.get('/find-all-categories', QuizController.findAllCategories);
router.get('/find-all-questions', QuizController.findAllQuestions);
router.get('/find-all-difficulties', QuizController.findAllDifficulties);
router.get('/find-all-highscores', QuizController.findAllHighscores);
router.post('/add-category', QuizController.addcategory);
router.post('/add-question', QuizController.addquestion);
router.post('/delete-category', QuizController.deletecategory);
router.post('/delete-question', QuizController.deletequestion);

router.get('/find-all-questions-by-category/:category', QuizController.findAllQuestionsByCategory);
module.exports = router;