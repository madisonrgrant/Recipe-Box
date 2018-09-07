import React, { Component } from 'react';
import RecipeCard from './RecipeCard'
import './Recipes.css';
import StackGrid from "react-stack-grid";
import recipes from "../store.js"

class Recipes extends Component {

  render () {
    let content

    if(recipes === "undefined") {
      content = "No recipes found."
    } else {
      content = recipes.map(recipe => {
        return (<RecipeCard recipe = {recipe}/>)
      })
    }

    return (
      <StackGrid columnWidth={250}>
        {content}
      </StackGrid>
    )
  }
}

export default Recipes
