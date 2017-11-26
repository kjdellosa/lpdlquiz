import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StartPage from './components/startpage.js';
import ManageQuestions from './components/questions/manage-questions.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="content-container">
          <Route exact={true} path="/" component={StartPage}/>
          <Route exact={true} path="/manage/questions" component={ManageQuestions}/>
        </div>
      </Router>
    );
  }
}

export default App;
