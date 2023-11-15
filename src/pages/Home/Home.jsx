import { useState, useEffect } from 'react';
import { Loader } from '#components/Loader/Loader';
import { fetchTrendingMovies } from '#services/themoviedb-api';
import { STATUS } from '#consts/consts';
import MovieList from '#components/MovieList/MovieList';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    trendingToday();
  }, []);

  const trendingToday = async () => {
    setStatus(STATUS.PENDING);
    setLoader(true);
    try {
      const dailyMovies = await fetchTrendingMovies();
      setMovies(dailyMovies);
      setStatus(STATUS.RESOLVED);
    } catch (err) {
      setError(err.message);
      setStatus(STATUS.REJECTED);
      console.log(err.message);
    } finally {
      setLoader(false);
    }
  };

  switch (status) {
    case STATUS.PENDING:
      return loader && <Loader />;

    case STATUS.RESOLVED:
      return movies?.length ? (
        <main>
          <h1 className={css.title}>Trending today</h1>
          <MovieList movies={movies} />
        </main>
      ) : (
        <p>There isn't any movie on this page.</p>
      );

    case STATUS.REJECTED:
      return <p>{error}</p>;

    default:
      break;
  }
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { Home as default };
