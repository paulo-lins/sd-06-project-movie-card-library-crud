import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, id } = movie;
    return (
      <div data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Link to={`/movies/${id}`}>VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

const { string } = PropTypes;
const { number } = PropTypes;
const { bool } = PropTypes;
const obj = {
  title: string,
  subtitle: string,
  storyline: string,
  rating: number,
  imagePath: string,
  bookmarked: bool,
  genre: string,
};
MovieCard.propTypes = { movie: PropTypes.shape(obj).isRequired };

export default MovieCard;
