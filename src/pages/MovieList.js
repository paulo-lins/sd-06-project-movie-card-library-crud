import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.fetchMovies = this.fetchMovies.bind(this);
    this.state = {
      movies: [],
      loading: true,
    }
  }
  componentDidMount() {
    this.fetchMovies();
  }
  async fetchMovies() {
    const requestObj = await movieAPI.getMovies(); // retorna o filme - faz o fetch
        this.setState({
          movies: requestObj, // coloca dentro de movies o filme retornado
          loading: false,
        });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propType = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};
export default MovieList;
