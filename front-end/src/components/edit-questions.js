import React, { Component } from 'react';
import Nav from './navigation.js';
import Footer from './footer.js';
import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input, Collection, CollectionItem} from 'react-materialize';

export default class Home extends Component{
  render(props){
    return(
      <div>
        <Nav />

        <main>
          <br />
          <h5 class="center-align">View/Edit Questions</h5>

          <Row>
            <Col s={1} m={3}>
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

            <div id="question_cards">
            <Col s={1} m={3}>
              <CardPanel className="red lighten-2 black-text">
                <CardTitle>Question: Some data</CardTitle>
                <span>Answer: A</span>
                <br />
                <span>Choices: A</span>
                <span></span>
              </CardPanel>
            </Col>
            </div>
          </Row>
        </main>

        <Footer/>
      </div>
    )
  }
}
