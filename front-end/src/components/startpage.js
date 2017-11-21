import React, { Component } from 'react';
import {Navbar, NavItem, Icon} from 'react-materialize'

export default class Home extends Component {
  render(props){
    return(
      <div>
        <Navbar className="red darken-4" brand="Elbi Quiz" right>
        	<NavItem href='#'>Manage</NavItem>
        </Navbar>

        <div class="section no-pad-bot" id="index-banner">
          <div class="container">
            <br></br>
            <h1 class="header center red-text">The Elbi Quiz!</h1>
            <div class="row center">
            <h5 class="header col s12 light">A general information quiz about Los Banos</h5>
          </div>

          <div class="row center">
            <a href="#" id="download-button" class="btn-large waves-effect waves-light red">Start the Quiz!</a>
            </div>
            <br></br>
          </div>
        </div>

        <div class="container">
          <div class="section">
            <div class="row">
              <div class="col m5ths s6">
                <div class="icon-block">
                <h2 class="center red-text text-darken-4"><i class="material-icons">date_range</i></h2>
                <h5 class="center">History</h5>

                <p class="light"></p>
                </div>
              </div>
              <div class="col m5ths s6">
                <div class="icon-block">
                <h2 class="center red-text text-darken-4"><i class="material-icons">lightbulb_outline</i></h2>
                <h5 class="center">General Knowledge</h5>

                <p class="light"></p>
                </div>
              </div>
              <div class="col m5ths s6">
                <div class="icon-block">
                <h2 class="center red-text text-darken-4"><i class="material-icons">local_bar</i></h2>
                <h5 class="center">Nightlife</h5>

                <p class="light"></p>
                </div>
              </div>
              <div class="col m5ths s6">
                <div class="icon-block">
                <h2 class="center red-text text-darken-4"><i class="material-icons">restaurant</i></h2>
                <h5 class="center">Kainan</h5>

                <p class="light"></p>
                </div>
              </div>
              <div class="col m5ths s6">
                <div class="icon-block">
                <h2 class="center red-text text-darken-4"><i class="material-icons">layers</i></h2>
                <h5 class="center">Geography</h5>

                <p class="light"></p>
                </div>
              </div>
          </div>
        </div>
        <br></br>
        </div>

        <footer class="page-footer red darken-4">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">LPDL</h5>
            <p class="grey-text text-lighten-4">CMSC 100 EF-1L 1st Semester 2017-2018</p>
          </div>
          <div class="col l4 s12">
            <h5 class="white-text">Authors</h5>
            <ul>
              <li><a class="white-text" href="#!">Legaspi, Stephanie Y.</a></li>
              <li><a class="white-text" href="#!">Pamintuan, Jolicia Aicila Marie R.</a></li>
              <li><a class="white-text" href="#!">Dellosa, Ken J.</a></li>
              <li><a class="white-text" href="#!">Leal, Merry Trizia M.</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        Mercy and Compassion please
        </div>
      </div>
    </footer>
      </div>
    )
  }
}
