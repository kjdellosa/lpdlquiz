const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
	question: {type: String, default:''},
	category: {type: String, default:''},
	difficulty: {type: String, default:''},
	choices: [{type: String, default:''}, {type: String, default:''}, {type: String, default:''}, {type: String, default:''}],
	answer: {type: String, default:''}
});

const CategorySchema = new mongoose.Schema({
	categoryName: {type: String, default:''}
});

const DifficultySchema = new mongoose.Schema({
	difficulty: {type: String, default: ''},
	scorePerItem: {type: Number, default:''}
});

const HighScoreSchema = new mongoose.Schema({
	name: {type: String, default:''},
	score: {type: Number, default:''},
	categoriesChosen: {type: String, default:''}
});

mongoose.model('Question', QuestionSchema);
mongoose.model('Category', CategorySchema);
mongoose.model('Difficulty', DifficultySchema);
mongoose.model('HighScore', HighScoreSchema);