
import React, { Component } from 'react'
import recipes from '../store.js';

class Search extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      recipeNames: recipes.name
      recipeIngredients: recipes.ingredients
    }
  }


  onChange = (e) => {
    console.log(e.target.value)
    let input = e.target.value
    this.setState({searchTerm: input})
    let { searchTerm } = this.state
    e.preventDefault()
    console.log("form submitted")
    console.log(searchTerm)
    let searchRecipes = recipes.filter(rec => (searchTerm == rec.name))
    //searchTerm == rec.name || searchTerm == rec.ingredients
    console.log(searchRecipes)
    return searchRecipes
  }

      render() {
        return (
          <label>
          <div>
            Need to find a specific recipe?
            </div>
            <input type = "text" onChange={this.onChange} value={this.state.searchTerm} placeholder = "Search" />
          </label>
        )
      }
    }


export default Search;
