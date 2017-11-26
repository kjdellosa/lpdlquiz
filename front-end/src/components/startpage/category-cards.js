import React, { Component } from 'react';

export default class Home extends Component{
  render(props){
    return(
      <div>
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
      </div>
    )
  }
}
