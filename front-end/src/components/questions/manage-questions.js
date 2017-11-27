import React, { Component } from 'react';
import Nav from '../navigation.js';
import Footer from '../footer.js';
import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input, Collection, CollectionItem} from 'react-materialize';

import ManageMenu from './manage-menu.js';
import DeleteCard from './delete-card.js';
import ViewCard from './view-card.js';
import EditCard from './edit-card.js';
import AddCard from './add-question.js';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      view: false,
      edit: false,
      add: false,
      delete: false,
      categories: [],
      questions: [],
      curr_category: ""
    }

    this.getCategories = this.getCategories.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
    this.handleChoice1 = this.handleChoice1.bind(this);
    this.handleChoice2 = this.handleChoice2.bind(this);
    this.handleChoice3 = this.handleChoice3.bind(this);
    this.handleChoice4 = this.handleChoice4.bind(this);
    this.handleCategoryChoice = this.handleCategoryChoice.bind(this);
    this.getCategories();
    this.getQuestions();
  }

  getCategories(){
    fetch('http://localhost:3001/quiz/find-all-categories')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({categories: result});
    })
  }

  getQuestions(){
    fetch('http://localhost:3001/quiz/find-all-questions')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({questions: result});
    })
  }

  handleChoice1(e){
    console.log("View");
    this.setState({
      view: true,
      edit: false,
      add: false,
      delete: false,
    });
  }

  handleChoice2(e){
    console.log("Edit");
    this.setState({
      view: false,
      edit: true,
      add: false,
      delete: false,
    });
  }

  handleChoice3(e){
    console.log("Add");
    this.setState({
      view: false,
      edit: false,
      add: true,
      delete: false,
    });
  }

  handleChoice4(e){
    console.log("Delete");
    this.setState({
      view: false,
      edit: false,
      add: false,
      delete: true,
    });
  }

  handleCategoryChoice(e){
    var c = {c: e.target.value}
    console.log(c);
    this.setState({
      curr_category: e.target.value
    });
  }

  render(props){
    if(this.state.view){
      return(
        <div>
          <Nav/>
          <main>
            <br />
            <h5 class="center-align">Manage Questions</h5>
            <Row>
              <ManageMenu choice1={this.handleChoice1}
                          choice2={this.handleChoice2}
                          choice3={this.handleChoice3}
                          choice4={this.handleChoice4}
                          handler={this.handleCategoryChoice}
                          categories={this.state.categories}
              />
              {
                this.state.questions.map((question) => {
                  if(this.state.curr_category === question.category){
                    return(
                      <ViewCard _id={question._id}
                                question={question.question}
                                category={question.category}
                                difficulty={question.difficulty}
                                choices={question.choices}
                                answer={question.answer}
                      />
                    )
                  }
                })
              }
            </Row>
          </main>

          <Footer/>
        </div>
      )
    }else if(this.state.edit){
      return(
        <div>
          <Nav/>
          <main>
            <br />
            <h5 class="center-align">Manage Questions</h5>
            <Row>
              <ManageMenu choice1={this.handleChoice1}
                          choice2={this.handleChoice2}
                          choice3={this.handleChoice3}
                          choice4={this.handleChoice4}
                          handler={this.handleCategoryChoice}
                          categories={this.state.categories}
              />
              {
                this.state.questions.map((question) => {
                  if(this.state.curr_category === question.category){
                    return(
                      <EditCard _id={question._id}
                                question={question.question}
                                category={question.category}
                                difficulty={question.difficulty}
                                choices={question.choices}
                                answer={question.answer}
                      />
                    )
                  }
                })
              }
            </Row>
          </main>

          <Footer/>
        </div>
      )
    }else if(this.state.delete){
      return(
        <div>
          <Nav/>
          <main>
            <br />
            <h5 class="center-align">Manage Questions</h5>
            <Row>
              <ManageMenu choice1={this.handleChoice1}
                          choice2={this.handleChoice2}
                          choice3={this.handleChoice3}
                          choice4={this.handleChoice4}
                          handler={this.handleCategoryChoice}
                          categories={this.state.categories}
              />
              {
                this.state.questions.map((question) => {
                  if(this.state.curr_category === question.category){
                    return(
                      <DeleteCard _id={question._id}
                                question={question.question}
                                category={question.category}
                                difficulty={question.difficulty}
                                choices={question.choices}
                                answer={question.answer}
                      />
                    )
                  }
                })
              }
            </Row>
          </main>

          <Footer/>
        </div>
      )
    }else if(this.state.add){
      return(
        <div>
          <Nav/>
          <main>
            <br />
            <h5 class="center-align">Manage Questions</h5>
            <Row>
              <ManageMenu choice1={this.handleChoice1}
                          choice2={this.handleChoice2}
                          choice3={this.handleChoice3}
                          choice4={this.handleChoice4}
                          handler={this.handleCategoryChoice}
                          categories={this.state.categories}
              />
              <AddCard category={this.state.curr_category} />
            </Row>
          </main>

          <Footer/>
        </div>
      )
    }else{
      return(
        <div>
          <Nav/>
          <main>
            <br />
            <h5 class="center-align">Manage Questions</h5>
            <Row>
              <ManageMenu choice1={this.handleChoice1}
                          choice2={this.handleChoice2}
                          choice3={this.handleChoice3}
                          choice4={this.handleChoice4}
                          categories={this.state.categories}/>
            </Row>
          </main>

          <Footer/>
        </div>
      )
    }
  }
}
