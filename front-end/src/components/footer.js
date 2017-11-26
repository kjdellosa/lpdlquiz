import React, { Component } from 'react';
import {Footer} from 'react-materialize'
export default class Home extends Component{
  render(props){
    return(
      <div>
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
            2017-2018
          </div>
        </div>
        </footer>
      </div>
    )
  }
}
