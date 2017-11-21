Back-end
> Mongo database
  - Generate questions per category (5 categoriesd)
    + 5 easy
    + 5 medium
    + 5 hard

  - Schema
    Questions = {
      Question:
      Type:
      Difficulty:
      Answer
    }

    Category = {
      Name:
    }

    Difficulty = {
      Score:
    }

    Highscore = {
      Name:
      Score:
      Categories chosen:
    }

> API
  - Routes
  - Distribution of questions according to difficulty depending on # of questions chosen by user

Front-end
> Database Management
  - Questions
    + View
    + Edit
    + Add
  - Category
    + View
    + Edit
    + Add
    + Delete
> Interface
  - Quiz Proper
    + Ask username --> Select 3 Categories --> Select # of questions --> Quiz score at end --> Display high scorers
  - API fetching

Technologies
  - React
  - Node
  - MongoDB
  - MaterializeCSS
