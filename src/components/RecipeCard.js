import React, { Component } from 'react';
import Recipes from './Recipes.js';

class RecipeCard extends Component {
  render() {
    return (
      <li key = {this.props.recipe.index}>
        <h3>{this.props.recipe.name}</h3>
        <p>{this.props.recipe.ingredients}</p>
        <p>{this.props.recipe.directions}</p>
        <input type = "button" value = "Edit"/>
      </li>
    )
  }
}

export default RecipeCard
