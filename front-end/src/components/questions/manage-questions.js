import React, { Component } from 'react';
import Nav from '../navigation.js';
import Footer from '../footer.js';
import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input, Collection, CollectionItem} from 'react-materialize';

import ManageMenu from './manage-menu.js';
import DeleteCard from './delete-card.js';
import ViewCard from './view-card.js';
import EditCard from './edit-card.js';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      view: true,
      edit: false,
      add: false,
      delete: false,
      categories: ["History", "Kainan", "Geography"]
    }

    this.handleChoice1 = this.handleChoice1.bind(this);
    this.handleChoice2 = this.handleChoice2.bind(this);
    this.handleChoice3 = this.handleChoice3.bind(this);
    this.handleChoice4 = this.handleChoice4.bind(this);
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
                          choice4={this.handleChoice4}/>
              <ViewCard />
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
                          choice4={this.handleChoice4}/>
              <EditCard />
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
                          categories={this.state.categories}/>
              <DeleteCard />
            </Row>
          </main>

          <Footer/>
        </div>
      )
    }
  }
}
