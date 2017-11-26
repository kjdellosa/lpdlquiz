import React, { Component } from 'react';
import Nav from './navigation.js';
import Footer from './footer.js';

export default class Home extends Component{
  render(props){
    return(
      <div>
        <Nav />
        <Footer />
      </div>
    )
  }
}
