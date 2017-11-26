import React, { Component } from 'react';
import Nav from '../navigation.js';
import Footer from '../footer.js';
import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input, Collection, CollectionItem} from 'react-materialize';

import ManageMenu from './manage-menu.js';
import DeleteCard from './delete-card.js';
import ViewCard from './view-card.js';
import EditCard from './edit-card.js';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  render(props){
    return(
      <div>
        <Nav />

        <main>
          <br />
          <h5 class="center-align">Manage Questions</h5>

          <Row>
            <ManageMenu />
            <DeleteCard />
            <ViewCard />
            <EditCard />
          </Row>
        </main>

        <Footer/>
      </div>
    )
  }
}
