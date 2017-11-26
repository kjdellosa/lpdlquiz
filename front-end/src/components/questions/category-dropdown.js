import React, { Component } from 'react';
import {Row, Input} from 'react-materialize';
// <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>

export default class Home extends Component{
  constructor(props){
    super(props);

      this.state = {
        categories: []
      }

      this.getCategories = this.getCategories.bind(this);
      this.getCategories();
  }

  getCategories(){
    fetch('http://localhost:3001/quiz/find-all-categories')
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      this.setState({categories: result});
    })
  }

  render(props){
    return(
      <div>
      <Row>{
        this.state.categories.map((category) => {
          return (
            <Input name="g1"
                   value={category.categoryName}
                   label={category.categoryName}
                   type="radio"
                   onClick={this.props.handler}/>
          )
        })
      }</Row>
      </div>
    )
  }
}
