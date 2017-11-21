import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

export default class Home extends Component {
  render(props){
    return(
      <Navbar className="red darken-4" brand="Elbi Quiz" right>
      	<NavItem href='#'><Icon>search</Icon></NavItem>
      	<NavItem href='#'><Icon>view_module</Icon></NavItem>
      </Navbar>
    )
  }
}
