import PropTypes from 'prop-types';
import noImage from './no-image-svgrepo-com.png';
import css from './MovieCard.module.css';

export const MovieCard = ({ details }) => {
  const {
    poster_path = '',
    title = '',
    release_date = '',
    vote_average = '',
    overview = '',
    genres = [],
  } = details;

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : noImage;
  const userScore = Math.round(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');

  return (
    <div className={css.movieDetails}>
      <img src={posterUrl} alt={`${title}`} />
      <div>
        <h1>
          {title} ({release_date.slice(0, 4)})
        </h1>
        <p>User Score: {userScore}%</p>
        <h2>Overview:</h2> <p>{overview}</p>
        <h2>Genres:</h2> <p>{movieGenres}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
