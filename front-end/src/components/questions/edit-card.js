import React, { Component } from 'react';

import {Col} from 'react-materialize';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  render(props){
    return(
      <div>
      <Col s={12} m={3}>
        <div class="card">
          <div class="card-content" key={this.props._id}>
            <h5>{this.props.question}</h5>
            <h6>Choices</h6>
            <ol type="A">
              <li>{this.props.choices[0]}</li>
              <li>{this.props.choices[1]}</li>
              <li>{this.props.choices[2]}</li>
              <li>{this.props.choices[3]}</li>
            </ol>
            <h6>Answer</h6>
            <ul>
              <li>{this.props.answer}</li>
            </ul>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">edit</i></a>
          </div>
        </div>
      </Col>
      </div>
    )
  }
}
