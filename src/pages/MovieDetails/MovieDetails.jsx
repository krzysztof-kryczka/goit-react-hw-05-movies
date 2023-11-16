import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '#components/Loader/Loader';
import { fetchMovieDetailsById } from '#services/themoviedb-api';
import { MovieCard } from '#components/MovieCard/MovieCard';
import { AdditionalInformation } from '#components/AdditionalInformation/AdditionalInformation';
import { ButtonBack } from '#components/ButtonBack/ButtonBack';

import { STATUS } from '#consts/consts';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const buttonBack = location.state?.from ?? `/`;

  useEffect(() => {
    const getMovieDetails = async () => {
      setStatus(STATUS.PENDING);
      setLoader(true);
      try {
        const details = await fetchMovieDetailsById(movieId);
        setMovieDetails(details);
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
      return (
        <div>
          <ButtonBack to={buttonBack} />
          <MovieCard details={movieDetails} />
          <AdditionalInformation />
        </div>
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

export { MovieDetails as default };
