import React, { Component } from 'react';
import Nav from './navigation.js';
import Footer from './footer.js';
import Banner from './startpage/index-banner.js';
import Cards from './startpage/category-cards.js'

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
