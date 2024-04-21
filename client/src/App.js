
import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';

import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'

const scrollToTop = () => {
  animateScroll.scrollToTop();
};

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
        <div className="container-home">
          <About></About>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
          {/* <h1>Here is a new feature</h1>
          <h1>{this.state.response.body}</h1> */}
          <ScrollToTopButton />
        </div>
      </div>
    );
  }
}

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    showButton && (
      <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>Scroll to Top</button>
    )
  );
};


export default App;
