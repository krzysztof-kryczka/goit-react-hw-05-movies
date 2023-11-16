import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '#components/Loader/Loader';
import { fetchMovieDetailsById } from '#services/themoviedb-api';
import { STATUS } from '#consts/consts';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState();
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setStatus(STATUS.PENDING);
      setLoader(true);
      try {
        const details = await fetchMovieDetailsById(movieId, 'reviews');
        setMovieReviews(details.results);
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
        <ul className={css.reviewsList}>
          {movieReviews.length ? (
            movieReviews.map(({ id, content, author_details: { name } }) => (
              <li key={id}>
                <p className={css.reviewsAuthor}>Author: {name}</p>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <p className={css.reviews}>
              We don't have any reviews for this movie.
            </p>
          )}
        </ul>
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

export { Reviews as default };
