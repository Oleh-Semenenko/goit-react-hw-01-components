import PropTypes from 'prop-types';
import css from './StatList.module.css';
import { getRandomHexColor } from 'get-random-color';

export const StatList = ({ stats }) => {
    return (
        <ul className={css.list}>
            {stats.map(({id, label, percentage}) => (
                <li key={id} className={css.item} style={{backgroundColor: getRandomHexColor()}}>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li>
            ))}
        </ul>
    )
}

StatList.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
}