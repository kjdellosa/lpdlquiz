import React, { Component } from 'react';
import {Dropdown, NavItem, Button} from 'react-materialize';
// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  render(props){
    return(
      <div>
      <Dropdown
      trigger={
      		<Button class="red darken-4">Category</Button>
      }
      >

      </Dropdown>
      </div>
    )
  }
}
