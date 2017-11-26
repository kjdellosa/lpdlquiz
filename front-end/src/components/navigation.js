import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

export default class Home extends Component{
  render(props){
    return(
      <div>
      <Navbar className="red darken-2" brand="Elbi Quiz" right>
        <NavItem href='#'>Manage</NavItem>
      </Navbar>
      </div>
    )
  }
}
