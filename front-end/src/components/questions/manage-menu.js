import React, { Component } from 'react';
import Nav from '../navigation.js';
import Footer from '../footer.js';
import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input, Collection, CollectionItem} from 'react-materialize';

// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
export default class Home extends Component{
  render(props){
    return(
      <div>
        <Col s={12} m={2}>
        <div id="editmenu">
          <Collection>
            <CollectionItem>
              <p>
              <input name="grp1" type="radio" id="r1" />
              <label for="r1">View</label>
              </p>
              <p>
              <input name="grp1" type="radio" id="r2" />
              <label for="r2">Edit</label>
              </p>
              <p>
              <input name="grp1" type="radio" id="r3" />
              <label for="r3">Add</label>
              </p>
              <p>
              <input name="grp1" type="radio" id="r4" />
              <label for="r4">Delete</label>
              </p>
            </CollectionItem>
          </Collection>
        </div>
        </Col>
      </div>
    )
  }
}
