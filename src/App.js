import React, { Component } from 'react';

import bb8 from './images/bb8.svg';
import deathstar from './images/deathstar.svg';
import rebel from './images/rebel.svg';
import falconImg from './images/falcon.svg';

import './App.css';
import IntroScreen from './IntroScreen/IntroScreen.js';
import CardContainer from './CardContainer/CardContainer.js';
// import Helper from './Helper/Helper';
import Button from './Button/Button';

const getData = require ('./Helper/Helper').getData

class App extends Component {
  constructor() {
    super();
    this.data = {};
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      films: [],
      currentFilm: {}
    }
  }

  componentDidMount(){
    getData()
    .then(film => this.setState({
      currentFilm: film
    }))
  }

  render() {
    const { currentFilm } = this.state
    return (
      <div className="App">
        <IntroScreen 
          crawl={currentFilm.opening_crawl}
          title={currentFilm.title}
          year={currentFilm.release_date}
        />
        <div className="button-container">
          <Button purpose="People" image={bb8}/>
          <Button purpose="Planet" image={deathstar}/>
          <Button purpose="Vehicle" image={falconImg}/>
          <Button purpose="Favorites" image={rebel}/>
        </div>
        <CardContainer />
      </div>
    );
  }
}

export default App;
