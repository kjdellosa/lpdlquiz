import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import StartPage from './components/startpage.js';
import Manage from './components/manage-quiz.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="content-container">
          <Route exact={true} path="/" component={StartPage}/>
          <Route exact={true} path="/manage" component={Manage}/>

        </div>
      </Router>
    );
  }
}

export default App;
