/*
    To add a new entry to the nav bar, complete the following steps:
        (Step 1:) Add to NavBarSelection enum
        (Step 2:) Add mapping to URL path
        (Step 3:) Add JSX for entry

    The appropriate locations for each step are commented.
*/

import styles from '../styles/GlobalNavBar';
import { incrementCounter } from '../redux/actions/CounterActions';
import { useAppDispatch } from '../redux/hooks';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import NavBarItem from './NavBarItem';

export enum NavBarSelection {
    HOMEPAGE,
    UPLOAD_ITEM,
    // (Step 1:) Add to NavBarSelection enum
    NONE,
}

const navSelectionToPath = new Map<NavBarSelection, string>([
    [NavBarSelection.HOMEPAGE, '/'],
    [NavBarSelection.UPLOAD_ITEM, '/upload-item'],
    // (Step 2:) Add mapping to URL path
]);

function getCurrentPage(pathname: string): NavBarSelection {
    let currentPage = NavBarSelection.NONE;
    navSelectionToPath.forEach((value: string, key: NavBarSelection) => {
        if (pathname.indexOf(value) >= 0) currentPage = key;
    });
    return currentPage;
}

function GlobalNavBar() {
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(getCurrentPage(window.location.pathname));
    const [navBarActiveSelection, setNavBarActiveSelection] = useState<NavBarSelection>(NavBarSelection.NONE);

    useEffect(() => {
        setCurrentPage(getCurrentPage(window.location.pathname));
        setNavBarActiveSelection(NavBarSelection.NONE);
    }, [navBarActiveSelection, currentPage]);

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
                <div style={styles.pageNavContainer}>
                    <NavBarItem
                        label="Homepage"
                        isSelected={currentPage === NavBarSelection.HOMEPAGE}
                        onClick={() => setNavBarActiveSelection(NavBarSelection.HOMEPAGE)}
                    />
                    <NavBarItem
                        label="Upload Item"
                        isSelected={currentPage === NavBarSelection.UPLOAD_ITEM}
                        onClick={() => setNavBarActiveSelection(NavBarSelection.UPLOAD_ITEM)}
                    />
                    {/*     (Step 3:) Add JSX for entry   */}
                </div>
            </div>
            {
                // redirect
                navBarActiveSelection !== NavBarSelection.NONE ? (
                    <Navigate to={navSelectionToPath.get(navBarActiveSelection) ?? '/error'} />
                ) : null
            }
        </div>
    );
}

export default GlobalNavBar;
