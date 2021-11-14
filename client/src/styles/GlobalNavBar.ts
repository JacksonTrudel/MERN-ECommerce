import colors from './Colors';

const styles = {
    headerContainer: {
        display: 'flex',
        flexDirection: 'column' as 'column',
        width: '100%',
        color: colors.mainText,
    },
    headerTopRow: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        marginLeft: 'auto',
        backgroundColor: colors.headerBackground,
        width: '100%',
    },
    headerPageNav: {
        backgroundColor: colors.pageNavBackground,
        width: '100%',
        color: colors.mainBackground,
        borderTop: `3px solid ${colors.lightAccent}`,
        borderBottom: `3px solid ${colors.darkAccent}`,
    },
    footer: {
        display: 'flex',
        width: '100%',
        paddingTop: '10px',
        backgroundColor: colors.pageNavBackground,
        borderTop: `3px solid ${colors.darkAccent}`,
        color: colors.mainBackground,
    },
    accountActionsContainer: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        margin: '1vmin',
    },
    accountActionItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1vmin',
    },
    pageNavContainer: {
        display: 'flex',
        flexDirection: 'row' as 'row',
    },
    pageNavItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1vmin',
        borderLeft: `1px solid ${colors.lightAccent}`,
    },
    pageNavSelectedItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: '1vmin 3vmin',
        borderLeft: `1px solid ${colors.lightAccent}`,
        backgroundColor: colors.darkAccent,
    },
};

export default styles;
