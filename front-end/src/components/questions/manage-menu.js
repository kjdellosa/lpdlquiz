import React, { Component } from 'react';
import Nav from '../navigation.js';
import Footer from '../footer.js';
import {Col, Collection, CollectionItem, Input} from 'react-materialize';
import Choice from './category-dropdown.js';

export default class Home extends Component{
  render(props){
    return(
      <div>
        <Col s={12} m={12}>
        <div id="editmenu">
          <Collection>
            <CollectionItem>
              <h6>Categories:</h6>
              <Choice categories={this.props.categories}
                      handler={this.props.handler}/>

              <h6>Options:</h6>
              <Input name="g2"
                     label="View"
                     type="radio"
                     onClick={this.props.choice1}
              />
              <Input name="g2"
                     label="Edit"
                     type="radio"
                     onClick={this.props.choice2}
              />
              <Input name="g2"
                     label="Add"
                     type="radio"
                     onClick={this.props.choice3}
              />
              <Input name="g2"
                     label="Delete"
                     type="radio"
                     onClick={this.props.choice4}
              />
              <br /><br />
            </CollectionItem>
          </Collection>
        </div>
        </Col>
      </div>
    )
  }
}
