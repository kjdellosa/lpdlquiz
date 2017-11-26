import React, { Component } from 'react';
import Nav from './navigation.js';
import Footer from './footer.js';
import {Card, CardTitle, Row, Col, CardPanel, Collapsible, CollapsibleItem,
Input} from 'react-materialize';

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
              <Collapsible>
                <CollapsibleItem header='Category' icon='class'>
                  <form action="#">
                  <p>
                    <input class="with-gap"name="group1" type="radio" id="test1" />
                    <label for="test1">History</label>
                  </p>
                  </form>
                </CollapsibleItem>
              </Collapsible>
            </div>
            </Col>

            <div id="question_cards">
            <Col s={1} m={3}>
              <CardPanel className="red lighten-2 black-text">
                <CardTitle>Question: Some data</CardTitle>
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
