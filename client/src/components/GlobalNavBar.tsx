import styles from '../styles/GlobalNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../redux/actions/CounterActions';
import { RootState } from '../redux/RootReducer';

function GlobalNavBar() {
    const dispatch = useDispatch();
    const counterValue = useSelector((state: RootState) => state.counter.value);

    return (
        <div style={styles.container}>
            <div style={{ ...styles.accountActionsContainer, marginLeft: 'auto' }}>
                <div style={styles.accountActionItem}>{counterValue}</div>
                <div style={styles.accountActionItem} onClick={() => dispatch(incrementCounter(1))}>
                    Sign In
                </div>
                <div style={styles.accountActionItem}>Create Account</div>
            </div>
        </div>
    );
}

export default GlobalNavBar;
