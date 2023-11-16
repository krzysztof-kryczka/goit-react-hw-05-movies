import PropTypes from 'prop-types';
import css from './ActorListItem.module.css';
import noPhoto from './no-image-actor.jpg';

export const ActorListItem = ({ name, character, photo }) => {
  const photoUrl = photo ? `https://image.tmdb.org/t/p/w200${photo}` : noPhoto;

  return (
    <>
      <img
        className={css.castImg}
        width="200"
        src={photoUrl}
        alt={`${name}`}
      ></img>
      <div className={css.castActor__Desc}>
        <p className={css.castActor__Name}>{name}</p>
        <p>
          <span className={css.castActor__Character}>character:</span>
          {character}
        </p>
      </div>
    </>
  );
};

ActorListItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
