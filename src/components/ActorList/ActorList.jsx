import PropTypes from 'prop-types';
import { ActorListItem } from '#components/ActorListItem/ActorListItem';
import css from './ActorList.module.css';

export const ActorList = ({ actors }) => {
  return (
    <ul className={css.castList}>
      {actors.map(({ id, name, character, profile_path }) => (
        <li className={css.castItem} key={id}>
          <ActorListItem
            name={name}
            character={character}
            photo={profile_path ? profile_path : ''}
          />
        </li>
      ))}
    </ul>
  );
};

ActorList.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_pathid: PropTypes.string,
    })
  ),
};
