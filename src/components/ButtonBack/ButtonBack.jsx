import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import css from './ButtonBack.module.css';

export const ButtonBack = ({ to }) => {
  return (
    <Link className={css.buttonBackLink} to={to}>
      <button type="button" className={css.buttonBack}>
        <FiArrowLeftCircle /> Come Back Button
      </button>
    </Link>
  );
};
