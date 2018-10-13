import React, { Component } from 'react';

import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
    }
  }

  changeFavorite = () => {
    this.setState({
      favorite: !this.state.favorite
    })
  }

  componentDidUpdate = () => {
    const { Name, population, Species, Homeworld } = this.props.person;
    }

    
    render() {
    const { peoplename, population, species, homeworld } = this.props.people;
    const { planetname, terrain, planetpopulation, climate, residents} = this.props.planets;
    const { vehiclename , model, vehicle_class, passengers } = this.props.vehicles;
    return(
      <div className="person-card" >
        <div className="card-title">
          <h2 className="card-name">
            { peoplename }
          </h2>
        </div>
        <p className="card-species">
          { species }
        </p>
        <p className="card-home">
          <strong>
            home World: 
          </strong>
          { homeworld }
        </p>
        <p className="card-population">
          <strong>
            Population: 
          </strong>
          { population }
        </p>
        <button className="favorite-button" onClick={this.changeFavorite} >Add To Favorites</button>
      </div>
    )
  }
}

Card.propTypes = {
  person: PropTypes.object.isRequired,
}

export default Card;