import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

import StartPage from './components/startpage.js';
import QuestionPage from './components/questionpage.js';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div id="content-container">
            <Route exact={true} path="/" component={StartPage}/>
            <Route exact={true} path="/questionpage" component={QuestionPage}/>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
