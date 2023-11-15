import PropTypes from 'prop-types';
import MovieListItem from '#components/MovieListItem/MovieListItem';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(({ id, title }) => (
        <li className={css.moviesList__item} key={id}>
          <MovieListItem title={title} id={id} />
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { MovieList as default };
