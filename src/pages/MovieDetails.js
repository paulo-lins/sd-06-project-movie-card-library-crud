import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import PropTypes from 'prop-types';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: [],
      loading: true,
    };

    this.fetchMovieDetails = this.fetchMovieDetails.bind(this);
  }

  componentDidMount() {
    this.fetchMovieDetails();
  }

  async fetchMovieDetails() {
    const id = this.props.match.params.id;
    const movie = await movieAPI.getMovie(id);
    this.setState({ movie: movie, loading: false });
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = this.state.movie;

    return (
      <div data-testid="movie-details">
        {this.state.loading === true ? <Loading /> :
        <div>
          <img alt="Movie Cover" src={`../${imagePath}`} />
          <p>{`Title: ${title}`}</p>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          <Link to="/">VOLTAR</Link>
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/" onClick={() => movieAPI.deleteMovie(id)}>DELETAR</Link>
        </div>}
      </div>
    );
  }
  }


MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }),
};

MovieDetails.propTypes = { match: PropTypes.objectOf(Array).isRequired };

export default MovieDetails;
