import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
  constructor() {
    super();

    this.deleteMovie = this.deleteMovie.bind(this);

    this.state = {
      movie: [],
      shouldRedirect: false,
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const fetchData = await movieAPI.getMovie(id);
    this.setState({ movie: fetchData});
  }

  async deleteMovie(movieId) {
    await movieAPI.deleteMovie(movieId);
    this.setState({ shouldRedirect: true })
  }

  render() {
    const { shouldRedirect, movie } = this.state;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (shouldRedirect) return <Redirect to="/" />;

    if (movie.length === 0) return <Loading />;


    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <p>{`Title: ${title}`}</p>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <button><Link to={`/movies/${id}/edit`}>EDITAR</Link></button>
        <button><Link to="/">VOLTAR</Link></button>
        <button type="button" onClick={() => this.deleteMovie(id) }><Link to="/">DELETAR</Link></button>
      </div>
    );
  }
}

export default MovieDetails;
