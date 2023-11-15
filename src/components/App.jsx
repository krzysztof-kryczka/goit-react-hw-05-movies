import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('#pages/Home/Home'));
const Movies = lazy(() => import('#pages/Movies/Movies'));
const MovieDetails = lazy(() => import('#pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('#components/Cast/Cast'));
const Reviews = lazy(() => import('#components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
