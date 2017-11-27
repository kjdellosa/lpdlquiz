import React, { Component } from 'react';

import {Col, Input, Row, Collection, CollectionItem} from 'react-materialize';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      enableEdit: false,

      _id: this.props._id,
      question: this.props.question,
      category: this.props.category,
      difficulty: this.props.difficulty,
      choices: this.props.choices,
      answer: this.props.answer
    }

    this.handleEditClicked = this.handleEditClicked.bind(this);
    this.newQuestion = this.newQuestion.bind(this);
    this.handleDifficultyChoice = this.handleDifficultyChoice.bind(this);
    this.newChoiceA = this.newChoiceA.bind(this);
    this.newChoiceB = this.newChoiceB.bind(this);
    this.newChoiceC = this.newChoiceC.bind(this);
    this.newChoiceD = this.newChoiceD.bind(this);
    this.newAnswer = this.newAnswer.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    let newChoices = this.state.choices.slice();
  }

  handleEditClicked(){
    if(this.state.enableEdit == true){
      this.setState({
        enableEdit: false
      });
    }else {
      this.setState({
        enableEdit: true
      });
    }
  }

  newQuestion(e){
    console.log(e.target.value);
  }

  handleDifficultyChoice(e){
    console.log(e.target.value);
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
    let id = this.state._id
    console.log(id);
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
     if(this.state.enableEdit){
        return(
        <div>
        <Col s={12} m={4}>
          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="input-field col s12">
                <input defaultValue={this.props.question} id="question" type="text" class="validate" onChange={this.newQuestion}/>
                <label class="active" for="question">Question</label>
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
                <input defaultValue={this.props.choices[0]} id="choice" type="text"
                       onChange={this.newChoiceA}/>
                <label class="active" for="choice">Choice A</label>
                </div>

                <div class="input-field col s12">
                <input defaultValue={this.props.choices[1]} id="choice" type="text"
                       onChange={this.newChoiceB}/>
                <label class="active" for="choice">Choice B</label>
                </div>

                <div class="input-field col s12">
                <input defaultValue={this.props.choices[2]} id="choice" type="text"
                       onChange={this.newChoiceC}/>
                <label class="active" for="choice">Choice C</label>
                </div>

                <div class="input-field col s12">
                <input defaultValue={this.props.choices[3]} id="choice" type="text"
                       onChange={this.newChoiceD}/>
                <label class="active" for="choice">Choice D</label>
                </div>

                <div class="input-field col s12">
                <input defaultValue={this.props.answer} id="answer" type="text"
                       onChange={this.newAnswer}/>
                <label class="active" for="answer">Answer</label>
                </div>
              </div>
              <a onClick={this.handleEditClicked} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
            </div>
            <div class="card-action">
              <a class="waves-effect waves-light btn red darken-3" onClick={this.handleSubmit}>Edit</a>
            </div>
          </div>
        </Col>
        </div>
      )
    }else{
      return(
        <div>
        <Col s={12} m={3}>
          <div class="card">
            <div class="card-content" key={this.props._id}>
              <h5>{this.props.question}</h5>
              <h6>Difficulty</h6>
                <ul>
                  <li>{this.props.difficulty}</li>
                </ul>
              <h6>Choices</h6>
              <ol type="A">
                <li>{this.props.choices[0]}</li>
                <li>{this.props.choices[1]}</li>
                <li>{this.props.choices[2]}</li>
                <li>{this.props.choices[3]}</li>
              </ol>
              <h6>Answer</h6>
              <ul>
                <li>{this.props.answer}</li>
              </ul>
              <a onClick={this.handleEditClicked} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
            </div>
          </div>
        </Col>
        </div>
      )
    }
  }
}
