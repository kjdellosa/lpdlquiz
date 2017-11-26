import React, { Component } from 'react';

import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input, Collection, CollectionItem} from 'react-materialize';


// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  render(props){
    return(
      <div>
      <Col s={12} m={3}>
        <div class="card">
          <div class="card-content">
            <h5>Question</h5>
            <h6>Choices</h6>
            <ul>
              <li>Choice A</li>
              <li>Choice B</li>
              <li>Choice C</li>
              <li>Choice D</li>
            </ul>
            <h6>Answer</h6>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">delete</i></a>
            <ul>
              <li>Choice A</li>
            </ul>
          </div>
        </div>
      </Col>
      </div>
    )
  }
}
