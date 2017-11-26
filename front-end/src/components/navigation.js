import React, { Component } from 'react';
import {Navbar, NavItem, Icon, SideNav, SideNavItem, Button,
Dropdown, Manage} from 'react-materialize'

export default class Home extends Component{
  render(props){
    return(
      <div>
      <header>

      <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!" class="black-text text-darken-1">View/Edit Questions</a></li>
      <li><a href="#!" class="black-text text-darken-1">Add Question</a></li>
      <li><a href="#!" class="black-text text-darken-1">Delete Question</a></li>
      <li class="divider"></li>
      <li><a href="#!" class="black-text text-darken-1">View/Edit Categories</a></li>
      <li><a href="#!" class="black-text text-darken-1">Add Category</a></li>
      <li><a href="#!" class="black-text text-darken-1">Delete Category</a></li>

      </ul>

      <nav class="red darken-3">
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">Elbi Quiz</a>
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
