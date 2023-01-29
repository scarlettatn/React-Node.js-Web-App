
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Contact from './components/contact'
import Navbar from './components/navbar'
import About from './components/about'

class App extends Component {
  state = {
    response: {}
  };

  componentDidMount() {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <About></About>
        <Contact></Contact>
        <h1>Here is a new feature</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default App;
