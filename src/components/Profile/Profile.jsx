import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { Activity } from "components/Activity/Activity";

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <Activity followers={stats.followers} views={stats.views} likes={stats.likes} />
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired, 
    avatar: PropTypes.string.isRequired, 
    stats: PropTypes.object.isRequired,
}