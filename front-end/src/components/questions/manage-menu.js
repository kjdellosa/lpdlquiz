import React, { Component } from 'react';
import Nav from '../navigation.js';
import Footer from '../footer.js';
import {Col, Collection, CollectionItem} from 'react-materialize';
import Choice from './category-dropdown.js';

export default class Home extends Component{
  render(props){
    return(
      <div>
        <Col s={12} m={12}>
        <div id="editmenu">
          <Collection>
            <CollectionItem>
              <p>
              <h6>Categories:</h6>
              <Choice categories={this.props.categories}
                      handler={this.props.handler}/>
              </p>
              <h6>Options:</h6>
              <p>
              <input onClick={this.props.choice1} name="grp1" type="radio" id="r1" />
              <label for="r1">View</label>
              </p>
              <p>
              <input onClick={this.props.choice2} name="grp1" type="radio" id="r2" />
              <label for="r2">Edit</label>
              </p>
              <p>
              <input onClick={this.props.choice3} name="grp1" type="radio" id="r3" />
              <label for="r3">Add</label>
              </p>
              <p>
              <input onClick={this.props.choice4} name="grp1" type="radio" id="r4" />
              <label for="r4">Delete</label>
              </p>
              <br /><br />
            </CollectionItem>
          </Collection>
        </div>
        </Col>
      </div>
    )
  }
}
