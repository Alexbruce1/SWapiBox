import React from 'react';

import logo from '../images/SWlogo.png'
import rebelClear from '../images/rebel-yellow.svg'
import './IntroScreen.css';
import PropTypes from 'prop-types';

const IntroScreen = ( props ) => {

  return (
    <div className="intro-container">
      <div className="title-container" >
        <h1 className="sw-logo" >swapi</h1>
          <h1 className="sw-logo-film" >{props.title}</h1>
        <h1 className="sw-logo" >box</h1>
      </div>
      {/* <img alt="logo" src={logo} className="intro-logo" /> */}
      <div className="intro-screen" id="board" >
        <div id="content">
          <p className="crawl-head" id="subtitle">{props.title}</p>
          <p className="crawl-head" id="title">{props.year}</p>
          <div className="crawl-text">
              {props.crawl}
          </div>
        </div>
      </div>
      <button className="intro-arrow" >
        <img alt="" src={rebelClear} className="rebellion-button" />
      </button>
    </div>
  )
}

IntroScreen.propTypes = {
  crawl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string
}

export default IntroScreen;