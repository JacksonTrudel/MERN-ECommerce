import styles from '../styles/GlobalNavBar';
import { incrementCounter } from '../redux/actions/CounterActions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

function GlobalNavBar() {
    const dispatch = useAppDispatch();
    const counterValue = useAppSelector((state) => state.counter.value);

    return (
        <div style={styles.container}>
            <div style={{ ...styles.accountActionsContainer, marginLeft: 'auto' }}>
                <div style={styles.accountActionItem}>{counterValue}</div>
                <div
                    style={styles.accountActionItem}
                    onClick={() => dispatch(incrementCounter({ incrementAmount: 1 }))}
                >
                    Sign In
                </div>
                <div style={styles.accountActionItem}>Create Account</div>
            </div>
        </div>
    );
}

export default GlobalNavBar;
