import styles from '../styles/GlobalNavBar';
import { incrementCounter } from '../redux/actions/CounterActions';
import { useAppDispatch } from '../redux/hooks';
import colors from '../styles/Colors';

function GlobalNavBar() {
    const dispatch = useAppDispatch();
    //const counterValue = useAppSelector((state: any) => state.counter.value);

    return (
        <div style={styles.headerContainer}>
            <div style={styles.headerTopRow}>
                <div style={{ ...styles.accountActionsContainer, marginLeft: 'auto' }}>
                    <div
                        style={styles.accountActionItem}
                        onClick={() => dispatch(incrementCounter({ incrementAmount: 1 }))}
                    >
                        Sign In
                    </div>
                    <div style={styles.accountActionItem}>Create Account</div>
                </div>
            </div>
            <div style={styles.headerPageNav}>
                <div style={{ ...styles.pageNavContainer, margin: '0 auto 0 7%' }}>
                    <div style={styles.pageNavItem} onClick={() => dispatch(incrementCounter({ incrementAmount: 1 }))}>
                        Homepage
                    </div>
                    <div style={{ ...styles.pageNavItem, borderRight: `1px solid ${colors.lightAccent}` }}>
                        Upload Item
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlobalNavBar;
