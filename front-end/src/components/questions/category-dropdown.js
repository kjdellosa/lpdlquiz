import React, { Component } from 'react';
import {Dropdown, NavItem, Button} from 'react-materialize';
// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>


export default class Home extends Component{
  constructor(props){
      super(props);

      this.state = {
        categories: this.props.categories
      }
  }

  render(props){
    return(
      <div>
      <Dropdown
      trigger={<Button class="red darken-4">Category</Button>}
      >{
        this.state.categories.map((category) => {
          return (
            <NavItem>{category}</NavItem>)
        })
      }</Dropdown>
      </div>
    )
  }
}
