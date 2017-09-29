import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import './App.css';
import Home from "./components/home/home";
import About from "./components/about/about";
import Create from "./components/create/create";

class App extends Component {

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>

        <hr/>

        <Route exact="/" path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/create" component={Create} />
      </div>
    );
  }
}

export default App;
