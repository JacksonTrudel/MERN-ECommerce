import styles from '../styles/GlobalNavBar';
import { incrementCounter } from '../redux/actions/CounterActions';
import { useAppDispatch } from '../redux/hooks';
import colors from '../styles/Colors';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

enum NavBarSelection {
    HOMEPAGE,
    UPLOAD_ITEM,
    NONE,
}

const navSelectionToPath = new Map<NavBarSelection, string>([
    [NavBarSelection.HOMEPAGE, '/'],
    [NavBarSelection.UPLOAD_ITEM, '/upload-item'],
]);

function GlobalNavBar() {
    const dispatch = useAppDispatch();
    const [navBarActiveSelection, setNavBarActiveSelection] = useState<NavBarSelection>(NavBarSelection.NONE);

    useEffect(() => {
        setNavBarActiveSelection(NavBarSelection.NONE);
    }, [navBarActiveSelection]);

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
                    <div style={styles.pageNavItem} onClick={() => setNavBarActiveSelection(NavBarSelection.HOMEPAGE)}>
                        Homepage
                    </div>
                    <div
                        style={{ ...styles.pageNavItem, borderRight: `1px solid ${colors.lightAccent}` }}
                        onClick={() => setNavBarActiveSelection(NavBarSelection.UPLOAD_ITEM)}
                    >
                        Upload Item
                    </div>
                </div>
            </div>
            {
                // redirects
                navBarActiveSelection !== NavBarSelection.NONE ? (
                    <Navigate to={navSelectionToPath.get(navBarActiveSelection) ?? '/error'} />
                ) : null
            }
        </div>
    );
}

export default GlobalNavBar;
