import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '#components/Loader/Loader';
import { fetchMovieDetailsById } from '#services/themoviedb-api';
import css from './Cast.module.css';
import { ActorList } from '#components/ActorList/ActorList';
import { STATUS } from '#consts/consts';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCasts, setMovieCasts] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setStatus(STATUS.PENDING);
      setLoader(true);
      try {
        const details = await fetchMovieDetailsById(movieId, 'credits');
        setMovieCasts(details.cast);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        setError(err.message);
        setStatus(STATUS.REJECTED);
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getMovieDetails();
  }, [movieId]);

  switch (status) {
    case STATUS.PENDING:
      return loader && <Loader />;

    case STATUS.RESOLVED:
      return movieCasts.length ? (
        <ActorList actors={movieCasts} />
      ) : (
        <p className={css.cast}>
          We don't have any info about actors for this movie.
        </p>
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

export { Cast as default };
