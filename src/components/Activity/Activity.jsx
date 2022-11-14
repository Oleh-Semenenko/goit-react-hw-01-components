import PropTypes from 'prop-types';
import css from './Activity.module.css';

export const Activity = ({followers, views, likes}) => {
    return (
        <ul className={css.stats}>
            <li className={css.item}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.item}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    )
}

Activity.propTypes = {
    stats: PropTypes.objectOf(PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }))
}