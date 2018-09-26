import React, { Component } from 'react'
import recipes from '../store.js';
import Select from 'react-select';
import Animated from 'react-select/lib/animated';
import Creatable from 'react-select/lib/Creatable';
import Async from 'react-select/lib/Async'
// import { colourOptions } from '.../data';

var recipe = [
  {
  id: 1,
  name: 'Mac & cheese',
  ingredients: "cheese, milk, butter, noodles",
  directions: "put it all together"
  },
  {
   id: 2,
   name: 'Tofu Burger',
   ingredients: "tofu, bread",
   directions: "put it alllll together"
  }
]


class NewSearch extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm:"",
      selectedRecipe: null,
    }
  }

  handleChange = (selectedRecipe) => {
    console.log(selectedRecipe)
    this.setState({ selectedRecipe });
    console.log(`Recipe selected:`, selectedRecipe);
  }
  render() {
    const { selectedRecipe } = this.state;

    return (
      <Select
        value={selectedRecipe}
        onChange={this.handleChange}
        recipes = {recipes}
      />
    );
  }
}


export default NewSearch;
