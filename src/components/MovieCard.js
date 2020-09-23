import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { imagePath, title, storyline, id } = this.props.movie;

    return (
      <div data-testid="movie-card">
        <img src={imagePath} alt={title} />
        <h3>{title}</h3>
        <h4>{storyline}</h4>
        <div>
          <Link to={`/movies/${id}`} >VER DETALHES</Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOf([PropTypes.string, PropTypes.number])),
  ).isRequired,
};

export default MovieCard;
