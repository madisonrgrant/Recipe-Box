import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Search from './components/Search';
import './App.css';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
{/*import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';*/}

class App extends Component {
  constructor(props)  {
  super(props)
  this.state = {
    }
    {/*
    this.editRecipe = this.editRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
    this.createRecipe = this.createRecipe.bind(this);
    */}
  }


  render() {
    return (
    <div className="App">
      <div className = "Header">
      <Header/>
      </div>
      <div class = "Body">
      <Search/>
      <Recipes/>
        {/*<Router>
          <Switch>
            <Route path= "/recipes" component= {Recipes}/>

             A JSX comment
            <Route path= "/about" component = {About}/>
            <Route path = "/" component = {Home}/>



          </Switch>
        </Router>
      */}
      <span>
      <input type = "button" value = "Add"/>
      <input type = "button" value = "Delete"/>
      </span>
      </div>
      <div className = "Footer">
      <Footer/>
      </div>

    </div>
    );
  }
}

export default App;
