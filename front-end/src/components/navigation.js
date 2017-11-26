import React, { Component } from 'react';

export default class Home extends Component{
  render(props){
    return(
      <div>
      <header>

      <ul id="dropdown1" class="dropdown-content">
        <li><a href="/manage/questions" class="black-text text-darken-1">Questions</a></li>
        <li class="divider"></li>
        <li><a href="#!" class="black-text text-darken-1">Categories</a></li>
      </ul>

      <nav class="red darken-3">
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">Elbi Quiz</a>
        <ul class="right hide-on-med-and-down">
          <li><a class="dropdown-button" href="#!" data-activates="dropdown1"
          data-beloworigin="true" data-constrainWidth="false">Manage<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
      </div>
      </nav>

      </header>
      </div>
    )
  }
}
