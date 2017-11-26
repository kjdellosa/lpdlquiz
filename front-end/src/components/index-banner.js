import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

export default class Home extends Component{
  render(props){
    return(
      <div>
      <div class="section no-pad-bot" id="index-banner">
        <div class="container">
          <br></br>
          <h1 class="header center red-text">The Elbi Quiz!</h1>
          <div class="row center">
          <h5 class="header col s12 light">A general information quiz about Los Banos</h5>
        </div>

        <div class="row center">
          <a href="#" id="download-button" class="btn-large waves-effect waves-light red">Start the Quiz!</a>
          </div>
          <br></br>
        </div>
      </div>
      </div>
    )
  }
}
