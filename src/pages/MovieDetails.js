import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super();

    this.state = {
      movie: [],
      loading: true,
      movieId: props.match.params.id,
    }
  }

  componentDidMount() {
    this.fetchMovie()
  }

  async fetchMovie() {
    const result = await movieAPI.getMovie(this.state.movieId)
    this.setState({ movie: result, loading: false })
  }

  render() {
    const { movie, loading } = this.state;

    if (loading === true) { return <Loading /> }

    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <p><Link to={`/movies/${id}/edit`}>EDITAR</Link></p>
        <p><Link to={"/"}>VOLTAR</Link></p>
      </div>
    );
  }
}

export default MovieDetails;
