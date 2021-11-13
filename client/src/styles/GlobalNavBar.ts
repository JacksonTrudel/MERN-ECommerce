import colors from './Colors';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row' as 'row',
        width: '100%',
        backgroundColor: colors.mainNavBarBackground,
        borderTop: '10px solid #ffffff',
        color: '#FFFFFF',
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
};

export default styles;
