"use strict"
var fetch = require('node-fetch');

const randomizeQ =() => {
  var questions = [];
  var categories = ["History", "Kainan", "Night Life"];

  var ez = [];
  var mid = [];
  var hard = [];

  var nCategories = 3;
  var nQuestions = 30;
  var QperCateg = nCategories/nQuestions;
  var nPerDiff = QperCateg/3;

  var output = [];

  fetch('http://localhost:3001/quiz/find-all-questions')
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
  });

  for(var i=0;i<categories.length;i++){
    for(var j=0;j<questions.length;j++){
      console.log(questions);
    }
    console.log(categories[i]);
  }
}

randomizeQ();
