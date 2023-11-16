import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from '#components/Loader/Loader';
import { fetchMovieByKeyword } from '#services/themoviedb-api';
import { STATUS } from '#consts/consts';
import MovieList from '#components/MovieList/MovieList';
import { SearchForm } from '#components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const moviesName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);

  const handleOnSubmit = query => {
    const changeParams = query !== '' ? { query } : {};
    setSearchParams(changeParams);
  };

  useEffect(() => {
    if (!moviesName) return;
    console.log(moviesName);
    const getSearchMovie = async () => {
      setStatus(STATUS.PENDING);
      setLoader(true);
      try {
        const response = await fetchMovieByKeyword(moviesName);
        console.log(response);
        setMovies(response);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(STATUS.REJECTED);
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getSearchMovie();
  }, [moviesName]);

  return (
    <>
      <SearchForm value={moviesName} onSearch={handleOnSubmit} />
      {status === STATUS.PENDING && loader && <Loader />}
      {status === STATUS.REJECTED && <p>{error}</p>}
      {status === STATUS.RESOLVED && movies?.length > 0 && (
        <MovieList movies={movies} />
      )}
    </>
  );
};

// At the moment, React.lazy() does not support using named
// exports for React components. If you wish to use named exports
// containing React components, you need to reexport them as
// default exports in separate intermediate modules.

export { Movies as default };
