import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StartPage from './components/startpage.js';
import EditQuestions from './components/edit-questions.js';
import AddQuestions from './components/edit-questions.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="content-container">
          <Route exact={true} path="/" component={StartPage}/>
          <Route exact={true} path="/questions/edit" component={EditQuestions}/>
          <Route exact={true} path="/questions/add" component={AddQuestions}/>
        </div>
      </Router>
    );
  }
}

export default App;
