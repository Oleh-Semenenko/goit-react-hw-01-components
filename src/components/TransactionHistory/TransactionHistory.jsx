import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { Transaction } from '../Transaction/Transaction'

export const TransactionHistory = ({items}) => {
    return (
        <table className={css.history}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <Transaction items={items} />
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}