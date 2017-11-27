import React, { Component } from 'react';

import {Col, Input, Row, Collection, CollectionItem} from 'react-materialize';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      question: '',
      category: this.props.category,
      difficulty: '',
      choices: [],
      answer: ''
    }

    this.newQuestion = this.newQuestion.bind(this);
    this.handleDifficultyChoice = this.handleDifficultyChoice.bind(this);
    this.newChoiceA = this.newChoiceA.bind(this);
    this.newChoiceB = this.newChoiceB.bind(this);
    this.newChoiceC = this.newChoiceC.bind(this);
    this.newChoiceD = this.newChoiceD.bind(this);
    this.newAnswer = this.newAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  newQuestion(e){
    console.log(e.target.value);
    this.setState({
      question: e.target.value
    });
  }

  handleDifficultyChoice(e){
    console.log(e.target.value);
    this.setState({
      difficulty: e.target.value
    });
  }

  newChoiceA(e){
    let newChoices = this.state.choices.slice();
    newChoices[0] = e.target.value
    this.setState({choices: newChoices});
    console.log(this.state.choices);
  }

  newChoiceB(e){
    let newChoices = this.state.choices.slice();
    newChoices[1] = e.target.value
    this.setState({choices: newChoices});
    console.log(this.state.choices);
  }

  newChoiceC(e){
    let newChoices = this.state.choices.slice();
    newChoices[2] = e.target.value
    this.setState({choices: newChoices});
    console.log(this.state.choices);
  }

  newChoiceD(e){
    let newChoices = this.state.choices.slice();
    newChoices[3] = e.target.value
    this.setState({choices: newChoices});
    console.log(this.state.choices);
  }

  newAnswer(e){
    console.log(e.target.value);
    this.setState({
      answer: e.target.value
    });
  }

  handleSubmit(e){
    console.log(this.state);

    // fetch('http://localhost:3001/quiz/delete-question', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(id)
    // }).then((response) => {
    //   return response.json();
    // }).then((result) => {
    //   console.log(result);
    // })
    // e.preventDefault();
  }

  render(props){
      return(
      <div>
      <Col s={12} m={4}>
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="input-field col s12">
              <input id="question" type="text" class="validate" onChange={this.newQuestion}/>
              <label for="question">Question</label>
              </div>

              <Collection >
              <CollectionItem>
              <h6>Difficulty</h6>
              <Input name="g1"
                     value="Easy"
                     label="Easy"
                     type="radio"
                     onClick={this.handleDifficultyChoice}
              />

              <Input name="g1"
                     value="Medium"
                     label="Medium"
                     type="radio"
                     onClick={this.handleDifficultyChoice}
              />

              <Input name="g1"
                     value="Hard"
                     label="Hard"
                     type="radio"
                     onClick={this.handleDifficultyChoice}
              />
              <br/>
              </CollectionItem>
              </Collection>

              <div class="input-field col s12">
              <input id="choice" type="text"
                     onChange={this.newChoiceA}/>
              <label class="active" for="choice">Choice A</label>
              </div>

              <div class="input-field col s12">
              <input id="choice" type="text"
                     onChange={this.newChoiceB}/>
              <label for="choice">Choice B</label>
              </div>

              <div class="input-field col s12">
              <input id="choice" type="text"
                     onChange={this.newChoiceC}/>
              <label for="choice">Choice C</label>
              </div>

              <div class="input-field col s12">
              <input id="choice" type="text"
                     onChange={this.newChoiceD}/>
              <label for="choice">Choice D</label>
              </div>

              <div class="input-field col s12">
              <input id="answer" type="text"
                     onChange={this.newAnswer}/>
              <label for="answer">Answer</label>
              </div>
            </div>
          </div>
          <div class="card-action">
            <a class="waves-effect waves-light btn red darken-3" onClick={this.handleSubmit}>Add</a>
          </div>
        </div>
      </Col>
      </div>
    )
  }
}
