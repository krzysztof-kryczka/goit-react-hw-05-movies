import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieListItem.module.css';

const MovieListItem = ({ id, title }) => {
  const location = useLocation();
  const nextPath = location.pathname === '/' ? 'movies/' : '';

  return (
    <Link
      className={css.moviesList__link}
      to={`${nextPath}${id}`}
      state={{ from: location }}
    >
      {title}
    </Link>
  );
};

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { MovieListItem as default };
