import React, { Component } from 'react';
import Recipes from './Recipes.js';

class Search extends Component {
  constructor(props)  {
  super(props)
  this.state = {
    value: ''
  }
}
handleChange(e) {
 this.setState({value: e.target.value})
}

searchBar(value) {
  let valueSplit = value.split("")
  let nameSplit = this.props.recipe.name.split("")
  let ingredientsSplit = this.props.recipe.name.split("")
  let search


{/*
  valueSplit.map()
  ingredientsSplit.map()
  nameSplit.map()

  if (valueSplit[i] === nameSplit[i] || valueSplit[i] === ingredientsSplit[i]) {
    search = recipes.map(recipe => {

    })
  }

      if(recipes === "undefined") {
        content = "No recipes found."
      } else {
        content = recipes.map(recipe => {
          return (<RecipeCard recipe = {recipe}/>)
        })
      }

Remember content variable*/}

  } else {
    "There are no search options for this input."
  }

}



  render() {
    return (
      <label>
        Search:
        <input type = "text" value={this.state.value} onChange= {this.handleChange.bind(this)} />
      </label>
    )
  }
}


export default Search
