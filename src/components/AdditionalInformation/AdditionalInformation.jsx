import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './AdditionalInformation.module.css';
import { Suspense } from 'react';

export const AdditionalInformation = () => {
  const location = useLocation();
  const prevPath = location.state?.from ?? '/movies';

  return (
    <>
      <hr />
      <div>
        <h3 className={css.moviesAdd__info}>Additional information</h3>
        <ul className={css.moviesBtn__list}>
          <li className={css.moviesBtn__item}>
            <Link
              className={css.moviesBtn__link}
              to="cast"
              state={{ from: prevPath }}
            >
              Cast
            </Link>
          </li>
          <li className={css.moviesBtn__item}>
            <Link
              className={css.moviesBtn__link}
              to="reviews"
              state={{ from: prevPath }}
            >
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Suspense fallback={<p>Loading additional information...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
