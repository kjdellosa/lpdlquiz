import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize';
import Nav from './navigation.js';
import Footer from './footer.js';
import Banner from './index-banner.js';
import Cards from './category-cards.js'
export default class Home extends Component {
  render(props){
    return(
      <div>
        <Nav />

        <Banner />

        <Cards />

        <Footer />
      </div>
    )
  }
}
