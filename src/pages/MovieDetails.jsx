import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

import match from '../types/movieDetails';

import './styles/movieDetails.css';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const movie = await movieAPI.getMovie(id);

    console.log(movie);

    this.setState({
      movie,
      loading: false,
    });
  }

  render() {
    const { movie, loading } = this.state;

    if (loading) return <Loading />;

    const {
      id, title, storyline, imagePath, genre, rating, subtitle,
    } = movie;

    return (
      <div className="movie-details-container">
        <div data-testid="movie-details" className="movie-container">
          <div className="movie-details">
            <img alt="Movie Cover" src={`../${imagePath}`} />
            <div className="info">
              <h2>{title}</h2>
              <p>{`Subtitle: ${subtitle}`}</p>
              <p>{`Storyline: ${storyline}`}</p>
              <p>{`Genre: ${genre}`}</p>
              <p>{`Rating: ${rating}`}</p>
              <div className="links">
                <Link to="/">VOLTAR</Link>
                <Link to={`/movies/${id}/edit`}>EDITAR</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape(match).isRequired,
};
