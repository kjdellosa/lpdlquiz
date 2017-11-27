const Question = require('mongoose').model('Question', 'quizcon.questions');
const Category = require('mongoose').model('Category', 'quizcon.category');
const Difficulty = require('mongoose').model('Difficulty', 'quizcon.difficulty');
const HighScore = require('mongoose').model('HighScore', 'quizcon.highscore');

exports.findAllCategories = (req, res) => {
  Category.find({}, (err, categories) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(categories);
    }
  });
}

exports.findAllQuestions = (req, res) => {
  Question.find({}, (err, questions) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(questions);
    }
  });
}

exports.findAllDifficulties = (req, res) => {
  Difficulty.find({}, (err, difficulties) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(difficulties);
    }
  });
}

exports.findAllHighscores = (req, res) => {
  HighScore.find({}, (err, highscores) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(highscores);
    }
  });

}

exports.addcategory = (req, res) => {
  const newCategory = new Category(req.body);

  newCategory.save((err, category) => {
    if (err) { res.send({}); }
    else {
      res.json(category);
    }
  });
}

exports.addquestion = (req, res) => {
  const newQuestion = new Question(req.body);

  newQuestion.save((err, question) => {
    if (err) { res.send({}); }
    else {
      res.json(question);
    }
  });
}

exports.findAllQuestionsByCategory = (req, res) => {
  const category = req.params.category;

  Question.find({category}, (err, questions) => {
    if (err) {
      console.log(err);
      res.send({});
    } else {
      res.send(questions);
    }
  });
}

exports.deletequestion = (req, res) => {
  const _id = req.body._id;

  Question.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
}

exports.deletecategory = (req, res) => {
  const _id = req.body._id;

  Question.remove({ _id }, (err) => {
    if (err) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
}
