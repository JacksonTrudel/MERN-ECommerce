import styles from '../styles/components/GlobalNavBar';

function GlobalFooter() {
    return (
        <div style={styles.footer}>
            <div style={{ ...styles.accountActionsContainer, margin: 'auto auto 0' }}>
                <div style={styles.accountActionItem}>Happy Shopping!</div>
            </div>
        </div>
    );
}

export default GlobalFooter;
