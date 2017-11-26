import React, { Component } from 'react';
import Nav from './navigation.js';
import Footer from './footer.js';
import {Collection, CollectionItem, Icon, SideNavItem, SideNav, Button} from 'react-materialize';

export default class Home extends Component{
  render(props){
    return(
      <div>
        <Nav />

        <div id="pagecontent">
          
        </div>

        <Footer/>
      </div>
    )
  }
}
