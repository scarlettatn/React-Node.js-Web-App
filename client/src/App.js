import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { animateScroll } from 'react-scroll';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom';


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
        <Outlet></Outlet> {/* Child routes will render here */}
        <ScrollToTopButton></ScrollToTopButton>
      </div>
    );
  }
}

/* <ScrollToTopButton /> */


/*Scroll to top button - hidding effect at the top*/
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
      <div onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: '#fff', border: 'none', borderRadius: '50%', zIndex: '999' }}>
        <FontAwesomeIcon icon={faCircleArrowUp}  style={{ color: '#333', fontSize: '24px' }} />
      </div>
    )
  );
};


export default App;
